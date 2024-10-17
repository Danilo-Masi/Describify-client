// React
import { Dispatch, SetStateAction, useEffect, useState } from "react"
// Axios
import axios from 'axios';
// Flowbite-React
import { FileInput, Label } from "flowbite-react";
import { CloseIcon } from "./SvgComponents";
import ActiveButton from "./ActiveButton";

// Url del server di produzione
const SERVER_URL = 'http://localhost:3000';
// Url del sever di rilascio
//const SERVER_URL = import.meta.env.VITE_REACT_APP_SERVER_URL;

interface ProductImageProps {
    fileSelected: File | null;
    setFileSelected: Dispatch<SetStateAction<File | null>>;
    setImageSelected: Dispatch<SetStateAction<boolean>>;
}

export default function ProductImage({ fileSelected, setImageSelected, setFileSelected }: ProductImageProps) {

    const [imageUrl, setImageUrl] = useState<string | null>(null); // Stato per l'URL dell'immagine

    // Funzione per selezionare il file dal file system
    const handleSelectFile = (e: any) => {
        console.log(e.target.files);
        setFileSelected(e.target.files[0]);
    }

    // Effetto per creare un URL temporaneo dell'immagine
    useEffect(() => {
        if (fileSelected) {
            const url = URL.createObjectURL(fileSelected);
            setImageUrl(url);
        }

        // Cleanup: revoca l'URL quando il componente si smonta o cambia il file
        return () => {
            if (imageUrl) {
                URL.revokeObjectURL(imageUrl);
            }
        };
    }, [fileSelected]);

    // Funzione che fa la chiamata al backend e da li le API di OPENAI per analizzare l'immagine
    const handleAnalyzeImage = async () => {
        if (!fileSelected) {
            console.error("Nessun file selezionato");
            return;
        }

        const formData = new FormData();
        formData.append('image', fileSelected);

        try {
            const response = await axios.post(`${SERVER_URL}/analyze-image`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            if (response.status === 200) {
                console.log("Risultato analisi: ", response.data);

                // Supponiamo che response.data contenga il testo
                const analysisResult = response.data.responseText; // Adatta questa parte secondo la tua risposta

                // Estrai le informazioni
                const categoriaMatch = analysisResult.match(/categoria:\s*([^,]+)/);
                const coloreMatch = analysisResult.match(/colore:\s*([^,]+)/);
                const marchioMatch = analysisResult.match(/marchio:\s*([^,]+)/);

                // Ottieni i valori se trovati
                const categoria = categoriaMatch ? categoriaMatch[1].trim() : 'N/A';
                const colore = coloreMatch ? coloreMatch[1].trim() : 'N/A';
                const marchio = marchioMatch ? marchioMatch[1].trim() : 'N/A';

                // Log delle informazioni in un formato più conciso
                console.log(`Categoria: ${categoria}`);
                console.log(`Colore: ${colore}`);
                console.log(`Marchio: ${marchio}`);

                // GESTISCI RISPOSTA DELL'ANALISI DELL'IMMAGINE
                setImageSelected(false);
            }
        } catch (error: any) {
            console.error(`Errore CLIENT: ${error.message}`);
        }
    };

    return (
        <div className="w-full h-full flex flex-col items-center justify-center rounded-lg p-5 gap-y-5 bg-custom-elevation4 dark:bg-dark-elevation4 border border-custom-borderGray dark:border-dark-borderGray">
            {fileSelected === null
                ? (
                    <Label
                        htmlFor="dropzone-file"
                        className="flex h-full w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600" >
                        <div className="flex flex-col items-center justify-center pb-6 pt-5">
                            <svg className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16" >
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                            </svg>
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                <span className="font-semibold">Click to upload</span> or drag and drop
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                        </div>
                        <FileInput id="dropzone-file" className="hidden" typeof="file" onChange={handleSelectFile} />
                    </Label>
                ) : (
                    <div className="w-full relative flex flex-col gap-y-5">
                        {/* Bottone X per cancellare l'immagine selezionata */}
                        <button
                            className="absolute -right-3 -top-3 text-custom-textPrimaryGray dark:text-dark-textPrimaryGray"
                            onClick={() => setFileSelected(null)}>
                            <CloseIcon />
                        </button>
                        {/* Preview dell'immagine selezionata */}
                        {imageUrl && (
                            <img
                                className="w-full h-full object-cover object-center max-h-[60svh] rounded-lg"
                                src={imageUrl}
                                alt="Selected"
                            />
                        )}
                        {/* Pulsante continua che attiva la chiamata al backend per analizzare i dettagli della foto */}
                        <ActiveButton
                            text="Continua"
                            buttonStyle="w-full py-3.5"
                            onClick={handleAnalyzeImage} />
                    </div>
                )}
        </div>
    )
}
