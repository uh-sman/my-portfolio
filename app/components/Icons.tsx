import React from "react";

type IconProps = React.SVGProps<SVGSVGElement>;

const base = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  "aria-hidden": true,
} as const;

export const ArrowUpRight = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M7 17 17 7M8 7h9v9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ArrowDown = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M12 5v14m0 0-6-6m6 6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ArrowUp = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M12 19V5m0 0-6 6m6-6 6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const Send = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M21 3 10 14M21 3l-7 18-4-7-7-4 18-7Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const Mail = (props: IconProps) => (
  <svg {...base} {...props}>
    <rect x="3" y="5" width="18" height="14" rx="3" stroke="currentColor" strokeWidth="1.8" />
    <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const Star = (props: IconProps) => (
  <svg {...base} {...props}>
    <path
      d="M12 2.8l2.83 5.74 6.33.92-4.58 4.46 1.08 6.3L12 17.25l-5.66 2.97 1.08-6.3L2.84 9.46l6.33-.92L12 2.8Z"
      fill="currentColor"
    />
  </svg>
);

export const Quote = (props: IconProps) => (
  <svg {...base} {...props}>
    <path
      d="M9.6 6C6.5 7.3 4.5 10 4.5 13.6V18h5.4v-5.4H7.2c0-2.2 1.2-3.9 3.3-4.9L9.6 6Zm9 0c-3.1 1.3-5.1 4-5.1 7.6V18h5.4v-5.4h-2.7c0-2.2 1.2-3.9 3.3-4.9L18.6 6Z"
      fill="currentColor"
    />
  </svg>
);

export const Sparkle = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M12 2c.5 5.2 4.8 9.5 10 10-5.2.5-9.5 4.8-10 10-.5-5.2-4.8-9.5-10-10 5.2-.5 9.5-4.8 10-10Z" fill="currentColor" />
  </svg>
);

export const GitHub = (props: IconProps) => (
  <svg {...base} {...props}>
    <path
      d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"
      fill="currentColor"
    />
  </svg>
);

export const LinkedIn = (props: IconProps) => (
  <svg {...base} {...props}>
    <path
      d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14ZM8.34 10.04H5.67V18h2.67v-7.96ZM7 5.7a1.55 1.55 0 1 0 0 3.1 1.55 1.55 0 0 0 0-3.1Zm11.33 7.7c0-2.4-1.28-3.52-3-3.52a2.6 2.6 0 0 0-2.35 1.3v-1.14h-2.66V18h2.66v-4.27c0-1.13.21-2.21 1.6-2.21 1.38 0 1.4 1.29 1.4 2.28V18h2.66l-.31-4.6Z"
      fill="currentColor"
    />
  </svg>
);

export const XTwitter = (props: IconProps) => (
  <svg {...base} {...props}>
    <path
      d="M17.75 3h3.07l-6.7 7.66L22 21h-6.17l-4.83-6.32L5.47 21H2.4l7.17-8.2L2 3h6.33l4.37 5.77L17.75 3Zm-1.08 16.18h1.7L7.4 4.73H5.58l11.09 14.45Z"
      fill="currentColor"
    />
  </svg>
);

export const Instagram = (props: IconProps) => (
  <svg {...base} {...props}>
    <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" />
  </svg>
);
