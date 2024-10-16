// React
import { useEffect, useState } from "react";
// React-router
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Utilities
import { useLanguage } from "./utilities/useLanguage";
// Pages
import HomePage from "./pages/HomePage";
import LegalPage from "./pages/LegalPage";
import ErrorPage from "./pages/ErrorPage";
import ProductPage from "./pages/ProductPage";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";
// Components
import ModalCookies from "./components/ModalCookies";
import WaitlistModal from "./components/WaitlistModal";

export default function App() {

  const language = useLanguage();
  const [theme, setTheme] = useState<string>(localStorage.getItem("theme") || "dark");
  const [isCookieModalOpen, setCookieModalOpen] = useState<boolean>(false);
  const [isWaitlistModalOpen, setWaitlistModalOpen] = useState<boolean>(false);

  useEffect(() => {
    // Carica i font dinamicamente
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap';
    link.rel = 'stylesheet';
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
    // Verifica se il banner dei cookie è già stato visualizzato
    if (localStorage.getItem('cookieBanner')) {
      setCookieModalOpen(false);
      // LogLib analytics
      const script = document.createElement('script');
      script.src = "https://cdn.jsdelivr.net/npm/@loglib/tracker@latest/dist/index.global.js";
      script.setAttribute('data-id', 'describify');
      script.defer = true;
      document.head.appendChild(script);
    } else {
      setCookieModalOpen(true);
    }
  }, []);

  // Effetto per modicare la lingua del file index.html
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  // Effetto per modificare il tema della piattaforma
  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.remove('dark');
    } else {
      document.body.classList.add('dark');
    }
  }, [theme]);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage setModalWaitListOpen={setWaitlistModalOpen} />} />
        <Route path="/" element={<HomePage setModalWaitListOpen={setWaitlistModalOpen} />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/terms-and-conditions" element={<LegalPage setModalWaitListOpen={setWaitlistModalOpen} />} />
        <Route path="/privacy-policy" element={<LegalPage setModalWaitListOpen={setWaitlistModalOpen} />} />
        <Route path="/cookie-policy" element={<LegalPage setModalWaitListOpen={setWaitlistModalOpen} />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      {isCookieModalOpen && <ModalCookies setCookieModalOpen={setCookieModalOpen} />}
      {isWaitlistModalOpen && <WaitlistModal onClose={() => setWaitlistModalOpen(false)} />}
    </BrowserRouter>
  );
}
