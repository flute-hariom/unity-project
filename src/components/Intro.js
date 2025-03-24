import React from "react";
import img from "../images/ram4.png";
import introImg from "../images/IntroImage.png";
import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <>
      {/* Parent div */}
      <div
        className="about px-4 mt-2 flex items-center min-h-screen bg-[#000]"
        id="about"
      >
        {/* Child div */}
        <div
          className="flex flex-col lg:flex-row justify-between lg:text-left"
          data-aos="fade-up"
        >
          {/* Left div */}
          <div className="lg:w-1/3 flex flex-col lg:mx-4 justify-center">
            <img
              alt="Intro"
              className="rounded-t object-cover w-full h-auto"
              src={introImg}
            />
          </div>
          {/* Right div */}
          <div
            className="flex-col my-4 lg:my-0 lg:justify-end w-full lg:w-2/3 lg:pl-24 pr-4"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <h1 className="text-5xl lg:text-9xl font-extrabold font-[Poppins,sans-serif]">
              <span className="text-white">ABOUT</span>
              <span className="text-violet-400"> US</span>
            </h1>
            <div>
              <p className="my-3 text-lg lg:text-xl font-semibold tracking-tight mb-5 bg-gradient-to-r from-gray-400 via-gray-200 to-gray-400 bg-clip-text text-transparent">
                At Maysta, we started at the crossroads of technology and
                vision. Our team, with over 40 years of combined experience, is
                dedicated to bringing transformative change to the IT sector. We
                strive to go beyond industry standards through ethical
                practices, vibrant culture, and innovative partnerships. Maysta
                is more than a company; it's a commitment to shaping the future
                of tech, where every ethical choice, line of code, and
                partnership contributes to industry growth. Welcome to the
                forefront of tech evolution.
              </p>
            </div>

            <div>
              <p className="my-3 text-lg lg:text-xl font-semibold tracking-tight mb-5 bg-gradient-to-r from-gray-400 via-gray-200 to-gray-400 bg-clip-text text-transparent">
                We take responsibility for building custom software solutions
                that cater to the automation of your business processes and
                improve efficiency.
              </p>
            </div>
            <Link
              // to="/contact"
              to="/about-us"
              className="relative text-gray-500 font-mono bg-white inline-flex items-center justify-center w-full px-6 py-2 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0 group border border-violet-500 transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-violet-500 hover:via-white hover:to-violet-700 bg-clip-text hover:text-transparent hover:shadow-lg hover:shadow-violet-500/50"
            >
              Contact us
              <svg
                className="w-4 h-4 ml-1 transition-transform duration-300 transform group-hover:translate-x-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
