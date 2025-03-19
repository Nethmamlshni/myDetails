import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: "class", // Enable class-based dark mode
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Scan for Tailwind classes
  theme: {
    extend: {},
  },
  plugins: [],
}

export default config;
