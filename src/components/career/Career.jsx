import React from "react";
import careerData from "../../data/careerData.json";

const Career = () => {
  const { heading, jobs } = careerData.career_page;

  return (
    <div className="mt-16 pt-12 px-6 lg:px-24">
      <h1 className="text-3xl md:text-5xl font-extrabold uppercase mb-12 text-center costumAnamation">
        <span className="text-gray-800">{heading}</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between transition-transform hover:scale-[1.02]"
          >
            <div>
              <h2 className="text-xl font-bold mb-2 text-indigo-700">
                {job.position}
              </h2>
              <p className="text-gray-600 mb-2">
                <strong>Experience:</strong> {job.experience_required}
              </p>
              <p className="text-gray-800 mb-2">
                <strong>Technologies:</strong>
                <br />
                <span className="text-sm">
                  {job.technology_required.join(", ")}
                </span>
              </p>
              <p className="text-gray-700 mt-2 text-sm">{job.about_job}</p>
            </div>

            <button className="mt-6  bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
              Apply
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Career;
