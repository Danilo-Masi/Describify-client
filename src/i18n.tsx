import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Tenta di recuperare la lingua dal localStorage
const language = localStorage.getItem('language') || 'it'; // 'it' è il fallback

i18n
  .use(Backend) // Utilizza il backend HTTP per caricare le risorse di i18n
  .use(LanguageDetector) // Aggiunto: utilizza il detector della lingua
  .use(initReactI18next) // Passa i18n a React i18next
  .init({
    lng: language, // Imposta la lingua recuperata o il fallback
    fallbackLng: 'it', // Lingua di fallback
    debug: false, // Abilita i log di debug in console
    detection: {
      order: ['localStorage', 'navigator'], // Aggiunto: ordine dei metodi di rilevamento
    }
  });

export default i18n;
