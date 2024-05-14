import { useEffect, useState } from "react";
//React-router
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Cookie-consent
import { useCookies } from "react-cookie";
//Utilities
import { useLanguage } from "./utilities/useLanguage";
//Pages
import HomePage from "./pages/HomePage";
import LegalPage from "./pages/LegalPage";
import ErrorPage from "./pages/ErrorPage";
//Components
import ModalCookies from "./components/ModalCookies";
import WaitlistModal from "./components/WaitlistModal";

export default function App() {

  const language = useLanguage();
  const [cookies] = useCookies(['userCookieConsent']);
  const [cookieModalOpen, setCookieModalOpen] = useState(true);
  const [modalWaitListOpen, setModalWaitListOpen] = useState(false);

  useEffect(() => {
    if (cookies.userCookieConsent === undefined || cookies.userCookieConsent === null) {
      setCookieModalOpen(true);
    } else {
      setCookieModalOpen(false);
    }
  }, [cookies.userCookieConsent]);

  useEffect(() => {
    //Modica la lingua del file index.html
    document.documentElement.lang = language;
    // Carica i font dinamicamente
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap';
    link.rel = 'stylesheet';
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  }, [language]);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage setModalWaitListOpen={setModalWaitListOpen} />} />
        <Route path="/" element={<HomePage setModalWaitListOpen={setModalWaitListOpen} />} />
        <Route path="/terms-conditions" element={<LegalPage setModalWaitListOpen={setModalWaitListOpen} />} />
        <Route path="/privacy-policy" element={<LegalPage setModalWaitListOpen={setModalWaitListOpen} />} />
        <Route path="/cookie-policy" element={<LegalPage setModalWaitListOpen={setModalWaitListOpen} />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      {cookieModalOpen && <ModalCookies setCookieModalOpen={setCookieModalOpen} />}
      {modalWaitListOpen && <WaitlistModal onClose={() => setModalWaitListOpen(false)} />}
    </BrowserRouter>
  );
}
