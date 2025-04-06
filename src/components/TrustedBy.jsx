import React from "react";

// Image names (assuming they exist in the /public/trustedImage/ folder)
const imageList = [
  "trusted1.png",
  "trustimg2.png",
  "trustimg3.png",
  "trustimg4.png",
  "trustimg5.png",
  "trustimg6.png",
  "trustimg7.png",
  // "trustimg8.png",
  "trustimg9.png",
  "trustimg10.png",
  "trustimg11.png",
];

// Duplicate images for smooth infinite scrolling
const repeatedImages = [...imageList, ...imageList];

const TrustedBy = () => {
  return (
    <div className="mt-16 pt-12" id="hero">
      <section>
        <div className="flex-col lg:my-0 lg:justify-end w-full lg:pl-24 pr-4">
          <h1 className="text-3xl md:text-6xl mb-10 font-extrabold uppercase">
            <span className="text-gray-800">Trusted By</span>
          </h1>
        </div>

        {/* Scrollable images */}
        <div className="overflow-hidden w-full relative mt-36">
          <div className="scrolling-container">
            {repeatedImages.map((img, index) => (
              <img
                key={index}
                src={`/trustedImage/${img}`}
                alt={`Trusted ${index}`}
                className="w-40 h-28 mx-4 object-contain"
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrustedBy;
