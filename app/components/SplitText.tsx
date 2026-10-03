import React from "react";

interface SplitTextProps {
  /** Words wrapped in *asterisks* render in the serif accent style. */
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p";
  /** Class used by GSAP to find the animated word spans. */
  wordClass?: string;
}

// Splits text into masked words so each one can slide up independently.
const SplitText = ({
  text,
  className = "",
  as: Tag = "h2",
  wordClass = "split-word",
}: SplitTextProps) => {
  const words = text.split(" ");

  return (
    <Tag className={className} aria-label={text.replace(/\*/g, "")}>
      {words.map((raw, i) => {
        const accent = raw.startsWith("*") && raw.endsWith("*");
        const word = accent ? raw.slice(1, -1) : raw;
        return (
          <React.Fragment key={i}>
            <span className="word-mask" aria-hidden="true">
              <span className={`${wordClass} ${accent ? "serif-accent" : ""}`}>
                {word}
              </span>
            </span>
            {i < words.length - 1 && " "}
          </React.Fragment>
        );
      })}
    </Tag>
  );
};

export default SplitText;
