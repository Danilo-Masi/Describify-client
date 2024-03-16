import { useState } from "react";

const taglie = [
    { id: 1, value: 'XXS' },
    { id: 2, value: 'XS' },
    { id: 3, value: 'S' },
    { id: 4, value: 'M' },
    { id: 5, value: 'L' },
    { id: 6, value: 'XL' },
    { id: 7, value: 'XXL' },
];

const colori = [
    { id: 1, value: 'Red' },
    { id: 2, value: 'Green' },
    { id: 3, value: 'Yellow' },
    { id: 4, value: 'White' },
    { id: 5, value: 'Black' },
];

const toni = [
    { id: 1, value: 'Aggresive' },
    { id: 2, value: 'Motivational' },
    { id: 3, value: 'Friendly' },
];

const categorie = [
    { id: 1, value: 'Pants' },
    { id: 2, value: 'Jacket' },
    { id: 3, value: 'Tshirt' },
    { id: 4, value: 'Hat' },
];

function TextInput({ onChange, valoreLabel }: { onChange: any, valoreLabel: string }) {
    return (
        <div className="w-full flex flex-col gap-2">
            <label htmlFor={valoreLabel} className="flex text-sm font-medium text-gray-900 dark:text-white">
                {valoreLabel}
            </label>
            <input
                required
                onChange={onChange}
                type="text"
                id="default-input"
                placeholder="Brand name..."
                className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>
    );
}

function SelectInput({ arrayDati, width, onChange, valoreLabel, placeholder }: { arrayDati: any[], width: string, onChange: any, valoreLabel: string, placeholder: string }) {
    return (
        <div className={`w-full ${width} flex flex-col gap-2`}>
            <label htmlFor={valoreLabel} className="flex text-sm font-medium text-gray-900 dark:text-white">
                {valoreLabel}
            </label>
            <select
                required
                onChange={onChange}
                id={valoreLabel}
                className={`bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}>
                {placeholder && (
                    <option value="" disabled selected>
                        {placeholder}
                    </option>
                )}
                {arrayDati && arrayDati.length > 0 && (
                    arrayDati.map(a => {
                        return (
                            <option key={a.id} value={a.value}>
                                {a.value}
                            </option>
                        );
                    })
                )}
            </select>
        </div>
    );
}

function ButtonGenerate({ onClick, accessToken }: { onClick: any, accessToken: boolean }) {
    return (
        <button
            disabled={!accessToken}
            onClick={onClick}
            type="button"
            className="w-full md:w-[calc(50%-0.5rem)] mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2.5 focus:outline-none disabled:bg-gray-400 ">
            Generate
        </button>
    );
}

export default function GenerateForm({ onGeneration, accessToken }: { onGeneration: (brand: string, categoria: string, taglia: string, colore: string, tono: string) => void, accessToken: boolean }) {

    const [brand, setBrand] = useState("");
    const [categoria, setCategoria] = useState("");
    const [taglia, setTaglia] = useState("");
    const [colore, setColore] = useState("");
    const [tono, setTono] = useState("");

    return (
        <form className="w-full md:w-3/4 h-auto flex flex-wrap justify-end gap-4 md:gap-3 py-6 md:py-5 px-5 rounded-md bg-gray-100 border border-gray-300">
            <TextInput onChange={(event: any) => setBrand(event.target.value)} valoreLabel="Brand name" />
            <SelectInput arrayDati={categorie} width="md:w-full" onChange={(event: any) => setCategoria(event.target.value)} valoreLabel="Category" placeholder="Select a category"/>
            <SelectInput arrayDati={taglie} width="md:w-[calc(50%-0.5rem)]" onChange={(event: any) => setTaglia(event.target.value)} valoreLabel="Size" placeholder="Select a size"/>
            <SelectInput arrayDati={colori} width="md:w-[calc(50%-0.5rem)]" onChange={(event: any) => setColore(event.target.value)} valoreLabel="Color" placeholder="Select a color"/>
            <SelectInput arrayDati={toni} width="md:w-full" onChange={(event: any) => setTono(event.target.value)} valoreLabel="Tone of the description" placeholder="Select a tone"/>
            <ButtonGenerate onClick={() => onGeneration(brand, categoria, taglia, colore, tono)} accessToken={accessToken} />
        </form>
    );
}
