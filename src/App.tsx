import { useState } from "react";
//Components
import Navbar from "./components/Navbar";
import AccessForm from "./components/AccessForm";
import HomePage from "./pages/HomePage";

export default function App() {

  const [isSigninOpen, setSigninOpen] = useState(false);
  const [isSignupOpen, setSignupOpen] = useState(false);

  return (
    <>
      <Navbar onSignin={() => { setSigninOpen(true), setSignupOpen(false) }} onSignup={() => { setSignupOpen(true), setSigninOpen(false) }} />
      {isSigninOpen || isSignupOpen ? <AccessForm isSigninOpen={isSigninOpen} isSignupOpen={isSignupOpen} /> : <HomePage />}
    </>
  )
}
