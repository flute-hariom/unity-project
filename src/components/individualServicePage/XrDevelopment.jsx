import React from "react";

const XrDevelopment = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#0c1445] to-[#1a237e] py-20 px-5 md:px-10 lg:px-20 overflow-hidden min-h-screen flex items-center justify-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating AR elements */}
        <div className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-[#4fc3f7] opacity-20 animate-float1"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-[#7c4dff] opacity-15 animate-float2"></div>
        <div className="absolute bottom-1/4 left-1/3 w-20 h-20 rounded-full bg-[#00e676] opacity-15 animate-float3"></div>
        <div className="absolute bottom-1/3 right-1/3 w-12 h-12 rounded-full bg-[#ff4081] opacity-20 animate-float4"></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-05"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* 3D XR Device Illustration - Replace with your actual image */}
          <div className="w-full lg:w-1/3 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 ">
              <img
                src="https://www.plugxr.com/augmented-reality/wp-content/uploads/2023/10/WebXR.jpg"
                alt="XR Device"
                className="w-full h-full object-contain animate-float "
              />
              <div className="absolute inset-0 rounded-full bg-[#4fc3f7] opacity-10 blur-xl animate-pulse"></div>
            </div>
          </div>

          {/* Content */}
          <div className="w-full lg:w-2/3 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              XR Development:{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4fc3f7] to-[#00e676]">
                Elevating Realities
              </span>{" "}
              for Future Engagement
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              Embark on a transformative journey with our XR development
              services, where innovation meets immersion.
            </p>

            <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
              Our team harnesses the power of Extended Reality (XR) to reshape
              traditional experiences, offering a dynamic blend of Virtual
              Reality (VR) and Augmented Reality (AR). From cutting-edge
              simulations to interactive environments, we craft solutions that
              transcend boundaries, engaging your audience in ways previously
              unimaginable. Join us at the forefront of technological evolution,
              where XR development isn't just about changing perspectives—it's
              about creating unforgettable experiences that resonate with the
              future.
            </p>

            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="px-8 py-3 bg-gradient-to-r from-[#4fc3f7] to-[#7c4dff] text-white font-semibold rounded-full hover:shadow-lg hover:shadow-[#4fc3f7]/30 transition-all duration-300 transform hover:scale-105">
                Explore Our Work
              </button>
              <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-[#0c1445] transition-all duration-300">
                Contact Us
              </button>
            </div> */}
          </div>
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white opacity-10"
            style={{
              width: `${Math.random() * 10 + 2}px`,
              height: `${Math.random() * 10 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 20 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default XrDevelopment;
