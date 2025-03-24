import React from "react";
import img from "../images/ram4.png";
import vrImg from "../images/VRBOX.png";
import { Link } from "react-router-dom";

const FutureOutLook = () => {
  return (
    <>
      {/* Parent div */}
      <div
        id="futureOutLook"
        className="about flex items-center min-h-screen bg-white"
      >
        {/* Child Parent div */}
        <div
          className="flex flex-col-reverse lg:flex-row justify-between w-full"
          data-aos="fade-up"
        >
          {/* Left div */}
          <div className="sm:w-full flex flex-col justify-center p-5 lg:p-20">
            <img
              alt="card img"
              className="rounded-t float-right w-full h-auto"
              src={vrImg}
            />
          </div>

          {/* Right div */}
          <div
            className="flex-col my-4 lg:my-0 lg:justify-end w-full p-5 lg:p-20"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-extrabold font-[Poppins,sans-serif]">
              <span className="text-white">FUTURE</span>
              <br />
              <span className="text-[#71416b]">OUTLOOK</span>
            </h1>
            <div>
              <p
                className="my-3 text-lg sm:text-xl font-semibold tracking-tight mb-5 
                bg-gradient-to-r from-gray-400 via-gray-200 to-gray-400 
                bg-clip-text text-transparent text-left"
              >
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
              <p
                className="my-3 text-lg sm:text-xl font-semibold tracking-tight mb-5 
                bg-gradient-to-r from-gray-400 via-gray-200 to-gray-400 
                bg-clip-text text-transparent text-left"
              >
                We take responsibility for building custom software solutions
                that cater to the automation of your business processes and
                improve efficiency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FutureOutLook;
