import { BrowserRouter, Routes, Route } from "react-router-dom";
//Pages
import HomePage from "./pages/HomePage";
import GeneratePage from "./pages/GeneratePage";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/generate" element={<GeneratePage />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}
