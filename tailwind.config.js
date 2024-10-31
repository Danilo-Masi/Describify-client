const svgToDataUri = require("mini-svg-data-uri");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      //Font
      fontFamily: {
        "inter": ['Inter', 'sans-serif'],
      },
      colors: {
        // Colori per la light mode
        custom: {
          accent: '#8E64FF', // Colore primario
          accentAlternativo: '#f92672', // Colore alternativo 
          background: '#FAFAFA', // Sfondo chiaro (0)
          elevation: '#F6F7FA', // Sfondo elavato (1)
          elevation2: '#F2F3F9', //Sfondo elevato2 (2)
          elevation3: '#E8E9F4', //Sfondo elevato3 (3)
          elevation4: '#DFE1EF', //Sfondo elevato4 (4)
          disabled: '#D7D9EB', //Disabilitato (5)
          borderColor: '#CAC1FF', //Bordo normale colorato (6)
          borderGray: '#CED0E6', //Bordo normale grigio (6)
          borderFocusColor: '#B8ABFA', //Border focus colorato (7)
          borderFocusGray: '#C3C5DF', //Border focus grigio (7)
          borderRingColor: '#A28EF4', //Border ring colorato (8)
          borderRingGray: '#AFB2CD', //Border ring grigio (8)
          solidColor: '#8E64FF', //Colore solido (9) //Per i bottoni
          solidGray: '#82849E', //Grigio solido (9) //Per i bottoni
          hoverColor: '#8256F0', //Hover colorato (10)
          hoverGray: '#787A93', //Hover grigio (10)
          textSecondaryColor: '#673CC6', // Testo secondario colorato (11)
          textSecondaryGray: '#5A5C74', //Testo secondario grigio (11)
          textPrimaryColor: '#361F6B', // Testo primario colorato (12)
          textPrimaryGray: '#1D1E30', //Testo primario grigio (12)
        },
        // Colori per la dark mode
        dark: {
          accent: '#8E64FF', // Colore primario
          accentAlternativo: '#f92672', // Colore alternativo 
          background: '#010314', // Sfondo scuro (0)
          elevation: '#030311', // Sfondo elavato (1)
          elevation2: '#131427', //Sfondo elevato2 (2)
          elevation3: '#1E1F33', //Sfondo elevato3 (3)
          elevation4: '#25263C', //Sfondo elevato4 (4)
          disabled: '#2D2E44', //Disabilitato (5)
          borderColor: '#483284', //Bordo normale colorato (6)
          borderGray: '#35374D', //Bordo normale grigio (6)
          borderFocusColor: '#573F9B', //Border focus colorato (7)
          borderFocusGray: '#43455C', //Border focus grigio (7)
          borderRingColor: '#6C4FBF', //Border ring colorato (8)
          borderRingGray: '#5C5E76', //Border ring grigio (8)
          solidColor: '#8E64FF', //Colore solido (9) //Per i bottoni
          solidGray: '#696C84', //Grigio solido (9) //Per i bottoni
          hoverColor: '#6D43CC', //Hover colorato (10)
          hoverGray: '#777992', //Hover grigio (10)
          textSecondaryColor: '#B9A2FF', // Testo secondario colorato (11)
          textSecondaryGray: '#AFB1CC', //Testo secondario grigio (11)
          textPrimaryColor: '#E1DCFF', // Testo primario colorato (12)
          textPrimaryGray: '#EAEDFF', //Testo primario grigio (12)
        }
      },
      backgroundImage: {
        'dark-gradient': 'radial-gradient(40% 40% at 50% 50%, #573F9B 5%, #010314 100%)',
        'bg-grid': 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 32 32\' width=\'32\' height=\'32\' fill=\'none\' stroke=\'%23010314\'%3E%3Cpath d=\'M0 .5H31.5V32\'/%3E%3C/svg%3E")',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')({
      charts: true,
    }),
    function ({ addUtilities }) {
      const newUtilities = {
        '.bg-grid': {
          backgroundImage: `url("${svgToDataUri(
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="#1E1F33"><path d="M0 .5H31.5V32"/></svg>`
          )}")`,
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};

