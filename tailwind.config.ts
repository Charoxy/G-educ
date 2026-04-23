import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#2a2438",
        plum: "#6b4a7a",
        "plum-soft": "#8c6e99",
        lavender: "#d4c2dc",
        sage: "#7a8f6c",
        "sage-soft": "#c2cfb5",
        sand: "#e8dcc8",
        "sand-light": "#f5ede0",
        bone: "#fbf6ec",
        peach: "#e8b89a",
        terra: "#b86e52",
      },
      fontFamily: {
        sans: ['Nunito', '-apple-system', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
