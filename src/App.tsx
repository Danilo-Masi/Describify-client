import { useEffect, useState } from "react";
//React-router
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Cookie-consent
import { Cookies, useCookies } from "react-cookie";
//Pages
import HomePage from "./pages/HomePage";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";
import ErrorPage from "./pages/ErrorPage";
import ModalCookies from "./components/ModalCookies";

export default function App() {

  const [cookies] = useCookies(['userCookieConsent']);
  const [cookieModalOpen, setCookieModalOpen] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('tema');
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
        <Route index element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<ErrorPage />} />
        {/* 
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/profile-update" element={<SigninPage modalOpen={true}/>} />
        */}
      </Routes>
      {cookieModalOpen && <ModalCookies setCookieModalOpen={setCookieModalOpen} />}
    </BrowserRouter>
  );
}
