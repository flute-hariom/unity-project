import React from "react";
import Clients from "../components/Clients";
import Cta from "../components/Cta";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Portfolio from "../components/Portfolio";
import Services from "../components/Services";
import TechIntegration from "../components/TechIntegration";
import ImpactVR from "../components/ImpactVR";
import FutureOutLook from "../components/FutureOutLook";
import NavBar from "../components/Navbar/NavBar";
import VirtualRealityPage from "../components/VirtualRealityPage";
import Training from "../components/Training";

const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Intro />
      <Services />
      
      {/* <TechIntegration /> */}
      {/* <ImpactVR /> */}
      {/* <FutureOutLook /> */}
      {/* <Portfolio /> */}
      {/* <Clients /> */}
      <Cta />
      {/* <Footer /> */}
      {/* <VirtualRealityPage/> */}
    </>
  );
};

export default Home;
