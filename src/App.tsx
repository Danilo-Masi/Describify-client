import { useEffect, useState } from "react";
//React-router
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Pages
import HomePage from "./pages/HomePage";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";
import ErrorPage from "./pages/ErrorPage";
import ModalCookies from "./components/ModalCookies";

export default function App() {

  const [cookiesConsent, setCookiesConsent] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('tema');
    if (savedTheme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, []);

  useEffect(() => {
    const consensoCookies = localStorage.getItem('cookiesConsent');
    setCookiesConsent(!!consensoCookies);
  }, []);

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
      {!cookiesConsent && <ModalCookies />}
    </BrowserRouter>
  );
}
