import React from "react";

const IndependentTestingServices = () => {
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
          {/* Testing Illustration */}
          <div className="w-full lg:w-1/3 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <img
                src="https://img.freepik.com/free-vector/software-testing-isometric-concept_1284-17947.jpg"
                alt="Testing Services"
                className="w-full h-full object-contain animate-float"
              />
              <div className="absolute inset-0 rounded-full bg-[#4fc3f7] opacity-10 blur-xl"></div>
            </div>
          </div>

          {/* Content */}
          <div className="w-full text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-4xl font-bold mb-6 text-white leading-tight ">
              Independent Testing Services
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#4fc3f7] to-[#00e676]">
                Build Better. Release Smarter.
              </span>
            </h1>

            <p className="text-lg md:text-2xl text-[#fff] mb-8 leading-relaxed font-semibold">
              Our comprehensive QA and testing services ensure that your
              software is robust, secure, scalable, and user-ready–every time.
            </p>
          </div>
        </div>

        {/* What We Offer Section */}
        <div className="mt-20">
          <h2 className="text-4xl font-bold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#4fc3f7] to-[#00e676]">
            What We Offer
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-[#f6e263]">
                    Functional Testing
                  </h3>
                  <p className="text-gray-300">
                    Validate that your software behaves as expected across all
                    use cases, workflows, and user journeys.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 text-[#f6e263]">
                    Test Automation
                  </h3>
                  <p className="text-gray-300 mb-2">
                    Accelerate release cycles with maintainable, reusable
                    automated tests integrated into CICD pipelines:
                  </p>
                  <p className="text-gray-300 font-medium">
                    <strong>Tech:</strong> Selenium, Cypress, Playwright,
                    Appium, REST Assured
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 text-[#f6e263]">
                    Performance Testing
                  </h3>
                  <p className="text-gray-300 mb-2">
                    Test how your application behaves under load, stress, and
                    spike scenarios to ensure responsiveness and stability.
                  </p>
                  <p className="text-gray-300 font-medium">
                    <strong>Tools:</strong> JMeter, Gaffing, I6
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 text-[#f6e263]">
                    Security Testing
                  </h3>
                  <p className="text-gray-300 mb-2">
                    Proactively identify vulnerabilities and enforce secure
                    coding practices through dynamic, static, and runtime scans.
                  </p>
                  <p className="text-gray-300 font-medium">
                    <strong>Tools:</strong> OWASP ZAP, Burp Suite, SoundQube,
                    Suyk
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-[#f6e263]">
                    Mobile & Cross-Browser Testing
                  </h3>
                  <p className="text-gray-300 mb-2">
                    Ensure consistent user experiences across platforms,
                    devices, and browsers.
                  </p>
                  <p className="text-gray-300 font-medium">
                    <strong>Platforms:</strong> BrowserStack, Sauco Labs
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 text-[#f6e263]">
                    Integration & API Testing
                  </h3>
                  <p className="text-gray-300 mb-2">
                    Validate backend services, data flows, and third-party
                    integrations for accuracy, performance, and fault tolerance.
                  </p>
                  <p className="text-gray-300 font-medium">
                    <strong>Tools:</strong> Postman, SongUL Karaie
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 text-[#f6e263]">
                    Regression & Smoke Testing
                  </h3>
                  <p className="text-gray-300">
                    Avoid surprises in production by continuously verifying the
                    stability of core functionality.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 text-[#f6e263]">
                    Compliance & Audit Support
                  </h3>
                  <p className="text-gray-300">
                    Assistance with ISO 9001, ISO 27001, GDPR, HIPAA, and CMMI
                    process audits through well-documented test artifacts and
                    traceability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Benefits Section */}
        <div className="mt-12 bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h3 className="text-2xl font-bold mb-6 text-[#f6e263]">
            Key Benefits
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Faster Time-to-Market with automated and streamlined QA",
              "Improved Product Quality through structured test coverage",
              "Enhanced Security Posture by identifying vulnerabilities early",
              "Risk Mitigation via early defect detection and fail-safe validation",
              "Audit-Ready Documentation for process, compliance, and reporting",
              "Toolchain Flexibility to fit your existing dev/test ecosystem",
              "Independent QA Teams that bring unbiased validation",
            ].map((benefit, index) => (
              <div key={index} className="flex items-start">
                <span className="text-[#4fc3f7] mr-2 mt-1">•</span>
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quality Engineering Section */}
        <div className="mt-12">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 text-center">
            <h3 className="text-2xl font-bold mb-4 text-[#f6e263]">
              Quality Engineering That Scales
            </h3>
            <p className="text-gray-300 mb-6">
              Whether you're shipping every week or every hour—we ensure your
              releases are fast, stable, and secure.
            </p>
            <button className="bg-gradient-to-r from-[#4fc3f7] to-[#00e676] text-white font-bold py-3 px-8 rounded-full hover:opacity-90 transition-opacity">
              Talk to Our QA Experts
            </button>
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

export default IndependentTestingServices;
