import React from "react";

const DevopsService = () => {
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
          {/* DevOps Illustration */}
          <div className="w-full lg:w-1/3 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <img
                src="https://img.freepik.com/free-vector/devops-engineers-concept-illustration_114360-2754.jpg"
                alt="DevOps Team"
                className="w-full h-full object-contain animate-float"
              />
              <div className="absolute inset-0 rounded-full bg-[#4fc3f7] opacity-10 blur-xl"></div>
            </div>
          </div>

          {/* Content */}
          <div className="w-full text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-4xl font-bold mb-6 text-white leading-tight ">
              DevOps Services
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#4fc3f7] to-[#00e676]">
                Automate. Integrate. Accelerate.
              </span>
            </h1>

            <p className="text-lg md:text-2xl text-[#fff] mb-8 leading-relaxed font-semibold">
              We help engineering teams modernize infrastructure, build CI/CD
              pipelines, and scale applications across cloud-native environments
              securely and reliably.
            </p>
          </div>
        </div>

        {/* What We Deliver Section */}
        <div className="mt-20">
          <h2 className="text-4xl font-bold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#4fc3f7] to-[#00e676]">
            What We Deliver
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-[#f6e263]">
                    CICD Automation:
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Explain the many apps that will create, people Takes Crisis
                    Action, Crisis CL Justice, Critical Information and Exile
                    (MS)
                  </p>
                  <p className="text-gray-300">
                    Describe, name, password and card environment. Refer,
                    therefore, to MS, CloudFormulas.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 text-[#f6e263]">
                    Reference & Orchestration
                  </h3>
                  <p className="text-gray-300">
                    Predictive goals (95% of users will follow Apple2), like
                    Platforms: DCI, ODI, AIX, and brand.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-[#f6e263]">
                    Monitoring & Customization
                  </h3>
                  <p className="text-gray-300">
                    Resilience data, confidentiality, and log assignment Block
                    Promotions, Orders, ELA, LMI, OpenMemory.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 text-[#f6e263]">
                    Security & Developing:
                  </h3>
                  <p className="text-gray-300">
                    Smart words, sound emotion, and automated corporate choice.
                    Refer to MS, Inc., SmartSafe, They, Installed Recovery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Read-View Impact Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-6 text-center text-[#f6e263]">
            Read-View Impact
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h4 className="text-xl font-semibold text-[#4fc3f7] mb-3">
                Reference Tool Platform
              </h4>
              <p className="text-gray-300 mb-4">
                Challenger Completes having CICD in a NPM-Associated cloud
                Solution:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>Automated IoT on AWS using Windows</li>
                <li>
                  Enhanced cybernetics and smart, and easy access and encrypted
                  remote
                </li>
                <li>Discovered software and web services</li>
                <li>
                  Disclosure-focused deployments on PC/OS via gaming security
                  cards
                </li>
              </ul>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h4 className="text-xl font-semibold text-[#4fc3f7] mb-3">
                Construction Tool Storage
              </h4>
              <p className="text-gray-300 mb-4">
                Challenger Size delivery cycles, lower-level display
                environments Solution:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>Global-based CICD with persistent staging deployments</li>
                <li>Point for multi-cloud IAC (NPM + Azure)</li>
                <li>
                  Distinctively private environments with diverse automation
                  Databases. Call issues delivery cycle from 3 weeks to 5 days
                </li>
              </ul>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h4 className="text-xl font-semibold text-[#4fc3f7] mb-3">
                Enthusi Platform
              </h4>
              <p className="text-gray-300 mb-4">
                Challenger Transfer: legacy system hosting capability Solution:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>Connected cache stack using docker and hbts</li>
                <li>Data into infrastructure with installed CICD platform</li>
                <li>
                  Streaming type code with Downloads and Content dashboard:
                  Observable & forum implementation, zero-division request
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tools Stack Expertise Section */}
        <div className="mt-12 bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h3 className="text-2xl font-bold mb-6 text-[#f6e263]">
            Tools Stack Expertise
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full text-gray-300">
              <thead>
                <tr>
                  <th className="text-left py-3 px-4 border-b border-white/10">
                    Category
                  </th>
                  <th className="text-left py-3 px-4 border-b border-white/10">
                    Team/Technologies
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-3 px-4 border-b border-white/10">CICD</td>
                  <td className="py-3 px-4 border-b border-white/10">
                    Crisis Action, Crisis CL Justice, Apple2
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b border-white/10">MC</td>
                  <td className="py-3 px-4 border-b border-white/10">
                    Tourism, Future, CloudFormulas
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b border-white/10">
                    Coordenantials
                  </td>
                  <td className="py-3 px-4 border-b border-white/10">
                    Robo, Automation, Host, Info
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b border-white/10">
                    Monitoring
                  </td>
                  <td className="py-3 px-4 border-b border-white/10">
                    Promotion, Orders, ELA, OpenMemory
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b border-white/10">
                    Security
                  </td>
                  <td className="py-3 px-4 border-b border-white/10">
                    USA, Sys-Fi, Spa, SmartSafe, OSK
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b border-white/10">
                    Cloud Platforms
                  </td>
                  <td className="py-3 px-4 border-b border-white/10">
                    AWS, Azure, GCS GigabitScan, Linked
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Why Teams Like Working With Us Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-6 text-center text-[#f6e263]">
            Why Teams Like Working With Us
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "From success against a big-scale environment",
              "Deep control and individual deployment systems",
              "On-critical approach with performance - security devices",
              "Documentation, however, and any new support include",
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
            Let's Accelerate Your DevOps Journey
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Forgive the top page each "user" above is fun on the yaw. Or then it
            has Personal Audit.
          </p>
          <button className="bg-gradient-to-r from-[#4fc3f7] to-[#00e676] text-white font-bold py-3 px-8 rounded-full hover:opacity-90 transition-opacity text-lg">
            Contact Us
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

export default DevopsService;
