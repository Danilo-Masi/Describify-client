import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

// Tenta di recuperare la lingua dal localStorage
const language = localStorage.getItem('language') || 'en'; // 'en' è il fallback

i18n
  .use(Backend) // Utilizza il backend HTTP per caricare le risorse di i18n
  .use(initReactI18next) // Passa i18n a React i18next
  .init({
    lng: language, // Imposta la lingua recuperata o il fallback
    fallbackLng: 'en', // Lingua di fallback
    debug: false, // Abilita i log di debug in console
    interpolation: {
      escapeValue: false, // Non necessario per React poiché sfugge già di default
    }
  });

export default i18n;
