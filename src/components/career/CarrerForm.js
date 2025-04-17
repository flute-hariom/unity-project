import React from "react";

const CarrerForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = new FormData();
    payload.append("name", formData.name);
    payload.append("email", formData.email);
    payload.append("phone", formData.mobile);
    payload.append("job_title", formData.jobTitle);
    payload.append("exp_year", selectedYear.value);
    payload.append("exp_month", selectedMonth.value);
    payload.append("cv", formData.file);

    try {
      const response = await axios.post(
        "https://mysta-project.vercel.app/send-email",
        payload,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert(response.data.message);
      closeModal();
    } catch (error) {
      console.error("Email send failed:", error);
      alert("Failed to send application. Please try again later.");
    }
  };
  return (
    <div
      className="bg-white dark:bg-gray-700 rounded-lg shadow-lg w-full max-w-2xl p-5 relative pt-8"
      onClick={(e) => e.stopPropagation()}
    >
      <form
        className="pb-4 w-full flex flex-col space-y-3"
        onSubmit={handleSubmit}
      >
        <input
          className="p-2 w-full rounded-md ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-600 text-gray-900"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleFormChange}
          placeholder="Your full name"
          required
        />

        <input
          className="p-2 w-full rounded-md ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-600 text-gray-900"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleFormChange}
          placeholder="Your Email"
          required
        />

        <input
          className="p-2 w-full rounded-md ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-600 text-gray-900"
          type="tel"
          name="mobile"
          value={formData.mobile}
          onChange={handleFormChange}
          placeholder="Your Mobile Number"
        />

        <input
          className="p-2 w-full rounded-md ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-600 text-gray-900"
          type="text"
          name="jobTitle"
          value={formData.jobTitle}
          readOnly
          placeholder="Job Title"
        />

        <span>Experience:</span>

        <div className="flex space-x-4 text-black">
          <Select
            className="w-1/2"
            value={selectedYear}
            onChange={handleYearChange}
            options={yearOptions}
            placeholder="Years"
          />
          <Select
            className="w-1/2"
            value={selectedMonth}
            onChange={handleMonthChange}
            options={monthOptions}
            placeholder="Months"
          />
        </div>

        <input
          name="cv"
          type="file"
          onChange={handleFileChange}
          required
          className="p-2 block w-full rounded-md ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-600 text-white"
        />

        <div className="flex justify-center gap-4">
          <button
            type="submit"
            className="rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-indigo-700"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={closeModal}
            className="rounded-full bg-gray-400 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-500"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default CarrerForm;
