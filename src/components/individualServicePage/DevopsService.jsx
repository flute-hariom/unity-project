import React from "react";

const devopsStages = [
  {
    title: "Code",
    description:
      "Crafting high-quality code with collaborative development practices to lay a strong foundation for your software.",
  },
  {
    title: "Plan",
    description:
      "Strategic planning to align development and operations teams, fostering a unified approach toward project goals and timelines.",
  },
  {
    title: "Build",
    description:
      "Automated and efficient build processes, ensuring the creation of reliable software artifacts with every iteration.",
  },
  {
    title: "Test",
    description:
      "Rigorous testing methodologies at every level to guarantee the functionality, security, and performance of your application.",
  },
  {
    title: "Release",
    description:
      "Streamlining release management for a smooth transition of software from development to production environments.",
  },
  {
    title: "Deploy",
    description:
      "Automated deployment processes, minimizing downtime and ensuring a swift and error-free release of your applications.",
  },
  {
    title: "Operate",
    description:
      "Nurturing positive, collaborative environments that support stable software performance.",
  },
  {
    title: "Monitor",
    description:
      "Proactive monitoring of applications and infrastructure, enabling quick identification and resolution of potential issues.",
  },
];

const DevopsService = () => {
  return (
    <section className="bg-[#ebeaea] text-black py-20 px-5 md:px-20 mt-16 ">
      <h1 className="text-3xl md:text-5xl font-extrabold text-center mb-12 costumAnamation">
        DevOps Lifecycle:{" "}
        <span className="text-indigo-700">
          Unlocking Efficiency at Every Stage
        </span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {devopsStages.map((stage, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="text-indigo-700 text-xl mt-1">▶</div>
            <div>
              <h3 className="font-bold text-lg text-gray-800">
                {stage.title}:
              </h3>
              <p className="text-gray-600 mt-1">{stage.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DevopsService;
