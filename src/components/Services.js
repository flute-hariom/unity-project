import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import img from "../images/ram5.jpg";
import img2 from "../images/ram6.jpg";
import img3 from "../images/ram1.jpg";
import img4 from "../images/ram2.jpg";
import PillerData from "./PillerData";
import CoreValues from "./CoreValues";

const Services = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 340; // Adjusted to fit four items per scroll
      if (direction === "left") {
        current.scrollLeft -= scrollAmount;
      } else {
        current.scrollLeft += scrollAmount;
      }
    }
  };

  return (
    <div id="services" className="services py-12 px-4 relative">
      <section data-aos="zoom-in-down">
        <div className="my-4 py-4">
          <h2 className="text-center text-5xl md:text-6xl mb-6 uppercase font-bold text-gray-800">
            Services
          </h2>
          <h2 className="mt-4 mx-auto max-w-2xl text-center text-xl md:text-xl font-semibold text-gray-600">
            We are deeply committed to the growth and success of our clients.
          </h2>
        </div>

        <div
          className="relative px-4 md:px-12"
          data-aos="fade-down"
          data-aos-delay="600"
        >
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg z-10"
          >
            <FaChevronLeft size={24} />
          </button>
          <div
            ref={scrollRef}
            className="flex overflow-x-auto p-4"
            style={{
              scrollBehavior: "smooth",
              display: "flex",
              gap: "16px",
              width: "100%",
              overflowX: "scroll",
              scrollbarWidth: "none",
            }}
          >
            {[
              {
                title: "VR Content Creation",
                img: img,
                text: "Crafting immersive storytelling and interactive experiences.",
              },
              {
                title: "XR Development",
                img: img3,
                text: "Transforming reality with Extended Reality (XR) solutions for immersive user experiences.",
              },
              {
                title: "Web Development",
                img: img,
                text: "Crafting innovation and responsive web solutions tailored to your business needs.",
              },
              {
                title: "Mobile App Solutions",
                img: "https://img.freepik.com/free-photo/representation-user-experience-interface-design_23-2150169863.jpg",
                text: "Empowering your business with custom mobile apps for seamless user experience.",
              },
              {
                title: "Interactive Simulations",
                img: img2,
                text: "Developing training programs and educational simulations.",
              },
              {
                title: "DevOps Services",
                img: img2,
                text: "Implementing cutting-edge DevOps practices to enhance automation and accelerate deployment cycles.",
              },
              {
                title: "Independent Testing",
                img: img4,
                text: "Ensuring software reliability through rigorous independent testing and quality assurance.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-gray-800 transition-all ease-in-out duration-400 overflow-hidden text-white hover:text-black hover:bg-white rounded-lg shadow-xl p-6 w-[260px] md:w-[310px] flex-shrink-0"
              >
                <h2 className="font-semibold my-4 text-xl text-center">
                  {service.title}
                </h2>
                <img
                  alt="card img"
                  className="rounded-t group-hover:scale-[1.1] transition duration-700 ease-in-out w-full h-56 object-cover my-5"
                  src={service.img}
                />
                <p className="text-md font-medium text-center">
                  {service.text}
                </p>
              </div>
            ))}
          </div>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg z-10"
          >
            <FaChevronRight size={24} />
          </button>
        </div>

        <PillerData />
        <CoreValues/>
      </section>
    </div>
  );
};

export default Services;
