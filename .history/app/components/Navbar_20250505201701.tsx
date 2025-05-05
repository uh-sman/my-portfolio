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
      activeBox.current.style.height =
        lastActiveLink.current.offsetHeight + "px";
    }
  };

  useEffect(() => {
    // Initialize active box on mount
    initActiveBox();

    // Add event listener for window resize on mount
    window.addEventListener("resize", initActiveBox);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("resize", initActiveBox);
    };
  }, []); // Empty dependency array means this runs only once, when the component mounts

  const activeCurrentLink = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!activeBox.current || !lastActiveLink.current) return; // Early return if refs are null

    lastActiveLink?.current?.classList.remove("active");
    e.currentTarget.classList.add("active");

    lastActiveLink.current = e.currentTarget;
    activeBox.current.style.top = lastActiveLink.current.offsetTop + "px";
    activeBox.current.style.left = lastActiveLink.current.offsetLeft + "px";
    activeBox.current.style.width = lastActiveLink.current.offsetWidth + "px";
    activeBox.current.style.top = lastActiveLink.current.offsetTop + "px";
    activeBox.current.style.height = lastActiveLink.current.offsetHeight + "px";
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
