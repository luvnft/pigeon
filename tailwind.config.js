/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      blue: "#628CD6",
      "dark-blue": "#494592",
      purple: "#9C0C63",
      "purple-dark": "#66095A",
      violet: "#4D0A62",
      "fb-black": "#18191a",
      "fb-dark-gray": "#242526",
      "fb-gray": "#3a3b3c",
      "fb-white": "#e4e6eb",
      "fb-silver": "#b0b3b8",
      "red-error": "#dc2626",
    },
  },
  plugins: [],
};
