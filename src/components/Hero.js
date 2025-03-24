import React from "react";
import NavBar from "../components/Navbar/NavBar";
import { FaSearch } from "react-icons/fa";

const Hero = () => {
  return (
    <>
      <div className="hero overflow-hidden h-[calc(100vh)]" id="hero">
        {/* <NavBar /> */}

        {/* Background Video */}
        <div className="">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source
              src="https://media.istockphoto.com/id/2157568904/video/wide-angle-of-backlit-golden-peaking-wave-filmed-at-golden-hour-in-the-ocean.mp4?s=mp4-640x640-is&k=20&c=UyvQ2Av1lYRncYcr0YEdsSI4NPXXQexPSicZnEvkb-k="
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Overlay Content */}
        <div className="relative z-10 m-auto overflow-hidden mx-4 mt-8 lg:mt-4 p-2 md:p-12 h-5/6">
          <div className="flex flex-col lg:flex-row py-4 justify-between text-center lg:text-left gap-1 pt-20">
            {/* Company Name Section */}
            <div
              className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <h1 className="text-5xl lg:text-8xl font-extrabold font-[Poppins,sans-serif] text-white">
                <span>Maysta</span>
                <span className="text-violet-400"> Technologies</span>
              </h1>
              <p className="text-lg sm:text-3xl text-[#552c1e] font-bold mt-4">
                Let's continue to Innovate and Excel Together
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
