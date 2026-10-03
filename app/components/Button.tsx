import React from "react";
import Magnetic from "./Magnetic";

interface ButtonProps {
  label: string;
  href?: string;
  target?: string;
  icon?: React.ReactNode;
  variant?: "primary" | "ghost";
  type?: "button" | "submit";
  classes?: string;
}

const Button = ({
  label,
  href,
  target,
  icon,
  variant = "primary",
  type = "button",
  classes = "",
}: ButtonProps) => {
  const className = `btn btn-${variant} ${classes}`;
  const content = (
    <>
      <span>{label}</span>
      {icon && <span className="btn-icon">{icon}</span>}
    </>
  );

  return (
    <Magnetic strength={0.25}>
      {href ? (
        <a
          href={href}
          target={target}
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
          className={className}
        >
          {content}
        </a>
      ) : (
        <button type={type} className={className}>
          {content}
        </button>
      )}
    </Magnetic>
  );
};

export default Button;
