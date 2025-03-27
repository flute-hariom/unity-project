import React from "react";

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
      // "https://images.pexels.com/photos/925786/pexels-photo-925786.jpeg?auto=compress&cs=tinysrgb&w=1100",
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
  return (
    <div className="bg-[#1E1E50] py-12 px-8 text-white">
      {/* <h2 className="text-4xl font-bold text-center mb-12"></h2> */}
      <h2 className="text-center text-5xl md:text-6xl mb-12 uppercase font-bold ">
        Our Pillars of Foundation:
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {pillarsData.map((pillar, index) => (
          <div
            key={index}
            className="bg-white text-black rounded-lg p-6 shadow-md"
          >
            <img
              src={pillar.image}
              alt={pillar.title}
              className="rounded-lg mb-4 w-full h-56 object-cover"
            />
            <h3 className="text-xl font-bold text-[#6B21A8]">{pillar.title}</h3>
            <h4 className="font-semibold text-[#8B5CF6]">{pillar.subtitle}</h4>
            <p className="mt-2 text-gray-700">{pillar.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PillerData;
