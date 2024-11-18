// React
import { Dispatch, SetStateAction, useEffect, useState } from "react"
// Flowbite-React
import { FileInput, Label } from "flowbite-react";
import { ChevronRight, CloseIcon, CloudIcon, LoadingIncon } from "./SvgComponents";
// React-tostify
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// I18Next
import { useTranslation } from 'react-i18next';
// Axios
import axios from 'axios';
// Components
import ActiveButton from "./ActiveButton";

// Url del server di produzione
const SERVER_URL = 'http://localhost:3000';
// Url del sever di rilascio
//const SERVER_URL = import.meta.env.VITE_REACT_APP_SERVER_URL;

interface ProductImageProps {
    fileSelected: File | null;
    setFileSelected: Dispatch<SetStateAction<File | null>>;
    setImageSelected: Dispatch<SetStateAction<boolean>>;
    setSelectedCategory: Dispatch<SetStateAction<string>>;
    setSelectedBrand: Dispatch<SetStateAction<string>>;
    setSelectedColor: Dispatch<SetStateAction<string>>;
    setCreditiUpdate: Dispatch<SetStateAction<boolean>>;
    isCreditiUpdate: boolean;
}

export default function ProductImage({ fileSelected, setImageSelected, setFileSelected, setSelectedCategory, setSelectedBrand, setSelectedColor, setCreditiUpdate, isCreditiUpdate }: ProductImageProps) {

    // Componenete per la traduzione
    const { t } = useTranslation();
    // Stato per impostare l'URL temporaneo dell'immagine
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const [isLoading, setLoading] = useState<boolean>(false);

    // Funzione per selezionare il file dal file system
    const handleSelectFile = async (e: any) => {
        const file = e.target.files[0];
        if (file && (file.type === "image/jpeg" || file.type === "image/svg+xml" || file.type === "image/png")) {
            const resizedImage = await resizeImage(file, 800, 800);
            setFileSelected(resizedImage);
        } else {
            toast.warn(t('productImageErroreEstensione'));
        }
    }

    // Funzione per il ridimensionamento dell'immagine
    const resizeImage = (file: File, maxWidth: number, maxHeight: number): Promise<File> => {
        return new Promise((resolve) => {
            const img = new Image();
            const reader = new FileReader();
            // Legge l'immagine caricata
            reader.onload = (event: any) => {
                img.src = event.target.result;
            };
            img.onload = () => {
                // Dimensioni dell'immagine caricata
                let width = img.width;
                let height = img.height;
                // Calcola le nuove dimensioni mantenendo le proporzioni
                if (width > maxWidth || height > maxHeight) {
                    if (width > height) {
                        height = Math.floor((height * maxWidth) / width);
                        width = maxWidth;
                    } else {
                        width = Math.floor((width * maxHeight) / height);
                        height = maxHeight;
                    }
                }
                // Crea il canvas e disegna l'immagine ridimensionata
                const canvas = document.createElement("canvas");
                canvas.width = width;
                canvas.height = height;
                const ctx = canvas.getContext("2d");
                ctx?.drawImage(img, 0, 0, width, height);
                // Converti il contenuto del canvas in un file Blob
                canvas.toBlob((blob) => {
                    if (blob) {
                        const resizedFile = new File([blob], file.name, { type: file.type });
                        resolve(resizedFile);
                    }
                }, file.type);
            };
            reader.readAsDataURL(file);
        });
    }

    // Effetto per creare un URL temporaneo dell'immagine per caricare l'anteprima
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
        // Imposta isLoading su true
        setLoading(true);
        // Controlla che sia stato selezionato un file
        if (!fileSelected) {
            console.error("Nessun file selezionato");
            return;
        }
        // Aggiunge il file selezionato al formData
        const formData = new FormData();
        formData.append('image', fileSelected);

        // Ottieni il token JWT salvato nel localStorage
        const token = localStorage.getItem('authToken');

        // Chiama il backend e di conseguenza le API di OPEN AI per analizzare l'immagine
        try {
            const response = await axios.post(`${SERVER_URL}/analyze-image`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${token}`,
                }
            });
            // Risposta di successo
            if (response.status === 200) {
                // Contiene il testo di risposta
                const analysisResult = response.data.responseText;

                // Estrai le informazioni con regex che si fermano alla parola chiave successiva
                const categoriaMatch = analysisResult.match(/categoria:\s*(.*?)\s*(?=colore:)/i);
                const coloreMatch = analysisResult.match(/colore:\s*(.*?)\s*(?=marchio:)/i);
                const marchioMatch = analysisResult.match(/marchio:\s*(.*)/i);

                // Ottieni i valori se trovati
                const categoria = categoriaMatch ? categoriaMatch[1].trim() : 'N/A';
                const colore = coloreMatch ? coloreMatch[1].trim() : 'N/A';
                const marchio = marchioMatch ? marchioMatch[1].trim() : 'N/A';

                // Imposta i valori trovati nel form
                setSelectedCategory(categoria);
                setSelectedColor(colore);
                setSelectedBrand(marchio);

                // GESTISCI RISPOSTA DELL'ANALISI DELL'IMMAGINE
                setImageSelected(false);
                setFileSelected(null);
                // Aggiorna il valore dei crediti
                setCreditiUpdate(!isCreditiUpdate);
            }
        } catch (error: any) {
            if (error.status === 401) {
                console.error("ERRORE CLIENT: Crediti insufficienti ", error.message)
                toast.warn(t('productImageErroreCrediti'), {
                    onClose: () => setFileSelected(null),
                });
            } else {
                console.error("ERRORE CLIENT: Errore durante il caricmanto dell'immagine", error.message);
                toast.error(t('productImageErroreCaricamento'), {
                    onClose: () => setFileSelected(null),
                });
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full h-full flex flex-col items-center justify-center rounded-lg p-5 gap-y-5 bg-custom-elevation4 dark:bg-dark-elevation4 border border-custom-borderGray dark:border-dark-borderGray">
            {fileSelected === null
                ? (
                    <Label
                        htmlFor="dropzone-file"
                        className="flex h-full w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600" >
                        {/* Contenitore su cui cliccare per selezionare l'immagine */}
                        <div className="flex flex-col items-center justify-center pb-6 pt-5">
                            <CloudIcon />
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                {t('productImageTesto')}
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                SVG, PNG o JPG
                            </p>
                        </div>
                        {/* File input nascosto per selezionare l'immagine */}
                        <FileInput
                            id="dropzone-file"
                            className="hidden"
                            typeof="file"
                            accept=".jpg, .jpeg, .svg, .png"
                            onChange={handleSelectFile} />
                    </Label>
                ) : (
                    <div className="w-full h-full relative flex flex-col gap-y-5">
                        {/* Bottone per cancellare l'immagine selezionata */}
                        <button
                            className="absolute -right-3 -top-3 text-custom-textPrimaryGray dark:text-dark-textPrimaryGray"
                            onClick={() => setFileSelected(null)}>
                            <CloseIcon />
                        </button>
                        {/* Anteprima dell'immagine selezionata */}
                        {imageUrl && (
                            <img
                                className="w-full h-full object-cover object-center rounded-lg"
                                src={imageUrl}
                                alt="Selected" />
                        )}
                        {/* Bottone chiamare la funzione handleAnalyzeImage */}
                        {isLoading ? (
                            <button
                                disabled
                                type="button"
                                className="w-full inline-flex items-center justify-center py-3 gap-x-2 font-semibold text-dark-textPrimaryGray rounded-lg bg-custom-solidColor dark:bg-dark-solidColor hover:bg-custom-hoverColor dark:hover:bg-dark-hoverColor">
                                {t('productImageBottoneCaricamento')}
                                <LoadingIncon />
                            </button>
                        ) : (
                            <button
                                type="button"
                                className=" w-full inline-flex items-center justify-center py-3 gap-x-2 font-semibold text-dark-textPrimaryGray rounded-lg bg-custom-solidColor dark:bg-dark-solidColor hover:bg-custom-hoverColor dark:hover:bg-dark-hoverColor"
                                onClick={handleAnalyzeImage}>
                                {t('productImageBottoneContinua')}
                                <ChevronRight />
                            </button>
                        )}
                    </div>
                )}
        </div>
    )
}
