/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        accent: {
          DEFAULT: "#FF4FCB",
          glow: "#E43DFF",
          deep: "#9B5CFF",
        }
      },
      fontFamily: {
        main: ['var(--font-inter)', 'sans-serif'],
        display: ['var(--font-outfit)', 'sans-serif'],
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { opacity: 0.5, filter: 'blur(10px)' },
          '50%': { opacity: 1, filter: 'blur(15px)' },
        }
      }
    },
  },
  plugins: [],
};
