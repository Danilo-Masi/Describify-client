import { useState } from "react";
//Axios
import axios from "axios";
//Components
import GenerateForm from "../components/GenerateForm";
import GenerateOutput from "../components/GenerateOutput";
import SkeletonForm from "./SkeletonForm";

interface HomeProps {
    id: string;
}

export default function Home({ id }: HomeProps) {

    const [isLoading, setLoading] = useState(false);
    const [tokenAvaible, setTokenAvabile] = useState(5);
    const [generate, setGenerate] = useState(false);
    const [description, setDescription] = useState(" ");

    const handleGeneration = async (brand: string, categoria: string, taglia: string, colore: string) => {
        //Validazione dei dati /***** DA IMPLEMENTARE ******/
        if (brand === '' || categoria === '' || taglia === '' || colore === '') {
            alert('Inserisci tutti i pramentri prima di procedere');
            return;
        }
        //Controllo che l'utente abbia token dispobibili per la generazione /***** DA IMPLEMENTARE ******/
        if (tokenAvaible <= 0) {
            alert('Acquista nuovi token per generare le tue caption');
            return;
        }
        //Prompt passato al server
        const prompt = `Brand: ${brand}, Categoria: ${categoria}, Taglia: ${taglia}, Colore: ${colore}`;

        try {
            setLoading(true);
            const res: any = await axios.post("http://localhost:3000/chat", { prompt });
            console.log(res.data.descrizione);
            setTokenAvabile(tokenAvaible - 1);
            setDescription(res.data.descrizione);
            setLoading(false);
            setGenerate(true);
        } catch (error) {
            console.error("Errore durante la generazione:", error);
            alert("Si è verificato un errore, riprova.");
            setLoading(false);
        }
    }

    return (
        <div className="w-full md:w-[90%] h-auto md:h-[88svh] flex flex-wrap items-center justify-center" id={id}>
            {/* Form generazione */}
            <div className="w-full h-[88svh] flex items-center justify-center p-5">
                {/************ DA IMPLEMENTARE  *************/}
                {isLoading ?
                    <SkeletonForm />
                    : !generate
                        ? <GenerateForm onGeneration={handleGeneration} />
                        : <GenerateOutput onRegenerate={() => setGenerate(false)} description={description} />
                }
            </div>
        </div>
    );
}
