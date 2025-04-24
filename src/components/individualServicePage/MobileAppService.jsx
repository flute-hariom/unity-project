import React from "react";

const MobileAppService = () => {
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
          {/* 3D XR Device Illustration - Replace with your actual image */}
          <div className="w-full lg:w-1/3 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 ">
              <img
                src="https://img.freepik.com/free-vector/app-development-banner_33099-1720.jpg?t=st=1745470492~exp=1745474092~hmac=e00ccfa877083e4aeaa07ae5fea4d10c482a26da2d774dc39ca20126c2ce497e&w=1380"
                alt="XR Device"
                className="w-full h-full object-contain animate-float "
              />
              {/* <div className="absolute inset-0 rounded-full bg-[#4fc3f7] opacity-10 blur-xl animate-pulse"></div> */}
              <div className="absolute inset-0 rounded-full bg-[#4fc3f7] opacity-10 blur-xl "></div>
            </div>
          </div>

          {/* Content */}
          <div className="w-full  text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-4xl font-bold mb-6 text-white leading-tight ">
              Crafting Mobile Excellence,
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4fc3f7] to-[#00e676]">
                Mobile App Development, Apps that Perform. Experiences that
                Stick.
              </span>{" "}
            </h1>

            <p className="text-lg md:text-2xl text-[#fff] mb-8 leading-relaxed font-semibold">
              We build sleek, scalable, and secure mobile apps for Android, iOS,
              and cross-platform—designed to impress and built to last.
            </p>
          </div>
        </div>

        {/* New Grid Layout Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#4fc3f7] to-[#00e676]">
              What We Do
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-[#f6e263] mb-2">
                  Native Apps (Swift, Kotlin)
                </h3>
                <h3 className="text-xl font-semibold text-[#f6e263] mb-2">
                  Cross-Platform (Flutter, React Native)
                </h3>
              </div>

              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="text-[#4fc3f7] mr-2">•</span>
                  <span>API & Backend Integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4fc3f7] mr-2">•</span>
                  <span>UMAX Design for Real Users</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4fc3f7] mr-2">•</span>
                  <span>App Store Deployment & Maintenance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4fc3f7] mr-2">•</span>
                  <span>Built for Real-World Scale</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4fc3f7] mr-2">•</span>
                  <span>Fast, responsive, and offline-ready</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4fc3f7] mr-2">•</span>
                  <span>Secure auth (OAuth2, biometrics, JWT)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4fc3f7] mr-2">•</span>
                  <span>Cloud-integrated (Firebase, AWS)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4fc3f7] mr-2">•</span>
                  <span>Real-time updates & analytics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4fc3f7] mr-2">•</span>
                  <span>GDPR & HIPAA compliant</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#4fc3f7] to-[#00e676]">
                  Use Cases We Deliver
                </h2>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-[#00e676] mr-2">•</span>
                    <span>E-commerce & Delivery</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00e676] mr-2">•</span>
                    <span>Booking & On-Demand Services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00e676] mr-2">•</span>
                    <span>Enterprise Productivity</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00e676] mr-2">•</span>
                    <span>IoT-Connected Apps</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00e676] mr-2">•</span>
                    <span>EdTech & Learning Platforms</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#4fc3f7] to-[#00e676]">
                  Why Teams Love Working With Us
                </h2>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-[#ff4081] mr-2">•</span>
                    <span>Agile, Sprint-Based Execution</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#ff4081] mr-2">•</span>
                    <span>Full Stack Design Synergy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#ff4081] mr-2">•</span>
                    <span>Optimized for Speed, UX & Scale</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#ff4081] mr-2">•</span>
                    <span>Post-Launch Support & Growth</span>
                  </li>
                </ul>
              </div>

              <div className="mt-10 text-center">
                <h2 className="text-3xl font-bold mb-4 text-white">
                  Let's Launch Your Next App
                </h2>
                <p className="text-gray-300 mb-6">
                  From concept to app stores—we've got your back.
                </p>
                <button className="bg-gradient-to-r from-[#4fc3f7] to-[#00e676] text-white font-bold py-3 px-8 rounded-full hover:opacity-90 transition-opacity">
                  Schedule a Free Discovery Call
                </button>
              </div>
            </div>
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

export default MobileAppService;
