"use client";
import React, { useRef } from "react";
import PropTypes from "prop-types";
const Navbar = ({ navOpen }: { navOpen: boolean }) => {
  const lastActiveLink = useRef();
  const activeBox = useRef();
  const navItems = [
    {
      label: "Home",
      link: "#home",
      className: "text-white nav-link active",
      ref: lastActiveLink,
    },
    {
      label: "About",
      link: "#about",
      className: "text-white nav-link",
    },
    {
      label: "Work",
      link: "#work",
      className: "text-white nav-link",
    },
    {
      label: "Reviews",
      link: "#reviews",
      className: "text-white nav-link",
    },
    {
      label: "Contact",
      link: "#contact",
      className: "text-white nav-link md:hidden",
    },
  ];
  return (
    <nav className={"navbar" + (navOpen ? " active" : "")}>
      {navItems.map(({ label, link, className, ref }, key) => {
        return (
          <a
            key={key}
            href={link}
            className={className}
            ref={ref}
            onClick={() => null}
          >
            {label}
          </a>
        );
      })}
      <div className="active-box" ref={lastActiveLink}></div>
    </nav>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};

export default Navbar;
