"use client";
import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
const Navbar = ({ navOpen }: { navOpen: boolean }) => {
  const lastActiveLink = useRef<HTMLAnchorElement | null>(null);
  const activeBox = useRef<HTMLDivElement | null>(null);
  
  const initActiveBox = () => {
    if (activeBox.current && lastActiveLink.current) {
      activeBox.current.style.top = lastActiveLink.current.offsetTop + "px";
      activeBox.current.style.left = lastActiveLink.current.offsetLeft + "px";
      activeBox.current.style.width = lastActiveLink.current.offsetWidth + "px";
      activeBox.current.style.top = lastActiveLink.current.offsetTop + "px";
      activeBox.current.style.height = lastActiveLink.current.offsetHeight + "px";
    }
  };

  useEffect(initActiveBox, []);
  const activeCurrentLink = (e: React.MouseEvent<HTMLAnchorElement>) => {
    lastActiveLink?.current?.classList.remove("active");
    e.currentTarget.classList.add("active");
   
    lastActiveLink
  };

  const navItems = [
    {
      label: "Home",
      link: "#home",
      className: "nav-link active",
      ref: lastActiveLink,
    },
    {
      label: "About",
      link: "#about",
      className: "nav-link",
    },
    {
      label: "Work",
      link: "#work",
      className: "nav-link",
    },
    {
      label: "Reviews",
      link: "#reviews",
      className: "nav-link",
    },
    {
      label: "Contact",
      link: "#contact",
      className: "nav-link md:hidden",
    },
  ];
  return (
    <nav className={`navbar ${navOpen ? "active" : ""}`}>
      {navItems.map(({ label, link, className, ref }, key) => {
        const itemRef = useRef<HTMLDivElement | null>(null); // Create a separate ref for the div
        return (
          <a
            href={link}
            key={key}
            ref={ref}
            className={className}
            onClick={activeCurrentLink}
          >
            {label}
            {/* <div ref={itemRef} className="item-box"></div>{" "} */}
            {/* Separate ref for the div */}
          </a>
        );
      })}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};

export default Navbar;
//
