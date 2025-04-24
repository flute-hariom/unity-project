import React, { useEffect } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

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
    title: "Exceeding Expectations:",
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
    description: ` Embracing change as an opportunity, remaining agile and adaptable to evolving industry landscapes.`,
    color1: "bg-purple-300",
    color2: "bg-purple-200",
    icon: "/industry.png",
  },
];

const CoreValues = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // Ensures animation happens every time you scroll
    });
  }, []);

  return (
    <div className="mt-16 flex items-center pt-12">
      <div className="relative w-full">
        <div className="flex-col my-4 lg:my-0 lg:justify-end lg:pl-24 pr-4 text-center pb-12">
          <h1 className="text-3xl md:text-6xl mb-10 font-extrabold  costumAnamation">
            <span className="text-gray-800 mr-2 font-extrabold text-3xl ">
              Our core values
            </span>
          </h1>
        </div>

        <VerticalTimeline>
          {coreValues.map((pillar, index) => (
            <VerticalTimelineElement
              key={index}
              contentStyle={{ background: "# ", color: "#111827" }}
              contentArrowStyle={{ borderRight: "7px solid #f9fafb" }}
              iconStyle={{ background: "#6c63ff", color: "#fff" }}
              icon={
                <img
                  src={pillar.icon}
                  alt={pillar.title}
                  className="w-full h-full object-contain p-2"
                />
              }
              date={pillar.letter}
              lineColor="#6c63ff"
              data-aos="fade-up"
            >
              <div>
                <div className="w-[200px] h-[200px] mx-auto">
                  <img
                    src={pillar.icon}
                    alt={pillar.title}
                    className="w-full h-full object-contain p-2"
                  />
                </div>

                <h4 className="font-semibold text-lg text-center mt-2">
                  {pillar.title}
                </h4>
                <p className="text-md font-medium text-center mt-2">
                  {pillar.description}
                </p>
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default CoreValues;
