import { useState } from "react";
//Components
import Navbar from "./components/Navbar";
import AccessPage from "./pages/AccessPage";
import HomePage from "./pages/HomePage";
import GeneratePage from "./pages/GeneratePage";

export default function App() {

  const [isSigninOpen, setSigninOpen] = useState(false);
  const [isSignupOpen, setSignupOpen] = useState(false);

  return (
    <>
      <Navbar
        onSignin={() => { setSigninOpen(true), setSignupOpen(false) }}
        onSignup={() => { setSignupOpen(true), setSigninOpen(false) }} />
      {isSigninOpen || isSignupOpen
        ? <AccessPage
          isSigninOpen={isSigninOpen}
          isSignupOpen={isSignupOpen} />
        : <HomePage />
      }
    </>
  )
}
