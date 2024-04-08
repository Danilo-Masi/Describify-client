import { useEffect } from "react";
//React-router
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Pages
import HomePage from "./pages/HomePage";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";
import ErrorPage from "./pages/ErrorPage";

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
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<ErrorPage />} />
        {/* 
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/profile-update" element={<SigninPage modalOpen={true}/>} />
        */}
      </Routes>
    </BrowserRouter>
  );
}
