import React from "react";

interface ButtonPrimaryProps {
  href: string;
  target: string;
  label: string;
  icon: string;
  classes?: string;
}
interface ButtonOutlineProps {
  href: string;
  target: string;
  label: string;
  icon: string;
  classes?: string;
}
const ButtonPrimary = ({
  href,
  target,
  label,
  icon,
  classes,
}: ButtonPrimaryProps) => {
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
  return (
    <a href={href} target={target} className={`btn btn-primary ${classes}`}>
      {label}
      {icon ? (
        <span className="material-symbols-rounded" aria-hidden="true">
          {icon}
        </span>
      ) : null}
    </a>
  );
};




 const ButtonOutline = ({
  href,
  target,
  label,
  icon,
  classes,
}: ButtonOutlineProps) => {
  if (!href) {
    return (
      <button className={`btn btn-outline ${classes}`}>
        {label}
        {icon ? (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        ) : null}
      </button>
    );
  }
  return (
    <a href={href} target={target} className={`btn btn-outline ${classes}`}>
      {label}
      {icon ? (
        <span className="material-symbols-rounded" aria-hidden="true">
          {icon}
        </span>
      ) : null}
    </a>
  );
};