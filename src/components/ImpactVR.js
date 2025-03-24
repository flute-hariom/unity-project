import React from "react";
import img1 from "../images/impact1.png";
import img2 from "../images/impact2.png";
import img3 from "../images/impact3.png";

const ImpactVR = () => {
  return (
    <div
      id="impactVR"
      className="impactVR flex items-center min-h-screen bg-white px-4 md:px-8 lg:px-16"
    >
      <div
        className="flex flex-col gap-8 justify-center items-center w-full"
        data-aos="fade-up"
      >
        {/* Top Section */}
        <div
          className="w-full text-center mt-10 lg:mt-16"
          data-aos="zoom-in"
          data-aos-delay="500"
        >
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-extrabold font-[Poppins,sans-serif]">
            <span className="text-white">IMPACT OF</span>{" "}
            <span className="text-[#71416b]">VR</span>
          </h1>
          <p className="my-4 text-base md:text-lg lg:text-xl font-semibold tracking-tight bg-gradient-to-r from-gray-400 via-gray-200 to-gray-400 bg-clip-text text-transparent text-left">
            Founded on the belief that VR has the power to revolutionize how
            individuals and businesses interact with digital content, Studio
            Shodwe brings together a diverse team of creative minds and
            technical experts. Our mission is to redefine storytelling and user
            engagement in the metaverse era.
          </p>
          <p className="my-4 text-base md:text-lg lg:text-xl font-semibold tracking-tight bg-gradient-to-r from-gray-400 via-gray-200 to-gray-400 bg-clip-text text-transparent text-left">
            We take responsibility for building custom software solutions that
            cater to the automation of your business processes and improve
            efficiency.
          </p>
        </div>

        {/* Bottom Section - Responsive Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[img1, img2, img3].map((img, index) => (
            <img
              key={index}
              alt="Impact Image"
              className="rounded-t w-full object-cover"
              src={img}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImpactVR;
