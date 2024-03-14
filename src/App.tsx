import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Pages
import HomePage from "./pages/HomePage";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";

export default function App() {

  const [token, setToken] = useState(false);

  if(token) {
    sessionStorage.setItem('token', JSON.stringify(token))
  }

  useEffect(() => {
    const storedToken = sessionStorage.getItem('token');
    if(storedToken !== null) {
      let data = JSON.parse(storedToken);
      setToken(data);
    }
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage token={token}/>} />
          <Route path="/signin" element={<SigninPage setToken={setToken}/>} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}
