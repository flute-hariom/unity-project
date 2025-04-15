import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const coreValues = [
  {
    letter: "Employee First",
    title: "Empowering Growth:",
    description: ` Prioritizing our team's well-being, growth, and fostering a culture that values each member`,
    color1: "bg-green-300",
    color2: "bg-green-200",
    icon: "/empfirst.png",
  },
  {
    letter: "Integrity & Transparency",
    title: "Guiding Principles:",
    description: ` Upholding the highest standards of honesty and transparency in all our interactions and transactions.`,
    color1: "bg-pink-300",
    color2: "bg-pink-200",
    icon: "/int.png",
  },
  {
    letter: "Customer-Centric",
    title: "  Exceeding Expectations:",
    description: ` Going beyond service to build lasting relationships, anticipating and fulfilling customer needs.`,
    color1: "bg-orange-300",
    color2: "bg-orange-200",
    icon: "/customer.png",
  },
  {
    letter: "Learning and Development",
    title: "Continuous Evolution:",
    description: `Committing to the ongoing development of our team, fostering a culture of perpetual learning and improvement`,
    color1: "bg-yellow-300",
    color2: "bg-yellow-200",
    icon: "/learning.png",
  },
  {
    letter: "Adaptability",
    title: "Nimble Innovation:",
    description: `: Embracing change as an opportunity, remaining agile and adaptable to evolving industry landscapes.`,
    color1: "bg-purple-300",
    color2: "bg-purple-200",
    icon: "/industry.png",
  },
];

const CoreValues = () => {
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
    <div className="mt-16 flex items-center pt-12">
      <div className="relative w-full">
        <div className="flex-col my-4 lg:my-0 lg:justify-end lg:pl-24 pr-4">
          <h1 className="text-3xl md:text-6xl mb-10 font-extrabold uppercase costumAnamation">
            <span className="text-gray-800 mr-2 font-extrabold text-3xl">
              our CORE values
            </span>
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
            {coreValues.map((pillar, index) => (
              <div
                key={index}
                className="bg-gray-800 transition-all ease-in-out duration-400 overflow-hidden text-white hover:text-black hover:bg-white rounded-lg shadow-xl p-6 w-[260px] md:w-[310px] flex-shrink-0"
              >
                <h3 className="font-semibold my-4 text-xl text-center">
                  {pillar.letter}
                </h3>
                <img
                  src={pillar.icon}
                  alt={pillar.title}
                  className="rounded-lg mb-4 w-full h-56 object-cover"
                />
                <h4 className="font-semibold my-4 text-xl text-center">
                  {pillar.title}
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
      </div>
    </div>
  );
};

export default CoreValues;
