import { SparklingStars } from "./SvgComponents";

interface TextInputProps {
    valoreLabel: string;
    valore: string;
}

function TextInput({ valoreLabel, valore }: TextInputProps) {
    return (
        <div className="w-full flex flex-col gap-2">
            <label className="text-custom-textPrimaryGray dark:text-dark-textPrimaryGray">
                {valoreLabel}
            </label>
            <input
                readOnly
                type="text"
                aria-label={`Input ${valoreLabel}`}
                value={valore}
                className="w-full rounded-lg p-3 capitalize bg-custom-elevation3 dark:bg-dark-elevation3 border border-custom-borderGray dark:border-dark-borderGray focus:border-custom-borderFocusColor dark:focus:border-dark-borderFocusColor focus:ring-custom-borderRingColor dark:focus:ring-dark-borderRingColor text-custom-textPrimaryGray dark:text-dark-textPrimaryGray placeholder:text-custom-textSecondaryGray dark:placeholder:text-dark-textSecondaryGray" />
        </div>
    );
}

export default function ToyFormComponent() {
    return (
        <div className="w-full h-full flex flex-wrap items-center justify-center gap-6 p-5 rounded-lg bg-custom-elevation4 dark:bg-dark-elevation4 border border-custom-borderGray dark:border-dark-borderGray">
            <TextInput valoreLabel='Categoria' valore='Tuta spaziale' />
            <TextInput valoreLabel='Marca del prodotto' valore='Prada' />
            <TextInput valoreLabel='Colore del prodotto' valore='Bianco, Rosso, Grigio' />
            <TextInput valoreLabel='Dimensione del prodotto' valore='M' />
            <button
                disabled
                type="button"
                className="w-full flex items-center justify-center gap-x-2 rounded-lg px-5 py-3 font-semibold text-dark-textPrimaryGray bg-custom-solidColor dark:bg-dark-solidColor hover:bg-custom-hoverColor dark:hover:bg-dark-hoverColor">
                Genera annuncio
                <SparklingStars />
            </button>
        </div>
    )
}
