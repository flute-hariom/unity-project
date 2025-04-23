import React from "react";
import img from "../images/ram0.png";
import introImg from "../images/IntroImage.png";
import skullImg from "../images/ram0.png";
import { Link, useLocation } from "react-router-dom";

const Intro = () => {
  const location = useLocation();

  console.log("location", location);
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
            className="flex-col my-4 lg:my-0 lg:justify-end w-full lg:w-[40%] lg:pl-24 pr-4"
            // data-aos="zoom-in"
            // data-aos-delay="500"
          >
            <h1 className="text-3xl md:text-5xl font-extrabold  costumAnamation">
              <span className=" font-extrabold text-3xl text-gray-800  ">
                Who we are
              </span>
              {/* <span className="text-[#ff7246] "> US</span> */}
            </h1>
            <div data-aos="zoom-in" data-aos-delay="200">
              <p className="my-6 text-lg lg:text-xl font-semibold tracking-tight mb-5 text-gray-600 fontArial ">
                Our team is dedicated to bringing transformative changes to the
                IT sector. We strive to go beyond industry standards through
                ethical practices, vibrant culture, and innovative partnerships.
                DimenXion is more than a company; it's a commitment to shaping
                the future of tech, where every ethical choice, line of code,
                and partnership contributes to industry growth.
              </p>
            </div>

            {/* <div data-aos="zoom-in" data-aos-delay="200">
              <p className="my-3 text-lg lg:text-xl font-semibold tracking-tight mb-5 text-gray-600">
                We take responsibility for building custom software solutions
                that cater to the automation of your business processes and
                improve efficiency.
              </p>
            </div> */}
            <Link to="/about-us">
              <div className="relative text-black font-mono bg-black inline-flex items-center justify-center w-full px-6 py-2 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0 group border border-blue-600 transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-blue-500 hover:via-black hover:to-blue-700 bg-clip-text hover:text-transparent hover:shadow-lg hover:shadow-blue-500/50">
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
              </div>
            </Link>
          </div>
          {/* Right div */}
          <div
            className="lg:w-2/5 flex flex-col lg:mx-4 justify-center"
            // data-aos="zoom-in"
            // data-aos-delay="200"
          >
            <img
              alt="card img"
              className="rounded float-right duration-1000 scale-125
               "
              src="/aboutusfinal.png"
              // src="https://assetstorev1-prd-cdn.unity3d.com/key-image/4dc4be9b-7af7-4087-b1bf-974071dd6e58.webp"
              // src={img}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
