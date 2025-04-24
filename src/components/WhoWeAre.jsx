import React from "react";

const WhoWeAre = () => {
  return (
    <>
      {/* Background Image Section with Text Overlay */}
      <div className="relative rounded-2xl overflow-hidden h-screen" id="about">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-no-repeat bg-cover bg-center transition duration-1000"
          style={{
            backgroundImage: "url('/vrImage2.png')",
          }}
        />

        {/* Overlay with Top-Aligned Text */}
        <div className="relative z-10 h-full bg-black/50 flex flex-col items-start pt-16 px-6 lg:px-24">
          <h1 className="w-1/2 my-6 text-lg lg:text-2xl font-semibold tracking-tight text-white fontArial text-left mt-40">
            Our team is dedicated to bringing transformative changes to the IT
            sector. We strive to go beyond industry standards through ethical
            practices, vibrant culture, and innovative partnerships. DimenXion
            is more than a company; it's a commitment to shaping the future of
            tech, where every ethical choice, line of code, and partnership
            contributes to industry growth.
          </h1>
        </div>
      </div>
    </>
  );
};

export default WhoWeAre;
