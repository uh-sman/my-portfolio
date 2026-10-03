import React from "react";
import SplitText from "./SplitText";

interface SectionHeadingProps {
  index: string;
  label: string;
  title: string;
  desc?: string;
  align?: "left" | "center";
}

const SectionHeading = ({ index, label, title, desc, align = "left" }: SectionHeadingProps) => {
  const centered = align === "center";
  return (
    <div className={`mb-14 lg:mb-20 ${centered ? "mx-auto text-center" : ""}`}>
      <p className="eyebrow reveal mb-6">
        <span className="text-accent-soft">{index}</span> {label}
      </p>
      <SplitText
        text={title}
        className={`headline words-gradient split-heading ${centered ? "mx-auto" : ""} max-w-[18ch]`}
      />
      {desc && (
        <p
          className={`reveal mt-6 max-w-[52ch] text-base leading-relaxed text-zinc-400 md:text-lg ${
            centered ? "mx-auto" : ""
          }`}
        >
          {desc}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
