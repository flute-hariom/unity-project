import React, { useRef } from "react";
import CoreValues from "../components/CoreValues";
import NavBar from "../components/Navbar/NavBar";
import PillerData from "../components/PillerData";
import Intro from "../components/Intro";
import WhoWeAre from "../components/WhoWeAre";

const AboutUsMore = () => {
  return (
    <>
      {/* <NavBar /> */}
      <div id="services" className=" px-4 relative pt-4">
        <WhoWeAre />
        {/* <Intro /> */}
        <CoreValues />
        <PillerData />
      </div>
    </>
  );
};

export default AboutUsMore;
