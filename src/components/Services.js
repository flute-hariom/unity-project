import React from "react";
import img from "../images/ram5.jpg";
import img2 from "../images/ram6.jpg";
import img3 from "../images/ram1.jpg";
import img4 from "../images/ram2.jpg";

const Services = () => {
  return (
    <div id="services" className="services py-12 px-4">
      <section data-aos="zoom-in-down">
        <div className="my-4 py-4">
          <h2 className="text-center text-4xl md:text-5xl mb-4 uppercase font-bold text-gray-800">
            Services
          </h2>
          <h2 className="mt-4 mx-auto max-w-2xl text-center text-lg md:text-xl font-semibold text-gray-600">
            We are deeply committed to the growth and success of our clients.
          </h2>
        </div>

        <div
          className="px-4 md:px-12"
          data-aos="fade-down"
          data-aos-delay="600"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Service Cards */}
            {[
              {
                title: "Web Development",
                img: img,
                text: "Crafting innovation and responsive web solutions tailored to your business needs.",
              },
              {
                title: "DevOps Services",
                img: img2,
                text: "Implementing cutting-edge DevOps practices to enhance automation and accelerate deployment cycles.",
              },
              {
                title: "XR Development",
                img: img3,
                text: "Transforming reality with Extended Reality (XR) solutions for immersive user experiences.",
              },
              {
                title: "Mobile App Solutions",
                img: "https://img.freepik.com/free-photo/representation-user-experience-interface-design_23-2150169863.jpg",
                text: "Empowering your business with custom mobile apps for seamless user experience.",
              },
              {
                title: "Independent Testing",
                img: img4,
                text: "Ensuring software reliability through rigorous independent testing and quality assurance.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-gray-800 transition-all ease-in-out duration-400 overflow-hidden text-white hover:text-black hover:bg-white rounded-lg shadow-xl p-3 group"
              >
                <div className="m-2 text-justify text-sm">
                  <h2 className="font-semibold my-4 text-xl md:text-xl text-center">
                    {service.title}
                  </h2>
                  <img
                    alt="card img"
                    className="rounded-t group-hover:scale-[1.1] transition duration-700 ease-in-out w-full h-56 object-cover my-5"
                    src={service.img}
                  />
                  <p className="text-md font-medium pt-6 text-center">
                    {service.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
