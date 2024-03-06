import { useState } from "react";

const taglie = [
    { id: 0, value: 'Choose a size' },
    { id: 1, value: 'XXS' },
    { id: 2, value: 'XS' },
    { id: 3, value: 'S' },
    { id: 4, value: 'M' },
    { id: 5, value: 'L' },
    { id: 6, value: 'XL' },
    { id: 7, value: 'XXL' },
];

const colori = [
    { id: 0, value: 'Choose a color' },
    { id: 1, value: 'Red' },
    { id: 2, value: 'Green' },
    { id: 3, value: 'Yellow' },
    { id: 4, value: 'White' },
    { id: 5, value: 'Black' },
];

const toni = [
    { id: 0, value: 'Choose a tone' },
    { id: 1, value: 'Aggresive' },
    { id: 2, value: 'Motivational' },
    { id: 3, value: 'Friendly' },
];

const categorie = [
    { id: 0, value: 'Choose a category' },
    { id: 1, value: 'Pants' },
    { id: 2, value: 'Jacket' },
    { id: 3, value: 'Tshirt' },
    { id: 4, value: 'Hat' },
];

function TextInput() {
    return (
        <div className="w-full">
            <input
                type="text"
                id="default-input"
                placeholder="Brand name..."
                className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>
    );
}

function SelectInput({ arrayDati, width, onChange }: { arrayDati: any[], width: string, onChange: any }) {
    return (
        <select
            onChange={onChange}
            id="countries"
            className={`${width} bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}>
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
    );
}

function ButtonGenerate({ onClick }: { onClick: any }) {
    return (
        <button
            onClick={onClick}
            type="button"
            className="w-full md:w-[calc(50%-0.5rem)] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            Generate
        </button>
    );
}

const stampaValori = (categoria: string, taglia: string, colore: string, tono: string) => {
    console.log(`Categoria selezionata: ${categoria}`);
    console.log(`Talgia selezionata: ${taglia}`);
    console.log(`Colore selezionato: ${colore}`);
    console.log(`Tono selezionata: ${tono}`);
}

export default function Form() {

    const [categoria, setCategoria] = useState("");
    const [taglia, setTaglia] = useState("");
    const [colore, setColore] = useState("");
    const [tono, setTono] = useState("");

    return (
        <form className="w-full md:w-1/3 h-auto flex flex-wrap justify-end gap-4 py-6 md:py-5 px-5 rounded-md bg-gray-100">
            <TextInput />
            <SelectInput arrayDati={categorie} width="md:w-full" onChange={(categoria: string) => setCategoria(categoria)} />
            <SelectInput arrayDati={taglie} width="md:w-[calc(50%-0.5rem)]" onChange={(taglia: string) => setTaglia(taglia)} />
            <SelectInput arrayDati={colori} width="md:w-[calc(50%-0.5rem)]" onChange={(colore: string) => setColore(colore)} />
            <SelectInput arrayDati={toni} width="md:w-full" onChange={(tono: string) => setTono(tono)} />
            <ButtonGenerate onClick={() => stampaValori(categoria, taglia, colore, tono)} />
        </form>
    );
}
