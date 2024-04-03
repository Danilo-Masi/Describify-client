import { useEffect } from "react";
//React-router
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Pages
import HomePage from "./pages/HomePage";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";
import ConfirmEmailPage from "./pages/ConfirmEmailPage";

export default function App() {

  useEffect(() => {
    const savedTheme = localStorage.getItem('tema');
    if (savedTheme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/confirmEmail" element={<ConfirmEmailPage />} />
      </Routes>
    </BrowserRouter>
  );
}
