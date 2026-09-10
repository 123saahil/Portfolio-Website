/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        ink: {
          900: "#05050a",
          800: "#0a0a12",
          700: "#12121d",
        },
      },
      boxShadow: {
        glow: "0 0 40px -12px rgba(139, 92, 246, 0.55)",
        card: "0 24px 60px -30px rgba(0, 0, 0, 0.9)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(-8px)" },
          "50%": { transform: "translateY(8px)" },
        },
        shimmer: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        pulseRing: {
          "0%": { transform: "scale(0.95)", opacity: "0.7" },
          "70%": { transform: "scale(1.25)", opacity: "0" },
          "100%": { transform: "scale(0.95)", opacity: "0" },
        },
      },
      animation: {
        float: "float 4s ease-in-out infinite alternate",
        shimmer: "shimmer 6s ease infinite",
        pulseRing: "pulseRing 2.4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
}
