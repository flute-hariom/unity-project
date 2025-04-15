import React, { useRef } from "react";
import CoreValues from "../components/CoreValues";
import NavBar from "../components/Navbar/NavBar";
import PillerData from "../components/PillerData";
import Intro from "../components/Intro";

const AboutUsMore = () => {
  return (
    <>
      {/* <NavBar /> */}
      <div id="services" className=" px-4 relative pt-4">
        <Intro />
        <PillerData />
        <CoreValues />
      </div>
    </>
  );
};

export default AboutUsMore;
