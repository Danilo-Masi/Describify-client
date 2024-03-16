import { useEffect, useState } from "react";
//TextAPI
import { callOPENAIAPI } from "../services/textAPI";
//Components
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import GenerateForm from "../components/GenerateForm";
import GenerateOutput from "../components/GenerateOutput";
import Features from "../components/Features";
import Prices from "../components/Prices";
import Faqs from "../components/Faqs";

export default function HomePage() {

    const [accessToken, setAccessToken] = useState(false);
    const [emailUser, setEmailUser] = useState('');
    const [generate, setGenerate] = useState(false);
    const [description, setDescription] = useState("");

    useEffect(() => {
        try {
            const dataAccesso: string | null = sessionStorage.getItem('token');
            if (dataAccesso) {
                const tokenObject = JSON.parse(dataAccesso);
                const emailUtente: string = tokenObject.user?.email;
                setEmailUser(emailUtente);
                setAccessToken(true);
            }
        } catch (error) {
            console.error("Errore durante il caricamento del token d'accesso" + error);
            setAccessToken(false);
        }
    }, []);

    const handleGeneration = (brand: string, categoria: string, taglia: string, colore: string, tono: string) => {
        alert(`Brand: ${brand}, Categoria: ${categoria}, Taglia: ${taglia}, Colore: ${colore}, Tono: ${tono}`);
        //Validazione dei dati /***** DA IMPLEMENTARE ******/
        //Controllo che l'utente abbia token dispobibili per la generazione
        if (5 <= 0) {
            alert('Acquista nuovi token per generare le tue caption');
            return;
        }
        //Chiamata all'API per la generazione del testo //TESTO DI PROVA//
        const descrizioneTest = `${categoria} ${brand}, colore ${colore}, taglia ${taglia}, usato ma in ottime condizioni, per altre info o foto scrivetemi in privato.`;
        //Se la generazione ha avuto risultato positivo riduco i token, setto la descrizione, e apro il nuovo panel
        setDescription(descrizioneTest);
        setGenerate(true);
    }

    const handleRegenerate = () => {
        setGenerate(false);
    }

    return (
        <Layout padding="px-0" mdFlexOrientation="md:flex-col" mdHeight="md:h-auto">
            <Navbar token={accessToken} emailUser={emailUser} />
            {/* Home */}
            <div className="w-full h-auto flex flex-wrap items-center justify-start">
                {/* Box Homepage */}
                <div className="w-full md:w-1/2 h-[88svh] flex flex-col items-start justify-start md:justify-center p-10 gap-3 bg-blue-700">
                    <h1 className="text-white text-xl font-bold">Describify</h1>
                    <h1 className="text-white text-5xl font-bold">Explore the world’s leading design portfolios.</h1>
                    <p className="text-gray-300 text-md">Millions of designers and agencies around the world showcase their portfolio work on Flowbite - the home to the world’s best design and creative professionals.</p>
                </div>
                {/* Form generazione */}
                <div className="w-full md:w-1/2 h-[88svh] flex items-center justify-center p-5 bg-gray-100">
                    {!generate ? <GenerateForm onGeneration={handleGeneration} accessToken={accessToken} /> : <GenerateOutput description={description} onRegenerate={handleRegenerate} />}
                </div>
            </div>
            <Features />
            <Prices />
            <Faqs />
        </Layout>
    )
}
