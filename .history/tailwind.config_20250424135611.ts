import type { Config } from "tailwindcss";
import scrollbar from "tailwind-scrollbar"; // ✅ import the plugin

const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
   
    },
  },
  plugins: [
    scrollbar, // ✅ add the plugin here
  ],
} satisfies Config;

export default config;
