import { useState } from "react";
//Components
import Layout from "../components/Layout";
import Form from "../components/Form";
import GenerateText from "../components/GenerateText";

export default function GeneratePage() {

    const [generate, setGenerate] = useState(false);
    const [description, setDescription] = useState("");

    const handleGeneration = (brand: string, categoria: string, taglia: string, colore: string, tono: string) => {
        alert(`Brand: ${brand}, Categoria: ${categoria}, Taglia: ${taglia}, Colore: ${colore}, Tono: ${tono}`);
        /**************** CONTROLLI SUI VALORI PASSATI ******************/
        /**************** GENERAZIONE DELLA CAPTION *********************/
        const descrizioneTest = `${categoria} ${brand}, colore ${colore}, taglia ${taglia}, usato ma in ottime condizioni, per altre info o foto scrivetemi in privato.`;
        setDescription(descrizioneTest);
        setGenerate(true);
    }

    console.log(generate);

    return (
        <Layout>
            {!generate ? <Form onGeneration={handleGeneration} /> : <GenerateText description={description} />}
        </Layout>
    )
}
