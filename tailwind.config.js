/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        // Colori per la light mode
        custom: {
          accent: '#C1121F', // Colore primario
          accentAlternativo: '#3EEDE0', // Colore alternativo 
          background: '#FAFAFA', // Sfondo chiaro (0)
          elevation: '#F7F7F7', // Sfondo elavato (1)
          elevation2: '#F3F3F3', //Sfondo elevato2 (2)
          elevation3: '#EAEAEA', //Sfondo elevato3 (3)
          elevation4: '#E2E2E2', //Sfondo elevato4 (4)
          disabled: '#DADADA', //Disabilitato (5)
          borderColor: '#F6B7AF', //Bordo normale colorato (6)
          borderGray: '#D2D2D2', //Bordo normale grigio (6)
          borderFocusColor: '#EDA29B', //Border focus colorato (7)
          borderFocusGray: '#C7C7C7', //Border focus grigio (7)
          borderRingColor: '#E4887F', //Border ring colorato (8)
          borderRingGray: '#B3B3B3', //Border ring grigio (8)
          solidColor: '#C1121F', //Colore solido (9) //Per i bottoni
          solidGray: '#858585', //Grigio solido (9) //Per i bottoni
          hoverColor: '#B0000C', //Hover colorato (10)
          hoverGray: '#7A7A7A', //Hover grigio (10)
          textSecondaryColor: '#C71D25', // Testo secondario colorato (11)
          textSecondaryGray: '#5C5C5C', //Testo secondario grigio (11)
          textPrimaryColor: '#651716', // Testo primario colorato (12)
          textPrimaryGray: '#202020', //Testo primario grigio (12)
        },
        // Colori per la dark mode
        dark: {
          accent: '#C1121F', // Colore primario
          accentAlternativo: '#3EEDE0', // Colore alternativo 
          background: '#181818', // Sfondo scuro (0)
          elevation: '#202020', // Sfondo elavato (1)
          elevation2: '#1F1F1F', //Sfondo elevato2 (2)
          elevation3: '#272727', //Sfondo elevato3 (3)
          elevation4: '#2D2D2D', //Sfondo elevato4 (4)
          disabled: '#343434', //Disabilitato (5)
          borderColor: '#82040F', //Bordo normale colorato (6)
          borderGray: '#3C3C3C', //Bordo normale grigio (6)
          borderFocusColor: '#9D191D', //Border focus colorato (7)
          borderFocusGray: '#494949', //Border focus grigio (7)
          borderRingColor: '#CB2228', //Border ring colorato (8)
          borderRingGray: '#606060', //Border ring grigio (8)
          solidColor: '#C1121F', //Colore solido (9) //Per i bottoni
          solidGray: '#6E6E6E', //Grigio solido (9) //Per i bottoni
          hoverColor: '#A32022', //Hover colorato (10)
          hoverGray: '#7B7B7B', //Hover grigio (10)
          textSecondaryColor: '#FF8C81', // Testo secondario colorato (11)
          textSecondaryGray: '#B4B4B4', //Testo secondario grigio (11)
          textPrimaryColor: '#FFCFC8', // Testo primario colorato (12)
          textPrimaryGray: '#EEE', //Testo primario grigio (12)
        }
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom, #D65A61, #FAFAFA, #FAFAFA, #FAFAFA, #FAFAFA)', //Gradient chiaro
        'dark-gradient': 'linear-gradient(to bottom, #271513, #181818, #181818, #271513, #181818)', //Gradient scuro
      }
    },
  },
  plugins: [
    require('flowbite/plugin')({
      charts: true,
    }),
  ],
  darkMode: 'class',
}