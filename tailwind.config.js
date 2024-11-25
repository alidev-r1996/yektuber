/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    return opacityValue !== undefined
      ? `rgba(var(${variableName}), ${opacityValue})`
      : `rgb(var(${variableName}))`;
  };
}


export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["class", '[class="dark-mode"]'],
  theme: {
    extend: {
      colors: {
        BRUNSWICK: {
          100: withOpacity("--color-BRUNSWICK-100"),
          200: withOpacity("--color-BRUNSWICK-200"),
          300: withOpacity("--color-BRUNSWICK-300"),
          400: withOpacity("--color-BRUNSWICK-400"),
          500: withOpacity("--color-BRUNSWICK-500"),
          600: withOpacity("--color-BRUNSWICK-600"),
          700: withOpacity("--color-BRUNSWICK-700"),
          800: withOpacity("--color-BRUNSWICK-800"),
          900: withOpacity("--color-BRUNSWICK-900"),
        },
        RISD: {
          100: withOpacity("--color-RISD-100"),
          200: withOpacity("--color-RISD-200"),
          300: withOpacity("--color-RISD-300"),
          400: withOpacity("--color-RISD-400"),
          500: withOpacity("--color-RISD-500"),
          600: withOpacity("--color-RISD-600"),
          700: withOpacity("--color-RISD-700"),
          800: withOpacity("--color-RISD-800"),
          900: withOpacity("--color-RISD-900"),
        },
        EERIE: {
          100: withOpacity("--color-EERIE-100"),
          200: withOpacity("--color-EERIE-200"),
          300: withOpacity("--color-EERIE-300"),
          400: withOpacity("--color-EERIE-400"),
          500: withOpacity("--color-EERIE-500"),
          600: withOpacity("--color-EERIE-600"),
          700: withOpacity("--color-EERIE-700"),
          800: withOpacity("--color-EERIE-800"),
          900: withOpacity("--color-EERIE-900"),
        },
        ISABELLINE: {
          100: withOpacity("--color-ISABELLINE-100"),
          200: withOpacity("--color-ISABELLINE-200"),
          300: withOpacity("--color-ISABELLINE-300"),
          400: withOpacity("--color-ISABELLINE-400"),
          500: withOpacity("--color-ISABELLINE-500"),
          600: withOpacity("--color-ISABELLINE-600"),
          700: withOpacity("--color-ISABELLINE-700"),
          800: withOpacity("--color-ISABELLINE-800"),
          900: withOpacity("--color-ISABELLINE-900"),
        },
        LIME: {
          100: withOpacity("--color-LIME-100"),
          200: withOpacity("--color-LIME-200"),
          300: withOpacity("--color-LIME-300"),
          400: withOpacity("--color-LIME-400"),
          500: withOpacity("--color-LIME-500"),
          600: withOpacity("--color-LIME-600"),
          700: withOpacity("--color-LIME-700"),
          800: withOpacity("--color-LIME-800"),
        },
        CADET: {
          100: withOpacity("--color-CADET-100"),
          200: withOpacity("--color-CADET-200"),
          300: withOpacity("--color-CADET-300"),
          400: withOpacity("--color-CADET-400"),
          500: withOpacity("--color-CADET-500"),
          600: withOpacity("--color-CADET-600"),
          700: withOpacity("--color-CADET-700"),
          800: withOpacity("--color-CADET-800"),
        },
      },
      container: {
        center: true,
      },
      screens: {
        xs: "400px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      fontSize: {
        xs: '0.625rem',
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      },
      fontFamily: {
        sans: ["var(--font-vazir)"],
      },
    },
    
  },
  plugins: [
    require('tailwindcss-3d')({ legacy: true }),
    require('@tailwindcss/forms')({
      strategy: 'class', // only generate global styles
    })
  ],
};
