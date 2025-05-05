"use client";
import React, { useRef } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
const Navbar = ({ navOpen }: { navOpen: boolean }) => {
  const lastActiveLink = useRef<HTMLDivElement | unknown>();
  const activeBox = useRef();

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
    <nav className={"navbar" + (navOpen ? " active" : "")}>
      {navItems.map(({ label, link, className, ref }, key) => (
        <Link
          key={key}
          href={link}
          ref={ref}
          className={className + "bg-white"}
          onClick={() => null}
        >
          {label}
        </Link>
      ))}
      <Link className="active-box"></Link>
    </nav>
  );
};

// Navbar.propTypes = {
//   navOpen: PropTypes.bool.isRequired,
// };

export default Navbar;
