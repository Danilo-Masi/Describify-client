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
          background: '#F9F9F9', // Sfondo chiaro
          textPrimary: '#202020', // Testi h1, h2, etc. per la light mode
          textSecondary: '#646464', // Testi p, label, etc. per la light mode
          elevation: '#E8E8E8', // Sfondo per card, input, etc. per la light mode
          border: '#CECECE', // Bordo normale per la light mode
          borderFocus: '#BBB',
          disabled: '#8D8D8D', // Bordo al focus per la light mode (usa l'accent color)
          softBlur: '0 0 15px 5px rgba(0, 0, 0, 0.05)'
        },
        // Colori per la dark mode
        dark: {
          accent: '#048353', // Colore principale
          background: '#121212', // Sfondo scuro
          textPrimary: '#EEE', // Testo primario
          textSecondary: '#B4B4B4', // Testi secondario
          elevation: '#191919', // Sfondo elevato
          elevation2: '#232323', // Sfondo elevato più chiaro
          border: '#3A3A3A', // Bordo elementi non interattivi
          borderFocus: '#056B44', //Bordo elemento focus
          borderRing: '#008050', //Bordo elemento selezionato
          disabled: '#6E6E6E', // Bottone, testo disablitato
        }
      },
      backgroundImage: {
        'dark-gradient': 'linear-gradient(to bottom, #101C15, #121212 )',
        'custom-gradient': 'linear-gradient(to top, #056B44, #FFFFFF )',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
  darkMode: 'class',
}