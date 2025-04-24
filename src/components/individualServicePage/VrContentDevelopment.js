import React from "react";

const VRContentDevelopment = () => {
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

      <div className="relative z-10 max-w-7xl mx-auto mt-24">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* VR Headset Illustration */}
          <div className="w-full lg:w-1/3 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <img
                src="https://img.freepik.com/free-vector/virtual-reality-technology-isometric-icon-cyberspace-element-digital-device-with-vr-goggles-vector-illustration_1284-68999.jpg"
                alt="VR Headset"
                className="w-full h-full object-contain animate-float"
              />
              <div className="absolute inset-0 rounded-full bg-[#4fc3f7] opacity-10 blur-xl"></div>
            </div>
          </div>

          {/* Content */}
          <div className="w-full text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-4xl font-bold mb-6 text-white leading-tight ">
              VR Content Development
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#4fc3f7] to-[#00e676]">
                Immersive. Interactive. Impactful.
              </span>
            </h1>

            <p className="text-lg md:text-2xl text-[#fff] mb-8 leading-relaxed font-semibold">
              We craft high-fidelity VR experiences that educate, engage, and
              empower—built for training, simulations, and immersive
              interactions.
            </p>
          </div>
        </div>

        {/* Our VR Solutions Section */}
        <div className="mt-20">
          <h2 className="text-4xl font-bold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#4fc3f7] to-[#00e676]">
            Our VR Solutions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-[#f6e263]">
                    VR Training Modules
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Specialized training solutions for mining, industrial, and
                    healthcare sectors with measurable outcomes.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 text-[#f6e263]">
                    Immersive Simulations & Walkthroughs
                  </h3>
                  <p className="text-gray-300">
                    Fully interactive environments that replicate real-world
                    scenarios for training and planning.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 text-[#f6e263]">
                    Interactive Product Demos & Experiences
                  </h3>
                  <p className="text-gray-300">
                    Engaging product showcases that allow users to interact with
                    3D models in virtual space.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-[#f6e263]">
                    360° Video Integration
                  </h3>
                  <p className="text-gray-300">
                    Seamless blending of 360° video content with interactive VR
                    elements for hybrid experiences.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 text-[#f6e263]">
                    Technical Capabilities
                  </h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-[#4fc3f7] mr-2">•</span>
                      <span>Developed with Unity & Unreal Engine</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#4fc3f7] mr-2">•</span>
                      <span>WebVR & Meta Quest-Ready</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#4fc3f7] mr-2">•</span>
                      <span>
                        Real-world physics, gesture input, and spatial sound
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#4fc3f7] mr-2">•</span>
                      <span>Backend analytics & performance tracking</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 text-[#f6e263]">
                    Deployment
                  </h3>
                  <p className="text-gray-300">
                    Rapid prototyping + deployment on Oculus, HTC Vive, Pico,
                    and more.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Industries Section */}
        <div className="mt-12 bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h3 className="text-2xl font-bold mb-6 text-[#f6e263]">
            Industries We Serve
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="text-xl font-semibold text-[#4fc3f7] mb-3">
                Mining & Heavy Industries
              </h4>
              <p className="text-gray-300">
                Safety training, equipment operation, and hazardous scenario
                simulations.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-[#4fc3f7] mb-3">
                Healthcare & Medical Simulation
              </h4>
              <p className="text-gray-300">
                Surgical training, patient interaction scenarios, and medical
                equipment familiarization.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-[#4fc3f7] mb-3">
                Construction & Safety Training
              </h4>
              <p className="text-gray-300">
                Site safety protocols, equipment training, and emergency
                response drills.
              </p>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-6 text-center text-[#f6e263]">
            Why Choose Us
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "15+ years in immersive tech & enterprise software",
              "End-to-end content design & development",
              "Scenario-driven learning with measurable outcomes",
              "Multi-platform deployment expertise",
              "Custom analytics integration",
              "Proven track record in enterprise VR",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
              >
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#4fc3f7] to-[#00e676] flex items-center justify-center mr-4">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <h4 className="text-lg font-semibold text-white">{item}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Let's Make VR That Moves People
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Your ideas, our immersive engine.
          </p>
          <button className="bg-gradient-to-r from-[#4fc3f7] to-[#00e676] text-white font-bold py-3 px-8 rounded-full hover:opacity-90 transition-opacity text-lg">
            Book a Demo or Free Consultation
          </button>
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

export default VRContentDevelopment;
