import React from "react";

const coreValues = [
  {
    letter: "Employee First",
    title: "Empowering Growth:",
    description: ` Prioritizing our team's well-being, growth, and fostering a culture that values each member`,
    color1: "bg-green-300",
    color2: "bg-green-200",
    // icon: "🌿",
  },
  {
    letter: "Integrity & Transparency",
    title: "Guiding Principles:",
    description: ` Upholding the highest standards of honesty and transparency in all our interactions and transactions.`,
    color1: "bg-pink-300",
    color2: "bg-pink-200",
    // icon: "🎤",
  },
  {
    letter: "Customer-Centric",
    title: "  Exceeding Expectations:",
    description: ` Going beyond service to build lasting relationships, anticipating and fulfilling customer needs.`,
    color1: "bg-orange-300",
    color2: "bg-orange-200",
    // icon: "🐶",
  },
  {
    letter: "Learning and Development",
    title: "Continuous Evolution:",
    description: `Committing to the ongoing development of our team, fostering a culture of perpetual learning and improvement`,
    color1: "bg-yellow-300",
    color2: "bg-yellow-200",
    // icon: "🤝",
  },
  {
    letter: "Adaptability",
    title: "Nimble Innovation:",
    description: `: Embracing change as an opportunity, remaining agile and adaptable to evolving industry landscapes.`,
    color1: "bg-purple-300",
    color2: "bg-purple-200",
    // icon: "🌟",
  },
];

const CoreValues = () => {
  return (
    <div className=" mt-16 flex items-center pt-12">
      <div>
        <div
          className="flex-col my-4 lg:my-0 lg:justify-end w-full  lg:pl-24 pr-4"
          // data-aos="zoom-in"
          // data-aos-delay="500"
        >
          <h1 className="text-3xl md:text-6xl mb-10 font-extrabold uppercase costumAnamation">
            <span className="text-gray-800 mr-2">our CORE </span>
            {/* <span className="text-[#ff7246]"> VALUES</span> */}
            <span className="text-gray-800"> VALUES</span>
          </h1>
        </div>

        {coreValues.map((value, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row items-center lg:items-stretch text-white mb-10"
          >
            {/* Left Section */}
            <div
              className={`flex w-full lg:w-[30%] p-6 shadow-md items-center text-2xl lg:text-4xl ${value.color1} font-bold text-[#111111] font-sans rounded-t-lg lg:rounded-l-lg lg:rounded-tr-none`}
              style={{
                clipPath: "polygon(80% 0, 100% 50%, 80% 100%, 0% 100%, 0 0)",
              }}
            >
              <span className="mr-2">{value.letter}</span>
            </div>

            {/* Right Section */}
            <div
              className={`flex-1 ${value.color2} w-full lg:w-[70%] p-6 shadow-md text-[#1f2937] flex flex-col justify-between lg:ml-[-6%] rounded-b-lg lg:rounded-r-lg lg:rounded-bl-none`}
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%, 5% 51%)",
              }}
            >
              <h2 className="text-xl lg:text-2xl font-bold ml-2 lg:ml-[10%]">
                {value.title}
              </h2>
              <p className="mt-2 text-lg lg:text-xl ml-2 lg:ml-[10%]">
                {value.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreValues;
