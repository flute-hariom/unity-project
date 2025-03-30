import React from "react";

const Training = () => {
  return (
    <>
      <div className="mt-12" id="hero">
        <section data-aos="">
          <div className="flex-col lg:my-0 lg:justify-end w-full lg:pl-24 pr-4">
            <h1 className="text-3xl md:text-6xl mb-10 font-extrabold uppercase costumAnamation">
              <span className="text-gray-800  ">
                NextVerse Gaming & VR Training
              </span>
            </h1>
          </div>

          {/* Background div */}
          <div className="overflow-hidden  relative">
            <div className="absolute top-0 left-0 w-full  overflow-hidden h-[800px]">
              <video
                className="w-full h-screen object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/training.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Overlay Content */}
            <div className="relative z-10 m-auto overflow-hidden mt-8 lg:mt-0 py-2 md:py-0 h-[545px]">
              <div className="flex flex-col lg:flex-row  justify-between text-center lg:text-left gap-1">
                <div
                  className="w-full flex flex-col justify-center items-center lg:items-start"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                >
                  {/* <h1
                    className="text-5xl flex flex-col lg:text-5xl font-extrabold text-[#e6e3e3] w-full p-4 text-center lg:text-left"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
                  >
                    <span className="px-12 pt-6 costumAnamation">
                      Welcome to NextVerse Training & Internship Program
                    </span>
                  </h1> */}

                  <p
                    className="text-lg sm:text-3xl text-[#eae8e8] font-normal  py-6 px-8 w-[55%] "
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
                  >
                    Unlock your future with the NextVerse Internship Program!
                    Gain hands-on experience in gaming, apps, and VR, with
                    mentorship and real-world projects that set you on the fast
                    track to a tech career. Join now and shape tomorrow’s tech
                    today!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Training;
