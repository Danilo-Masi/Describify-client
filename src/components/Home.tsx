import { useState } from "react";
import axios from "axios";
//Components
import GenerateForm from "../components/GenerateForm";
import GenerateOutput from "../components/GenerateOutput";
import SkeletonForm from "./SkeletonForm";

interface HomeProps {
    accessToken: boolean;
}

export default function Home({ accessToken }: HomeProps) {

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
        }
    }

    return (
        <div className="w-full h-auto flex flex-wrap items-center justify-start">
            {/* Box Homepage */}
            <div className="w-full md:w-1/2 h-[88svh] flex flex-col items-start justify-start md:justify-center p-10 gap-3 bg-blue-700">
                <h1 className="text-white text-xl font-bold">Describify</h1>
                <h1 className="text-white text-5xl font-bold">Explore the world’s leading design portfolios.</h1>
                <p className="text-gray-300 text-md">Millions of designers and agencies around the world showcase their portfolio work on Flowbite - the home to the world’s best design and creative professionals.</p>
            </div>
            {/* Form generazione */}
            <div className="w-full md:w-1/2 h-[88svh] flex items-center justify-center p-5">
                {/************ DA IMPLEMENTARE  *************/}
                {isLoading ?
                    <SkeletonForm />
                    : !generate
                        ? <GenerateForm onGeneration={handleGeneration} accessToken={accessToken} />
                        : <GenerateOutput onRegenerate={() => setGenerate(false)} description={description} />
                }
            </div>
        </div>
    );
}
