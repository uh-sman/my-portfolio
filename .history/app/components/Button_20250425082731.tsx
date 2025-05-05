import React from "react";

interface ButtonProps {
  href: string;
  target: string;
  label: string;
  icon: string;
  classes?: string;
}
const ButtonPrimary = ({ href, target, label, icon, classes }: ButtonProps) => {
  if (!href) {
    return (
      <button className={`btn btn-primary ${classes}`}>
        {label}
        {icon ? (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        ) : null}
      </button>
    );
   
  }
    else{
  }
};

export default ButtonPrimary;
