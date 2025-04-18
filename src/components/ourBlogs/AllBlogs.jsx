import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import blogData from "../../data/blogsData.json";

const AllBlogs = () => {
  const { blogs } = blogData.blogs_page;
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
    <div id="services" className="services mt-16 pt-12 relative">
      <section data-aos="zoom-in-down">
        <div className="flex-col my-4 lg:my-0 lg:justify-end w-full lg:pl-24 pr-4">
          <h1 className="text-3xl md:text-5xl mb-10 font-extrabold   costumAnamation">
            <span className="font-extrabold text-3xl text-gray-800">
              {" "}
              Blogs
            </span>
          </h1>
        </div>

        <div className="relative px-4 md:px-12" data-aos="fade-down">
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg z-10"
          >
            <FaChevronLeft size={24} />
          </button>

          <div
            ref={scrollRef}
            className="flex overflow-x-auto space-x-6 p-4 scrollbar-hide "
            // className="flex overflow-x-auto p-4"
            style={{
              scrollBehavior: "smooth",
              display: "flex",
              gap: "16px",
              width: "100%",
              overflowX: "scroll",
              scrollbarWidth: "none",
            }}
          >
            {blogs.map((blogs, index) => (
              <div
                key={index}
                className="w-1/3 flex-shrink-0 bg-white rounded-2xl shadow-lg p-6 transition-transform hover:scale-[1.02]"
              >
                <img
                  src={blogs.photo}
                  className="mb-4 rounded-lg h-[350px] w-full"
                />
                <p className="text-gray-800 mb-2 mt-2">
                  <strong>
                    <span className="text-base  ">{blogs.publish_date}</span>
                  </strong>
                </p>
                <h2 className="text-xl font-bold mb-2 text-indigo-700">
                  {blogs.title}
                </h2>
                <p className="text-gray-700 mt-2 text-sm">{blogs.content}</p>
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
      <div className="flex justify-center gap-4">
        <button
          type="submit"
          className="rounded-full bg-[#111111] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#28282f] hover:scale-[1.02]"
        >
          All blogs
        </button>
      </div>
    </div>
  );
};

export default AllBlogs;
