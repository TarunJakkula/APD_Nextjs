const { transform } = require("next/dist/build/swc");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        pop: {
          "0%": {
            transform: "scale(0)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
        slidedown: {
          "0%": {
            opacity: "0",
            transform: "translate(0px,-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(0,0)",
          },
        },
        slidedownNoOpacity: {
          "0%": {
            transform: "translate(0px,-10px)",
          },
          "100%": {
            transform: "translate(0,0)",
          },
        },
        slidedownNoOpacityBack: {
          "0%": {
            transform: "translate(0px,10px)",
          },
          "100%": {
            transform: "translate(0,0)",
          },
        },
        slideright: {
          "0%": {
            opacity: "0",
            transform: "translate(-20px,0)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(0,0)",
          },
        },
        aroundTheCircle: {
          "0%": {
            top: "0%",
            left: "0%",
          },
          "25%": {
            top: "0%",
            left: "90%",
          },
          "50%": {
            top: "90%",
            left: "90%",
          },
          "75%": {
            top: "90%",
            left: "0%",
          },
          "100%": {
            top: "0%",
            left: "0%",
          },
        },
      },
      animation: {
        slide1: "slidedown 0.2s ease-in ",
        slide2: "slidedown 0.25s ease-in",
        slide3: "slideright 0.2s ease-in",
        slide4: "slideright 0.25s ease-in",
        slide1NoOpacity: "slidedownNoOpacity 0.15s linear ",
        slide1NoOpacityBack: "slidedownNoOpacityBack 0.15s linear ",
        popOut: "pop 0.15s linear",
        fade1: "fadeIn 0.15s linear",
        around: "aroundTheCircle 2s linear infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
