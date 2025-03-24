import React from "react";
import img from "../images/ram4.png";
import introImg from "../images/IntroImage.png";
import techIntImg from "../images/TechIntegration.png";
import { Link } from "react-router-dom";

const TechIntegration = () => {
  return (
    <>
      {/* Parent div */}
      <div
        id="techIntegration"
        className="about px-4  flex items-center min-h-screen bg-white p-4"
      >
        {/* Child div */}
        <div
          className="flex flex-col lg:flex-row justify-between lg:text-left"
          data-aos="fade-up"
        >
          {/* Left div */}
          <div
            className="flex-col lg:w-2/3 lg:ml-14"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <h1 className="text-5xl md:text-6xl lg:text-9xl font-extrabold font-[Poppins,sans-serif]">
              <span className="text-white">TECHNOLOGY</span>
              <br />
              <span className="text-[#71416b]">INTEGRATION</span>
            </h1>
            <div>
              <p className="my-3 text-lg lg:text-xl font-semibold tracking-tight mb-5 bg-gradient-to-r from-gray-400 via-gray-200 to-gray-400 bg-clip-text text-transparent">
                Founded on the belief that VR has the power to revolutionize how
                individuals and businesses interact with digital content, Studio
                Shodwe brings together a diverse team of creative minds and
                technical experts. Our mission is to redefine storytelling and
                user engagement in the metaverse era by delivering unparalleled
                virtual experiences tailored to meet the evolving needs of our
                clients across various industries.
              </p>
            </div>

            <div>
              <p className="my-3 text-lg md:text-xl font-semibold tracking-tight mb-5 bg-gradient-to-r from-gray-400 via-gray-200 to-gray-400 bg-clip-text text-transparent text-left">
                We take responsibility for building custom software solutions
                that cater for automation of your business processes and improve
                efficiency.
              </p>
            </div>
          </div>
          {/* Right div */}
          <div className="lg:w-1/3 flex flex-col lg:mx-4 justify-center p-4">
            <img
              alt="card img"
              className="rounded-t float-right w-full h-auto"
              src={techIntImg}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TechIntegration;
