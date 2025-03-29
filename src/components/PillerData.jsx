import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const pillarsData = [
  {
    title: "Quality",
    subtitle: "Code Quality and Deliverables:",
    description:
      "Exemplifying excellence in every line of code and project deliverable.",
    image:
      "https://img.freepik.com/free-photo/programming-background-collage_23-2149901770.jpg?t=st=1743071434~exp=1743075034~hmac=16e18e0b63d7fc81036d9af5ea5616721ad57a5d6e8f2fa2faaf9b5b602b374a&w=1060",
  },
  {
    title: "Innovation",
    subtitle: "Scalable Solutions:",
    description:
      "Pioneering inventive and scalable solutions that anticipate future needs.",
    image:
      "https://img.freepik.com/free-vector/polygonal-wireframe-business-strategy-composition-with-glittering-images-human-hand-incandescent-lamp-with-text_1284-32265.jpg?t=st=1743071271~exp=1743074871~hmac=58393a4cda6cf43b7d53398b9fe36fae7cdb159d7491cbb149a5e2380825b92e&w=900",
  },
  {
    title: "Attitude",
    subtitle: "Solution-Centric Approach:",
    description:
      "Cultivating a mindset that centers on solutions, driving positive outcomes.",
    image:
      "https://img.freepik.com/free-photo/businessman-big-office_53876-144319.jpg?t=st=1743072007~exp=1743075607~hmac=e0cb05bf28f5c47f05461fbf1f113d1bf49a8aede2eeb13ec0f81955f457668b&w=1380",
  },
  {
    title: "Ethics",
    subtitle: "Trust and Building Partnerships:",
    description:
      "Nurturing relationships through trust, ethics, and collaborative partnerships.",
    image:
      "https://img.freepik.com/free-photo/tourists-go-up-hill-sunrise_1150-19692.jpg?t=st=1743072162~exp=1743075762~hmac=fc7c511df39d516b2469aa2db95af36dfc42b3a98d2853a5e641132b810d2f76&w=1380",
  },
  {
    title: "Resilience",
    subtitle: "Turning Adversity into Advantage:",
    description:
      "Demonstrating the strength to convert challenges into opportunities, fostering resilience at every turn.",
    image:
      "https://img.freepik.com/free-photo/computer-graphic-urban-structure-wooden-white_1134-901.jpg?t=st=1743072347~exp=1743075947~hmac=769b4fad9899c8613654ed125d2f27164954ed7f6495e0633638223e36e166f5&w=1380",
  },
];

const PillerData = () => {
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
    <div id="services" className="services mt-6 pt-12 relative">
      <section data-aos="zoom-in-down">
        <div
          className="flex-col my-4 lg:my-0 lg:justify-end w-full lg:pl-24 pr-4"
          // data-aos="zoom-in"
          // data-aos-delay="500"
        >
          <h1 className="text-3xl md:text-6xl mb-10 font-extrabold uppercase costumAnamation">
            <span className="text-gray-800"> Our Pillars of Foundation</span>
          </h1>
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
            {/* {pillarsData.map((service, index) => (
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
            ))} */}
            {pillarsData.map((pillar, index) => (
              <div
                key={index}
                // className="bg-white text-black rounded-lg p-6 shadow-md"
                className="bg-gray-800 transition-all ease-in-out duration-400 overflow-hidden text-white hover:text-black hover:bg-white rounded-lg shadow-xl p-6 w-[260px] md:w-[310px] flex-shrink-0"
              >
                <img
                  src={pillar.image}
                  alt={pillar.title}
                  className="rounded-lg mb-4 w-full h-56 object-cover"
                />
                <h3 className="font-semibold my-4 text-xl text-center">
                  {pillar.title}
                </h3>
                <h4 className="font-semibold my-4 text-xl text-center">
                  {pillar.subtitle}
                </h4>
                <p className="text-md font-medium text-center">
                  {pillar.description}
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
      </section>
    </div>
  );
};

export default PillerData;
