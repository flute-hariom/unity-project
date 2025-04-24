import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const pillarsData = [
  {
    title: "Quality",
    subtitle: "Code Quality and Deliverables",
    description:
      "Exemplifying excellence in every line of code and project deliverable. We maintain rigorous standards to ensure our work stands the test of time.",
    image:
      "https://img.freepik.com/free-photo/programming-background-collage_23-2149901770.jpg",
    icon: "🏆",
    color: "from-blue-500 to-blue-700",
  },
  {
    title: "Innovation",
    subtitle: "Scalable Solutions",
    description:
      "Pioneering inventive and scalable solutions that anticipate future needs. We don't just solve today's problems—we build for tomorrow's challenges.",
    image:
      "https://img.freepik.com/free-vector/polygonal-wireframe-business-strategy-composition_1284-32265.jpg",
    icon: "💡",
    color: "from-purple-500 to-purple-700",
  },
  {
    title: "Attitude",
    subtitle: "Solution-Centric Approach",
    description:
      "Cultivating a mindset that centers on solutions, driving positive outcomes. Our team approaches every challenge with optimism and determination.",
    image:
      "https://img.freepik.com/free-photo/businessman-big-office_53876-144319.jpg",
    icon: "👍",
    color: "from-green-500 to-green-700",
  },
  {
    title: "Ethics",
    subtitle: "Trust and Building Partnerships",
    description:
      "Nurturing relationships through trust, ethics, and collaborative partnerships. We believe success is measured not just in results, but in how we achieve them.",
    image:
      "https://img.freepik.com/free-photo/tourists-go-up-hill-sunrise_1150-19692.jpg",
    icon: "🤝",
    color: "from-amber-500 to-amber-700",
  },
  {
    title: "Resilience",
    subtitle: "Turning Adversity into Advantage",
    description:
      "Demonstrating the strength to convert challenges into opportunities. When others see obstacles, we see potential for growth and innovation.",
    image:
      "https://img.freepik.com/free-photo/computer-graphic-urban-structure-wooden-white_1134-901.jpg",
    icon: "🔄",
    color: "from-red-500 to-red-700",
  },
];

const PillarsComponent = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left

  const handleTabChange = (newIndex) => {
    setDirection(newIndex > activeTab ? 1 : -1);
    setActiveTab(newIndex);
  };

  return (
    <div
      id="pillars"
      className="py-16 bg-gradient-to-br from-gray-50 to-gray-100"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-3xl font-extrabold text-gray-800 mb-4"
          >
            Our Pillars of Foundation
          </motion.h2>
          {/* <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            The core values that define our approach and differentiate us in the
            industry
          </motion.p> */}
        </div>

        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
          {/* Tab Buttons */}
          <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible gap-2 lg:w-1/4">
            {pillarsData.map((pillar, index) => (
              <motion.button
                key={index}
                onClick={() => handleTabChange(index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center gap-3 px-6 py-4 rounded-xl transition-all duration-300 ${
                  activeTab === index
                    ? `bg-gradient-to-r ${pillar.color} text-white shadow-lg`
                    : "bg-white text-gray-700 shadow-md hover:shadow-lg"
                }`}
              >
                <span className="text-2xl">{pillar.icon}</span>
                <span className="font-semibold text-lg whitespace-nowrap">
                  {pillar.title}
                </span>
              </motion.button>
            ))}
          </div>

          {/* Content Area */}
          <div className="lg:w-3/4 h-[500px] relative rounded-xl overflow-hidden shadow-xl">
            <AnimatePresence custom={direction} initial={false}>
              <motion.div
                key={activeTab}
                custom={direction}
                initial={{ opacity: 0, x: direction * 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -100 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 flex flex-col md:flex-row"
              >
                <div
                  className={`w-full h-1/2 md:h-full md:w-1/2 bg-gradient-to-br ${pillarsData[activeTab].color} p-8 flex flex-col justify-center`}
                >
                  <div className="text-white">
                    <motion.h3
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="text-3xl font-bold mb-2"
                    >
                      {pillarsData[activeTab].title}
                    </motion.h3>
                    <motion.h4
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="text-xl font-semibold mb-4 text-white/90"
                    >
                      {pillarsData[activeTab].subtitle}
                    </motion.h4>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="text-lg"
                    >
                      {pillarsData[activeTab].description}
                    </motion.p>
                  </div>
                </div>
                <div className="w-full h-1/2 md:h-full md:w-1/2 relative">
                  <img
                    src={pillarsData[activeTab].image}
                    alt={pillarsData[activeTab].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent md:bg-gradient-to-r md:from-black/30 md:to-transparent" />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Indicators */}
        <div className="flex justify-center mt-8 gap-2 lg:hidden">
          {pillarsData.map((_, index) => (
            <button
              key={index}
              onClick={() => handleTabChange(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                activeTab === index
                  ? `bg-gradient-to-r ${pillarsData[activeTab].color} w-6`
                  : "bg-gray-300"
              }`}
              aria-label={`View ${pillarsData[index].title}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PillarsComponent;
