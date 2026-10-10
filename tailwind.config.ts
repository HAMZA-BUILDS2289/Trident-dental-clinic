import type { Config } from "tailwindcss";

// Trident Dental Clinic brand palette (from the logo):
//  primary blue #0B4DA2 · deep navy #082C5E · ice blue #00AEEF · gold #C8A95B · background #F7FAFF
// Token names (ink / aqua / ocean) are kept so every component picks up the brand colours automatically.
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#082C5E",
        aqua: {
          50: "#EAF8FE",
          100: "#CDEFFC",
          200: "#99DEF9",
          300: "#4DC8F4",
          400: "#00AEEF",
          500: "#0092CC",
          600: "#0B6FB8",
          700: "#0B4DA2",
        },
        ocean: {
          500: "#1F6AC4",
          600: "#0B4DA2",
          700: "#0A3F85",
          800: "#072650",
          900: "#051C3E",
        },
        gold: {
          50: "#FBF7EA",
          100: "#F5EBC8",
          200: "#EBDB9F",
          300: "#DEC879",
          400: "#C8A95B",
          500: "#B08F3F",
          600: "#8F7230",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 60px -10px rgba(200,169,91,0.6)",
        glowblue: "0 0 70px -10px rgba(0,174,239,0.55)",
        glass: "0 8px 40px rgba(8,44,94,0.14)",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseRing: {
          "0%": { transform: "scale(1)", opacity: "0.6" },
          "100%": { transform: "scale(1.9)", opacity: "0" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        kenburns: {
          "0%": { transform: "scale(1.02) translate3d(0,0,0)" },
          "100%": { transform: "scale(1.16) translate3d(-2%,-1.5%,0)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        marquee: "marquee 40s linear infinite",
        pulseRing: "pulseRing 2s ease-out infinite",
        shimmer: "shimmer 4s linear infinite",
        kenburns: "kenburns 9s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
