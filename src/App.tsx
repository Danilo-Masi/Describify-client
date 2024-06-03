import { useEffect, useState } from "react";
//React-router
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Utilities
import { useLanguage } from "./utilities/useLanguage";
//Pages
import HomePage from "./pages/HomePage";
import LegalPage from "./pages/LegalPage";
import ErrorPage from "./pages/ErrorPage";
//Components
import ModalCookies from "./components/ModalCookies";
import WaitlistModal from "./components/WaitlistModal";
import AlertMessage from "./components/AlertMessage";
import ProductPage from "./pages/ProductPage";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";

export default function App() {

  const language = useLanguage();
  const [isCookieModalOpen, setCookieModalOpen] = useState(false);
  const [isWaitlistModalOpen, setWaitlistModalOpen] = useState(false);
  const [isAlertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  useEffect(() => {
    // Verifica se il banner dei cookie è già stato visualizzato
    if (localStorage.getItem('cookieBanner')) {
      setCookieModalOpen(false);
      // Carica Fathom Analytics 
      const script = document.createElement('script');
      script.src = "https://cdn.usefathom.com/script.js";
      script.setAttribute('data-site', 'FHKBQKIP');
      script.setAttribute('data-spa', 'auto');
      script.defer = true;
      document.head.appendChild(script);
    } else {
      setCookieModalOpen(true);
    }
  }, []);

  useEffect(() => {
    // Carica i font dinamicamente
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap';
    link.rel = 'stylesheet';
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  }, []);

  useEffect(() => {
    // Modica la lingua del file index.html
    document.documentElement.lang = language;
  }, [language]);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage setModalWaitListOpen={setWaitlistModalOpen} setAlertOpen={setAlertOpen} setAlertMessage={setAlertMessage} />} />
        <Route path="/" element={<HomePage setModalWaitListOpen={setWaitlistModalOpen} setAlertOpen={setAlertOpen} setAlertMessage={setAlertMessage} />} />
        {/* 
        <Route path="/product" element={<ProductPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />
        */}
        <Route path="/terms-and-conditions" element={<LegalPage setModalWaitListOpen={setWaitlistModalOpen} />} />
        <Route path="/privacy-policy" element={<LegalPage setModalWaitListOpen={setWaitlistModalOpen} />} />
        <Route path="/cookie-policy" element={<LegalPage setModalWaitListOpen={setWaitlistModalOpen} />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      {isCookieModalOpen && <ModalCookies setCookieModalOpen={setCookieModalOpen} />}
      {isWaitlistModalOpen && <WaitlistModal onClose={() => setWaitlistModalOpen(false)} setAlertOpen={setAlertOpen} setAlertMessage={setAlertMessage} />}
      {isAlertOpen && <AlertMessage message={alertMessage} setAlertOpen={setAlertOpen} />}
    </BrowserRouter>
  );
}
