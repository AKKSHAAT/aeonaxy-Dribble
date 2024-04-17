/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      input: {
        base: "appearance-none relative block w-full px-3 py-2 border placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none bg-zinc-100 focus:z-10 sm:text-sm border-none",
      },
      colors: {
        inputBg: {
          100: "#f3f3f3",
        },
        "dribblePink": "#ea4b8b",
        "ugly-text-brown": "#775300"
      },
    },
  },
  plugins: [],
};
