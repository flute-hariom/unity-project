import React, { useState } from "react";
import careerData from "../../data/careerData.json";
import Select from "react-select";
import Training from "../Training";

const Career = () => {
  const { heading, jobs } = careerData.career_page;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [selectedYear, setSelectedYear] = useState({ value: 0, label: "0" });
  const [selectedMonth, setSelectedMonth] = useState({ value: 1, label: "1" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    jobTitle: "",
    file: null,
  });

  const yearOptions = Array.from({ length: 16 }, (_, index) => ({
    value: index,
    label: `${index}`,
  }));

  const monthOptions = Array.from({ length: 12 }, (_, index) => ({
    value: index + 1,
    label: `${index + 1}`,
  }));

  const openModal = (jobTitle) => {
    setFormData({ ...formData, jobTitle });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Reset form if needed
    setFormData({
      name: "",
      email: "",
      mobile: "",
      jobTitle: "",
      file: null,
    });
    setSelectedYear({ value: 0, label: "0" });
    setSelectedMonth({ value: 1, label: "1" });
  };

  const handleYearChange = (selected) => setSelectedYear(selected);
  const handleMonthChange = (selected) => setSelectedMonth(selected);

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("phone", formData.mobile);
    formDataToSend.append("job_title", formData.jobTitle);
    formDataToSend.append("exp_year", selectedYear.value);
    formDataToSend.append("exp_month", selectedMonth.value);
    formDataToSend.append("cv", formData.file);

    // Log all data
    console.log("Form Data:");
    for (let pair of formDataToSend.entries()) {
      console.log(`${pair[0]}:`, pair[1]);
    }

    closeModal();
  };

  return (
    <>
      <div className="pt-10 px-6 lg:px-6">
        <Training />
        {/* <h1 className="text-3xl md:text-5xl font-extrabold uppercase mb-12  costumAnamation">
          <span className="text-gray-800"></span>
        </h1> */}
        <div className="flex-col  lg:justify-end w-full lg:pl-24 pr-4 pt-12 mt-16 ">
          <h1 className="text-3xl md:text-5xl mb-10 font-extrabold uppercase costumAnamation">
            <span className="text-gray-800  ">{heading}</span>
          </h1>
        </div>

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

              <button
                className="mt-6 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
                onClick={() => openModal(job.position)}
              >
                Apply
              </button>
            </div>
          ))}

          {isModalOpen && (
            <div
              className="fixed inset-0 z-50 flex justify-center items-center  bg-black bg-opacity-50"
              onClick={closeModal}
            >
              <div
                className="bg-white dark:bg-gray-700 rounded-lg shadow-lg w-full max-w-2xl p-5 relative pt-8"
                onClick={(e) => e.stopPropagation()}
              >
                <form
                  className="pb-4 w-full flex flex-col space-y-3"
                  onSubmit={handleSubmit}
                >
                  <input
                    className="p-2 w-full rounded-md ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-600 text-gray-900"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    placeholder="Your full name"
                    required
                  />

                  <input
                    className="p-2 w-full rounded-md ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-600 text-gray-900"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    placeholder="Your Email"
                    required
                  />

                  <input
                    className="p-2 w-full rounded-md ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-600 text-gray-900"
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleFormChange}
                    placeholder="Your Mobile Number"
                  />

                  <input
                    className="p-2 w-full rounded-md ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-600 text-gray-900"
                    type="text"
                    name="jobTitle"
                    value={formData.jobTitle}
                    readOnly
                    placeholder="Job Title"
                  />

                  <span>Experience:</span>

                  <div className="flex space-x-4 text-black">
                    <Select
                      className="w-1/2"
                      value={selectedYear}
                      onChange={handleYearChange}
                      options={yearOptions}
                      placeholder="Years"
                    />
                    <Select
                      className="w-1/2"
                      value={selectedMonth}
                      onChange={handleMonthChange}
                      options={monthOptions}
                      placeholder="Months"
                    />
                  </div>

                  <input
                    name="cv"
                    type="file"
                    onChange={handleFileChange}
                    required
                    className="p-2 block w-full rounded-md ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-600 text-white"
                  />

                  <div className="flex justify-center gap-4">
                    <button
                      type="submit"
                      className="rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-indigo-700"
                    >
                      Submit
                    </button>
                    <button
                      type="button"
                      onClick={closeModal}
                      className="rounded-full bg-gray-400 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-500"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Career;
