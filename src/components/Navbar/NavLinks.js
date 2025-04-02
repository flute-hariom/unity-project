import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";

const NavLink = ({ to, activeLink, setActiveLink, children, onClick }) => {
  const isActive = activeLink === to;

  return (
    <HashLink
      className={`px-4 font-bold text-[#5d5656] border 
              transition-all duration-300 ease-in-out rounded-2xl py-2
              hover:bg-gradient-to-r hover:from-orange-700  hover:to-orange-800 
              bg-clip-text hover:text-transparent hover:shadow-lg hover:shadow-orange-500/50
              ${
                isActive
                  ? "border-gray-800 bg-orange-200 text-red-500"
                  : "border-transparent"
              }`}
      smooth
      to={to}
      onClick={() => {
        setActiveLink(to);
        if (onClick) onClick(); // Close the navbar on mobile
      }}
    >
      {children}
    </HashLink>
  );
};

const NavLinks = ({ onLinkClick }) => {
  const [activeLink, setActiveLink] = useState("");

  return (
    <>
      <NavLink
        to="/#"
        activeLink={activeLink}
        setActiveLink={setActiveLink}
        onClick={onLinkClick}
      >
        Home
      </NavLink>
      <NavLink
        to="/#about"
        activeLink={activeLink}
        setActiveLink={setActiveLink}
        onClick={onLinkClick}
      >
        About
      </NavLink>
      <NavLink
        to="/#services"
        activeLink={activeLink}
        setActiveLink={setActiveLink}
        onClick={onLinkClick}
      >
        Services
      </NavLink>
      <NavLink
        to="/career"
        activeLink={activeLink}
        setActiveLink={setActiveLink}
        onClick={onLinkClick}
      >
        Career
      </NavLink>
      <NavLink
        to="/contact#contact"
        activeLink={activeLink}
        setActiveLink={setActiveLink}
        onClick={onLinkClick}
      >
        Contact Us
      </NavLink>
    </>
  );
};

export default NavLinks;
