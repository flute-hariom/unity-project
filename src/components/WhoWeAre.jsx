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
        <div className="relative z-10 h-full bg-black/50 flex flex-col items-center pt-16 px-6 lg:px-24">
          <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-extrabold text-center mt-24">
            Who we are
          </h1>
        </div>
      </div>
    </>
  );
};

export default WhoWeAre;
