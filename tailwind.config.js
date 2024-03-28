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
          accent: '#1A56DB', // Colore principale per entrambe le modalità
          background: '#F9FAFB', // Sfondo chiaro
          textPrimary: '#111827', // Testi h1, h2, etc. per la light mode
          textSecondary: '#6B7280', // Testi p, label, etc. per la light mode
          elevation: '#E5E7EB', // Sfondo per card, input, etc. per la light mode
          border: '#D1D5DB', // Bordo normale per la light mode
          borderFocus: '#1A56DB', // Bordo al focus per la light mode (usa l'accent color)
        },
        // Colori per la dark mode
        dark: {
          accent: '#0642C7', // Variante del colore principale per la dark mode
          background: '#1F2937', // Sfondo scuro
          textPrimary: '#F9FAFB', // Testi h1, h2, etc. per la dark mode
          textSecondary: '#D1D5DB', // Testi p, label, etc. per la dark mode
          elevation: '#374151', // Sfondo per card, input, etc. per la dark mode
          border: '#4B5563', // Bordo normale per la dark mode
          borderFocus: '#0642C7', // Bordo al focus per la dark mode (usa l'accent color)
        }
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
  darkMode: 'class',
}