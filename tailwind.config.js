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
          accent: '#048353', // Colore principale
          background: '#FCFCFC', // Sfondo chiaro
          textPrimary: '#202020', // Testo primario
          textSecondary: '#646464', // Testo secondario
          elevation: '#F9F9F9', // Sfondo elavato
          elevation2: '#EFEFEF', // Sfondo elevato più scuro
          border: '#D8D8D8', // Bordo
          borderFocus: '#92CDAB', //Bordo selezionato (focus)
          borderRing: '#66B78B', //Contorno bordo (ring)
          disabled: '#E0E0E0', // Bottone, testo disabilitato
          softBlur: '0 0 15px 5px rgba(0, 0, 0, 0.05)'
        },
        // Colori per la dark mode
        dark: {
          accent: '#048353', // Colore principale
          background: '#121212', // Sfondo scuro
          textPrimary: '#EEE', // Testo primario
          textSecondary: '#B4B4B4', // Testo secondario
          elevation: '#191919', // Sfondo elevato
          elevation2: '#232323', // Sfondo elevato più chiaro
          border: '#3A3A3A', // Bordo
          borderFocus: '#056B44', //Bordo selezionato (focus)
          borderRing: '#008050', //Contorno bordo (ring)
          disabled: '#6E6E6E', // Bottone, testo disablitato
        }
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to top, #056B44, #FFFFFF )', //Gradient chiaro
        'dark-gradient': 'linear-gradient(to bottom, #101C15, #121212 )', //Gradient scuro
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
  darkMode: 'class',
}