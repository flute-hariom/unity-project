import React from "react";
import img from "../images/ram5.jpg";
import img2 from "../images/ram6.jpg";
import img3 from "../images/ram1.jpg";
import img4 from "../images/ram2.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Services = () => {
  return (
    <div id="services" className="services bg-gray-100 py-12">
      <section data-aos="zoom-in-down">
        <div className="my-4 py-4">
          <h2 className="my-2 text-center text-5xl bg-gradient-to-r from-violet-300 via-violet-500 to-violet-600 bg-clip-text text-transparent mb-4 uppercase font-bold text-[#71416b]">
            services
          </h2>

          {/* <div className="flex justify-center">
            <div className="w-24 border-b-4 border-yellow-500"></div>
          </div> */}
          <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-white">
            We are deeply committed to the growth and success of our clients.
          </h2>
        </div>

        <div className="px-12" data-aos="fade-down" data-aos-delay="600">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-gray-800 transition-all ease-in-out duration-400  overflow-hidden text-white hover:text-black hover:bg-white  rounded-lg shadow-2xl p-3 group">
              <div className="m-2 text-justify text-sm">
                <img
                  alt="card img"
                  className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                  src={img}
                />
                <h2 className="font-semibold my-8 text-2xl text-center">
                  VR Content Creation
                </h2>
                <p className="text-md font-medium">
                  Crafting immersive storytelling and interactive experiences.
                </p>
              </div>
            </div>

            {/* <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group"> */}
            <div className="  sm:px-0 bg-gray-800 transition-all ease-in-out duration-400  overflow-hidden text-white hover:text-black hover:bg-white  rounded-lg shadow-2xl p-3  group">
              <div className="m-2 text-justify text-sm">
                <img
                  alt="card img"
                  className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                  src={img2}
                />
                <h2 className="font-semibold my-8 text-2xl text-center">
                  Virtual Commerce Solutions
                </h2>
                <p className="text-md font-medium">
                  Establishing virtual storefronts and conducting immersive
                  virtual events.
                </p>
              </div>
            </div>

            {/* <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group"> */}
            <div className="bg-gray-800 transition-all ease-in-out duration-400  overflow-hidden text-white hover:text-black hover:bg-white  rounded-lg shadow-2xl p-3 group">
              <div className="m-2 text-justify text-sm">
                <img
                  alt="card img"
                  className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                  src={img3}
                />
                <h2 className="font-semibold my-8 text-2xl text-center ">
                  Interactive Simulations
                </h2>
                <p className="text-md font-medium">
                  Developing training programs and educational simulations.
                </p>
              </div>
            </div>

            {/* <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group"> */}
            <div className="bg-gray-800 transition-all ease-in-out duration-400  overflow-hidden text-white hover:text-black hover:bg-white  rounded-lg shadow-2xl p-3 group">
              <div className="m-2 text-justify text-sm">
                <img
                  alt="card img"
                  className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                  src={img4}
                />
                <h2 className="font-semibold my-8 text-2xl text-center ">
                  Immersive Brand Experiences
                </h2>
                <p className="text-md font-medium">
                  Creating customized VR experiences to enhance consumer
                  engagement.
                </p>
              </div>
            </div>
            <div className="bg-gray-800 transition-all ease-in-out duration-400  overflow-hidden text-white hover:text-black hover:bg-white  rounded-lg shadow-2xl p-3 group">
              <div className="m-2 text-justify text-sm">
                <img
                  alt="card img"
                  className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                  src="http://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg?t=st=1742831668~exp=1742835268~hmac=f907f02f9adf4e811ae6da41c63fb278ad75bd18450825e0f7f317fb7f230314&w=826"
                />
                <h2 className="font-semibold my-8 text-2xl text-center ">
                  Web Development:
                </h2>
                <p className="text-md font-medium">
                  Crafting innovative and responsive web solutions tailored to
                  your business needs, ensuring a seamless online presence.
                </p>
              </div>
            </div>
            <div className="bg-gray-800 transition-all ease-in-out duration-400  overflow-hidden text-white hover:text-black hover:bg-white  rounded-lg shadow-2xl p-3 group">
              <div className="m-2 text-justify text-sm">
                <img
                  alt="card img"
                  className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                  src="https://img.freepik.com/free-vector/hand-drawn-flat-design-devops-illustration_23-2149367259.jpg?ga=GA1.1.19345922.1740563966&semt=ais_hybrid"
                />
                <h2 className="font-semibold my-8 text-2xl text-center ">
                  DevOps Managed Services:
                </h2>
                <p className="text-md font-medium">
                  Implementing cutting-edge DevOps practices to enhance
                  collaboration, automate workflows, and accelerate your
                  software development and deployment cycles.
                </p>
              </div>
            </div>
            <div className="bg-gray-800 transition-all ease-in-out duration-400  overflow-hidden text-white hover:text-black hover:bg-white  rounded-lg shadow-2xl p-3 group">
              <div className="m-2 text-justify text-sm">
                <img
                  alt="card img"
                  className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                  src="https://img.freepik.com/free-photo/representation-user-experience-interface-design_23-2150169863.jpg?ga=GA1.1.19345922.1740563966&semt=ais_hybrid"
                />
                <h2 className="font-semibold my-8 text-2xl text-center ">
                  Mobile App Solutions:
                </h2>
                <p className="text-md font-medium">
                  Empowering your business with bespoke mobile applications,
                  designed for optimal user experience and compatibility across
                  various platforms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6 px-4">
          <div
            className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left"
            data-aos="zoom-out"
          >
            <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
              <div className="text-white mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="72"
                  height="72"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M2 12h2a7.986 7.986 0 0 1 2.337-5.663 7.91 7.91 0 0 1 2.542-1.71 8.12 8.12 0 0 1 6.13-.041A2.488 2.488 0 0 0 17.5 7C18.886 7 20 5.886 20 4.5S18.886 2 17.5 2c-.689 0-1.312.276-1.763.725-2.431-.973-5.223-.958-7.635.059a9.928 9.928 0 0 0-3.18 2.139 9.92 9.92 0 0 0-2.14 3.179A10.005 10.005 0 0 0 2 12zm17.373 3.122c-.401.952-.977 1.808-1.71 2.541s-1.589 1.309-2.542 1.71a8.12 8.12 0 0 1-6.13.041A2.488 2.488 0 0 0 6.5 17C5.114 17 4 18.114 4 19.5S5.114 22 6.5 22c.689 0 1.312-.276 1.763-.725A9.965 9.965 0 0 0 12 22a9.983 9.983 0 0 0 9.217-6.102A9.992 9.992 0 0 0 22 12h-2a7.993 7.993 0 0 1-.627 3.122z"></path>
                  <path d="M12 7.462c-2.502 0-4.538 2.036-4.538 4.538S9.498 16.538 12 16.538s4.538-2.036 4.538-4.538S14.502 7.462 12 7.462zm0 7.076c-1.399 0-2.538-1.139-2.538-2.538S10.601 9.462 12 9.462s2.538 1.139 2.538 2.538-1.139 2.538-2.538 2.538z"></path>
                </svg>
              </div>
              <h3 className="text-3xl bg-gradient-to-r from-[#4c164d] via-purple-500 to-purple-700 bg-clip-text text-transparent font-bold">
                We <span className="font-black">Build</span>
              </h3>

              <div>
                <p
                  className="my-3 text-xl font-semibold tracking-tight mb-5
                bg-gradient-to-r from-gray-400 via-gray-200 to-gray-400
                bg-clip-text text-transparent"
                >
                  With over 10 years experience in software analysis and design
                  and a deep understanding of the latest IT trends and
                  solutions, we provide customized recommendations and
                  strategies to help you improve your operations, reduce costs,
                  and increase efficiency.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center ">
              <div className="text-white mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="72"
                  height="72"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="m7.375 16.781 1.25-1.562L4.601 12l4.024-3.219-1.25-1.562-5 4a1 1 0 0 0 0 1.562l5 4zm9.25-9.562-1.25 1.562L19.399 12l-4.024 3.219 1.25 1.562 5-4a1 1 0 0 0 0-1.562l-5-4zm-1.649-4.003-4 18-1.953-.434 4-18z"></path>
                </svg>
              </div>
              <h3 className="text-3xl bg-gradient-to-r from-[#4c164d] via-purple-500 to-purple-700 bg-clip-text text-transparent font-bold">
                We <span className="font-black">Collaborate</span>
              </h3>
              <div>
                <p
                  className="my-3 text-xl font-semibold tracking-tight mb-5
                bg-gradient-to-r from-gray-400 via-gray-200 to-gray-400
                bg-clip-text text-transparent"
                >
                  We can collaborate with your existing tech team to scale
                  existing software applications or design customized software
                  applications that suits your everyday need and simplifies
                  various processes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
