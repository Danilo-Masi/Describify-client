import { useEffect, useState } from "react";
//React-router
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Cookie-consent
import { Cookies, useCookies } from "react-cookie";
//Pages
import HomePage from "./pages/HomePage";
import LegalPage from "./pages/LegalPage";
import ErrorPage from "./pages/ErrorPage";
import ModalCookies from "./components/ModalCookies";
import WaitlistModal from "./components/WaitlistModal";

export default function App() {

  const [cookies] = useCookies(['userCookieConsent']);
  const [cookieModalOpen, setCookieModalOpen] = useState(true);
  const [modalWaitListOpen, setModalWaitListOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('tema') || 'dark';
    if (savedTheme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, []);

  useEffect(() => {
    if (cookies.userCookieConsent !== undefined) {
      setCookieModalOpen(false);
    } else {
      setCookieModalOpen(true);
    }
  }, [cookies.userCookieConsent]);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage setModalWaitListOpen={setModalWaitListOpen} />} />
        <Route path="/" element={<HomePage setModalWaitListOpen={setModalWaitListOpen} />} />
        <Route path="/terms-&-conditions" element={<LegalPage setModalWaitListOpen={setModalWaitListOpen} />} />
        <Route path="/privacy-policy" element={<LegalPage setModalWaitListOpen={setModalWaitListOpen} />} />
        <Route path="/cookie-policy" element={<LegalPage setModalWaitListOpen={setModalWaitListOpen} />} />
        <Route path="*" element={<ErrorPage />} />
        {/* 
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/profile-update" element={<SigninPage modalOpen={true}/>} />
        */}
      </Routes>
      {cookieModalOpen && <ModalCookies setCookieModalOpen={setCookieModalOpen} />}
      {modalWaitListOpen && <WaitlistModal onClose={() => setModalWaitListOpen(false)} />}
    </BrowserRouter>
  );
}
