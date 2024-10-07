// React
import { Dispatch, SetStateAction } from "react"

interface ProductImageProps {
    setImage: Dispatch<SetStateAction<boolean>>;
}

export default function ProductImage({ setImage }: ProductImageProps) {

    const handleInsertDetail = () => {
        // Prima chiamata a chatgpt che analizza l'immagine e restituisce 
        // i valori che si inseriscono nel form cosi da non inserirli manualmente
        // solo per abbonati pro
        setImage(false);
    }

    return (
        <div className="w-full h-full flex flex-col items-center justify-center rounded-lg p-5 gap-y-5 bg-red-500">
            <div className="w-full h-full flex items-center justify-center rounded-lg bg-green-500">
                immagine
            </div>
            <button
                onClick={handleInsertDetail}
                className="w-full p-2.5 rounded-lg bg-dark-accent">
                Continua
            </button>
        </div>
    )
}
