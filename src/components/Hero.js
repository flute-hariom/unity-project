import React from "react";
import NavBar from "../components/Navbar/NavBar";
import { FaSearch } from "react-icons/fa";

const Hero = () => {
  return (
    <>
      <div className="hero overflow-hidden h-[calc(95vh)]" id="hero">
        {/* <NavBar /> */}

        {/* Background Video */}
        <div className="w-full">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/mystaVideo11 (2).mp4" type="video/mp4" />
            {/* <source src="/mystaVide2.mp4" type="video/mp4" /> */}
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Overlay Content */}
        {/* <div className="relative z-10 m-auto overflow-hidden  mt-8 lg:mt-4 py-2 md:py-12 h-5/6">
          <div className="flex flex-col lg:flex-row py-4 justify-between text-center lg:text-left gap-1">
            
            <div
              className="w-full  flex flex-col justify-center items-center lg:items-start"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <h1 className="text-5xl flex flex-col lg:text-8xl font-extrabold font-[Poppins,sans-serif] text-white w-full p-4 text-center lg:text-left">
                <span className="px-12 pt-20">
                  Maysta <span className="text-[#ff7246]">Technologies</span>
                </span>
              </h1>

              <p className="text-lg sm:text-3xl text-gray-300 font-bold mt-4 px-16">
                Let's continue to Innovate and Excel Together
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Hero;
