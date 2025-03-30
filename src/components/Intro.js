import React from "react";
import img from "../images/ram4.png";
import introImg from "../images/IntroImage.png";
import skullImg from "../images/ram0.png";
import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <>
      {/* Parent div */}
      <div className="about px-4 mt-16 flex items-center py-12 " id="about">
        {/* Child div */}
        <div
          className="flex flex-col lg:flex-row justify-between lg:text-left"
          // data-aos="fade-up"
        >
          <div
            className="flex-col my-4 lg:my-0 lg:justify-end w-full lg:w-2/3 lg:pl-24 pr-4"
            // data-aos="zoom-in"
            // data-aos-delay="500"
          >
            <h1 className="text-3xl md:text-6xl font-extrabold  costumAnamation">
              <span className="text-gray-800">ABOUT</span>
              {/* <span className="text-[#ff7246] "> US</span> */}
              <span className=" text-gray-800"> US</span>
            </h1>
            <div data-aos="zoom-in" data-aos-delay="200">
              <p className="my-6 text-lg lg:text-xl font-semibold tracking-tight mb-5 text-gray-600 fontArial">
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

            <div data-aos="zoom-in" data-aos-delay="200">
              <p className="my-3 text-lg lg:text-xl font-semibold tracking-tight mb-5 text-gray-600">
                We take responsibility for building custom software solutions
                that cater to the automation of your business processes and
                improve efficiency.
              </p>
            </div>
            {/* <Link
             
              to="/about-us"
              className="relative text-gray-500 font-mono bg-white inline-flex items-center justify-center w-full px-6 py-2 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0 group border border-violet-500 transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-violet-500 hover:via-white hover:to-violet-700 bg-clip-text hover:text-transparent hover:shadow-lg hover:shadow-violet-500/50"
            > */}
            {/* <div className="relative text-gray-500 font-mono bg-white inline-flex items-center justify-center w-full px-6 py-2 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0 group border border-orange-600 transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-orange-500 hover:via-white hover:to-orange-700 bg-clip-text hover:text-transparent hover:shadow-lg hover:shadow-orange-500/50">
              See More
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
            </div> */}
            {/* </Link> */}
          </div>
          {/* Right div */}
          <div
            className="lg:w-1/2 flex flex-col lg:mx-4 justify-center"
            // data-aos="zoom-in"
            // data-aos-delay="200"
          >
            <img
              alt="card img"
              className="rounded float-right duration-1000 w-auto h-auto 
               sm:h-[400px]
               "
              src="/aboutUs.png"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
