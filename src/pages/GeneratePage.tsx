import { useState } from "react";
//Components
import Layout from "../components/Layout";
import GenerateForm from "../components/GenerateForm";
import GenerateOutput from "../components/GenerateOutput";

export default function GeneratePage() {

    const [generate, setGenerate] = useState(false);
    const [description, setDescription] = useState("");
    const [tokenAvailable, setTokenAvailable] = useState(2); //Dato che andrà preso dal DB

    const handleGeneration = (brand: string, categoria: string, taglia: string, colore: string, tono: string) => {
        alert(`Brand: ${brand}, Categoria: ${categoria}, Taglia: ${taglia}, Colore: ${colore}, Tono: ${tono}`);
        //Controllo sui valori inseriti dall'utente
        if (brand === '' || categoria === '' || taglia === '' || colore === '') {
            alert('Compila tutti i campi obbligatori prima di procedere');
            return;
        }
        //Controllo che l'utente abbia token dispobibili per la generazione
        if (tokenAvailable <= 0) {
            alert('Acquista nuovi token per generare le tue caption');
            return;
        }
        //Chiamata all'API per la generazione del testo //TESTO DI PROVA//
        const descrizioneTest = `${categoria} ${brand}, colore ${colore}, taglia ${taglia}, usato ma in ottime condizioni, per altre info o foto scrivetemi in privato.`;
        //Se la generazione ha avuto risultato positivo riduco i token, setto la descrizione, e apro il nuovo panel
        setTokenAvailable(tokenAvailable - 1);
        setDescription(descrizioneTest);
        setGenerate(true);
    }

    const handleRegenerate = () => {
        setGenerate(false);
    }

    return (
        <Layout padding="px-5">
            {!generate ? <GenerateForm onGeneration={handleGeneration} /> : <GenerateOutput description={description} onRegenerate={handleRegenerate} />}
        </Layout>
    )
}
