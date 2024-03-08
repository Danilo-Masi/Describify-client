import { useState } from "react";
import ReactModal from 'react-modal';
//Components

import Navbar from "./components/Navbar";
import GeneratePage from "./pages/GeneratePage";
import HomePage from "./pages/HomePage";
import Login from "./components/Login";
import Signup from './components/Signup';

export default function App() {

  const [modalOpen, setModalOpen] = useState(false);
  const [logged, setLogged] = useState(false);
  const [notSignup, setNotSignup] = useState(false);

  const handleLogin = () => {
    //Metodi per l'accesso
    setLogged(true);
    setModalOpen(false);
  }

  return (
    <>
      <Navbar onClickCta={() => setModalOpen(true)} />
      {logged ? <GeneratePage /> : <HomePage />}
      <ReactModal
        ariaHideApp={false}
        className="w-full h-full items-center justify-center"
        isOpen={modalOpen}>
        {notSignup ? <Signup /> : <Login onClick={handleLogin} onNotAccount={() => setNotSignup(true)} />}
      </ReactModal>
    </>
  )
}
