import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// All pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import DemoProduct from "./pages/DemoProduct";
import AboutUsMore from "./pages/AboutUsMore";

import { useDocTitle } from "./components/CustomHook";
import ScrollToTop from "./components/ScrollToTop";
import BlogsByid from "./components/ourBlogs/BlogsByid";
import Career from "./components/career/Career";
import NavBar from "./components/Navbar/NavBar";
import Footer from "./components/Footer";
import ScrollOnTop from "./components/ScrollOnTop";
import VrContentDevelopment from "./components/individualServicePage/VrContentDevelopment";
function App() {
  useEffect(() => {
    const aos_init = () => {
      AOS.init({
        once: true,
        duration: 1000,
        easing: "ease-out-cubic",
      });
    };

    window.addEventListener("load", () => {
      aos_init();
    });
  }, []);

  useDocTitle("Mysta Technology");

  return (
    <>
      <Router>
        <ScrollOnTop />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/get-demo" element={<DemoProduct />} />
          <Route path="/about-us" element={<AboutUsMore />} />
          <Route path="/our-blog" element={<BlogsByid />} />
          <Route path="/career" element={<Career />} />
          <Route path="/ourService" element={<VrContentDevelopment />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
