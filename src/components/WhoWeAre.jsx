import React from "react";

const WhoWeAre = () => {
  return (
    <>
      {/* Section Heading */}
      <div className="px-4 mt-16 flex items-center py-12" id="about">
        <div className="flex flex-col lg:flex-row justify-between w-full pl-6 lg:pl-24">
          <h1 className="text-3xl  font-extrabold text-gray-800 costumAnamation">
            Who we are
          </h1>
        </div>
      </div>

      {/* Background Image Section with Text Overlay */}
      <div className="relative rounded-2xl overflow-hidden h-screen">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-no-repeat bg-cover bg-center transition duration-1000"
          style={{
            backgroundImage: "url('/vrImage2.png')",
          }}
        />

        {/* Overlay with Text */}
        <div className="relative z-10 flex items-center h-full bg-black/50">
          <div className="w-full px-6 lg:px-24 text-white text-center lg:text-left">
            <p className="text-lg lg:text-3xl font-normal max-w-4xl mx-auto lg:mx-0">
              Our team is dedicated to bringing transformative changes to the IT
              sector. We strive to go beyond industry standards through ethical
              practices, vibrant culture, and innovative partnerships.{" "}
              <strong>DimenXion</strong> is more than a company; it's a
              commitment to shaping the future of tech, where every ethical
              choice, line of code, and partnership contributes to industry
              growth.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhoWeAre;
