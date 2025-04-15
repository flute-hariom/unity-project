const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
require("dotenv").config(); // for using environment variables

const app = express();
app.use(cors());
app.use(express.json());

// Create uploads directory if it doesn't exist
const uploadsDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

// Multer config for file upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "_" + file.originalname);
  },
});
const upload = multer({ storage });

// POST route for sending email with CV attachment
app.post("/send-email", upload.single("cv"), async (req, res) => {
  const { name, email, phone, job_title, exp_year, exp_month } = req.body;
  const cv = req.file;

  if (!cv) {
    return res
      .status(400)
      .json({ success: false, message: "CV file is missing." });
  }

  // Email transport setup using environment variables for security
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_RECEIVER || "chandhariomp@gmail.com",
      subject: `New Application from ${name} for ${job_title}`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Experience: ${exp_year} years ${exp_month} months
Job Title: ${job_title}
      `,
      attachments: [
        {
          filename: cv.originalname,
          path: cv.path,
        },
      ],
    });

    // Remove uploaded file after sending email
    fs.unlinkSync(cv.path);

    res
      .status(200)
      .json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({
      success: false,
      message: "Email failed to send.",
      error: error.message,
    });
  }
});

// Server listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
