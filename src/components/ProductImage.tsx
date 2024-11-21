// React
import { Dispatch, SetStateAction, useEffect, useState } from "react"
// Flowbite-React
import { FileInput, Label } from "flowbite-react";
import { CloudIcon, LoadingIncon, SparklingStars } from "./SvgComponents";
// React-tostify
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// I18Next
import { useTranslation } from 'react-i18next';
// Axios
import axios from 'axios';

// Url del server di produzione
const SERVER_URL = 'http://localhost:3000';
// Url del sever di rilascio
//const SERVER_URL = import.meta.env.VITE_REACT_APP_SERVER_URL;

interface ProductImageProps {
    fileSelected: File[];
    setFileSelected: Dispatch<SetStateAction<File[]>>;
    setSelectedCategory: Dispatch<SetStateAction<string>>;
    setSelectedBrand: Dispatch<SetStateAction<string>>;
    setSelectedColor: Dispatch<SetStateAction<string>>;
    setSelectedSize: Dispatch<SetStateAction<string>>;
    setImageSelected: Dispatch<SetStateAction<boolean>>;
    isCreditiUpdate: boolean;
    setCreditiUpdate: Dispatch<SetStateAction<boolean>>;
}

export default function ProductImage({ fileSelected, setFileSelected, setSelectedCategory, setSelectedBrand, setSelectedColor, setSelectedSize, setImageSelected, isCreditiUpdate, setCreditiUpdate }: ProductImageProps) {

    // Componenete per la traduzione
    const { t } = useTranslation();
    // Stato per impostare l'URL temporaneo dell'immagine
    const [imageUrls, setImageUrls] = useState<string[]>([]);
    // Stato che verifica se ci sono immagini selezionate
    const [isArrayEmpty, setArrayEmpty] = useState<boolean>(false);
    // Stato per gestire il caricamento
    const [isLoading, setLoading] = useState<boolean>(false);

    // Funzione per selezionare le immagini dal file system dell'utente
    const handleSelectFile = async (e: any) => {
        const files = e.target.files;
        // Carica un massimo di 4 immagini
        if (files.length + (fileSelected ? fileSelected.length : 0) > 4) {
            toast.warn(t('productImageErroreLimite'));
            return;
        }
        // Crea un array per il file selezionati
        const selectedFiles = Array.from(files);
        // Filtra solo le immagini supportate
        const validFiles = selectedFiles.filter((file: any) =>
            file.type === 'image/jpeg' || file.type === 'image/jpg' || file.type === 'image/png' || file.type === 'image/svg+xml'
        );

        if (validFiles.length > 0) {
            // Effettua il resize delle immagini se troppo grandi
            const resizedImages = await Promise.all(
                validFiles.map((file: any) => resizeImage(file, 800, 800)),
            );
            // Aggiorna lo stato con i nuovi file selezionati
            setFileSelected((prevFiles) => [...(prevFiles || []), ...resizedImages]);
            // Aggiorna gli URL temporanei per l'anteprima
            const urls = resizedImages.map((file) => URL.createObjectURL(file));
            // Imposta lo stato delle immagini con gli url
            setImageUrls((prevUrls) => [...prevUrls, ...urls]);
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

    // Funzione per rimuovere un immagine dalla lista delle immagini caricate
    const handleDeleteImage = (index: number) => {
        setImageUrls((prevUrls) => prevUrls.filter((_, i) => i !== index));
        setFileSelected((prevFiles) => prevFiles.filter((_, i) => i !== index));
    };

    // Effetto per revocare gli URL temporanei quando il componente si smonta o cambia l'immagine
    useEffect(() => {
        return () => {
            imageUrls.forEach((url) => URL.revokeObjectURL(url));
        }
    }, [imageUrls]);

    // Effetto per far tornare visibile il file select se tutte le immagini vengono cancellate
    useEffect(() => {
        setArrayEmpty(imageUrls.length === 0);
    }, [imageUrls]);

    // Funzione che fa la chiamata al backend e da li le API di OPENAI per analizzare l'immagine
    const handleAnalyzeImage = async () => {
        // Imposta isLoading su true
        setLoading(true);
        // Controlla che sia stato selezionato un file
        if (!fileSelected || fileSelected.length === 0) {
            console.error("Nessun file selezionato");
            return;
        }
        // Aggiunge il file selezionato al formData
        const formData = new FormData();
        fileSelected.forEach((file) => {
            formData.append("images", file);
        });
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
                const marchioMatch = analysisResult.match(/marchio:\s*(.*?)\s*(?=dimensioni:)/i);
                const dimensioneMatch = analysisResult.match(/dimensioni:\s*(.*?)\s*(?=condizioni:)/i);
                // Ottieni i valori se trovati
                const categoria = categoriaMatch && categoriaMatch[1].trim();
                const colore = coloreMatch && coloreMatch[1].trim();
                const marchio = marchioMatch && marchioMatch[1].trim();
                const dimensione = dimensioneMatch && dimensioneMatch[1].trim();
                // Imposta i valori trovati nel form
                setSelectedCategory(categoria);
                setSelectedColor(colore);
                setSelectedBrand(marchio);
                setSelectedSize(dimensione);
                // Resetta lo stato dell'immagine
                setImageSelected(true);
                setFileSelected([]);
                setCreditiUpdate(!isCreditiUpdate);
            }
        } catch (error: any) {
            if (error.status === 401) {
                console.error("ERRORE CLIENT: Crediti insufficienti ", error.message)
                toast.warn(t('productImageErroreCrediti'), {
                    onClose: () => setFileSelected([]),
                });
            } else {
                console.error("ERRORE CLIENT: Errore durante il caricmanto dell'immagine", error.message);
                toast.error(t('productImageErroreCaricamento'), {
                    onClose: () => setFileSelected([]),
                });
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full h-full flex flex-col items-start justify-start rounded-lg gap-y-5">
            {isArrayEmpty ? (
                <Label
                    htmlFor="dropzone-file"
                    className=" h-full w-full cursor-pointer flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600" >
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
                        multiple
                        onChange={handleSelectFile} />
                </Label>
            ) : (
                <div className="w-full h-full relative flex flex-col items-center justify-center gap-y-5">
                    {/* Anteprima delle immagini selezionate */}
                    <div className="w-full h-full grid grid-cols-2 grid-rows-2 gap-3">
                        {imageUrls.map((url, index) => (
                            <div key={index} className="relative group w-full h-full">
                                {/* Immagine */}
                                <img
                                    className="w-full h-full object-cover object-center rounded-lg"
                                    src={url}
                                    alt={`Selected ${index + 1}`}
                                    style={{ aspectRatio: "1 / 1" }}
                                />
                                {/* Icona del cestino */}
                                <button
                                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"
                                    onClick={() => handleDeleteImage(index)}>
                                    🗑️
                                </button>
                            </div>
                        ))}
                    </div>
                    {/* Bottone chiamare la funzione handleAnalyzeImage */}
                    {isLoading ? (
                        <button
                            disabled
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
                            <SparklingStars />
                        </button>
                    )}
                </div>
            )}
        </div>
    );
}
