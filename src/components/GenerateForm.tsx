import { useState } from "react";
//Data
import { taglie, colori, toni, categorie, cat } from '../data/data';

interface SelectInputProps {
    arrayDati: Array<{ id: number; value: string; sottoCategorie?: Array<{ id: number; value: string; dettagli?: Array<{ id: number; value: string }> }> }>;
    width: string;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    valoreLabel: string;
    placeholder: string;
}

interface ButtonGenerateProps {
    onClick: () => void;
    accessToken: boolean;
}

function TextInput({ onChange, valoreLabel }: { onChange: any, valoreLabel: string }) {
    return (
        <div className="w-full flex flex-col gap-2">
            <label htmlFor={valoreLabel} className="flex text-sm font-medium text-gray-900 dark:text-white">
                {valoreLabel}
            </label>
            <input
                type="text"
                placeholder="Brand name..."
                className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                id={valoreLabel}
                required
                onChange={onChange} />
        </div>
    );
}

function SelectInput({ arrayDati, width, onChange, valoreLabel, placeholder }: SelectInputProps) {
    return (
        <div className={`w-full ${width} flex flex-col gap-2`}>
            <label htmlFor={valoreLabel} className="flex text-sm font-medium text-gray-900 dark:text-white">
                {valoreLabel}
            </label>
            <select
                required
                onChange={onChange}
                id={valoreLabel}
                defaultValue=""
                className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                {placeholder && <option value="" disabled>{placeholder}</option>}
                {arrayDati.map((a) => (
                    <option key={a.id} value={a.value}>
                        {a.value}
                    </option>
                ))}
            </select>
        </div>
    );
}

function ButtonGenerate({ onClick, accessToken }: ButtonGenerateProps) {
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

interface Option {
    value: string;
    label: string;
    children?: Option[];
}

function DinamicalySelectInput({ width, valoreLabel, arrayDati }: { width: string, valoreLabel: string, arrayDati: Option[] }) {

    const [selectedCategory, setSelectedCategory] = useState<string>("");
    const [selectedSubCategory, setSelectedSubCategory] = useState<string>("");

    const selectedCategoryObject = arrayDati.find((cat: any) => cat.value === selectedCategory);

    const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCategory(event.target.value);
        // Resetta la sottocategoria ogni volta che cambia la categoria
        setSelectedSubCategory("");
    };

    return (
        <div className={`w-full ${width} flex flex-col gap-2`}>
            <label htmlFor="categoria" className="flex text-sm font-medium text-gray-900 dark:text-white">
                {valoreLabel}
            </label>
            <select
                id="categoria"
                value={selectedCategory}
                onChange={handleCategoryChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
                <option value="">Seleziona una categoria</option>
                {arrayDati.map((cat: any) => (
                    <option key={cat.value} value={cat.value}>{cat.label}</option>
                ))}
            </select>
            {selectedCategoryObject && selectedCategoryObject.children &&
                <select
                    id="sottocategoria"
                    value={selectedSubCategory}
                    onChange={(event) => setSelectedSubCategory(event.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-2"
                >
                    <option value="">Seleziona una sottocategoria</option>
                    {selectedCategoryObject.children.map((subCat: any) => (
                        <option key={subCat.value} value={subCat.value}>{subCat.label}</option>
                    ))}
                </select>
            }
        </div>
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
            <SelectInput arrayDati={cat} width="md:w-full" onChange={(event: any) => setCategoria(event.target.value)} valoreLabel="Category" placeholder="Select a category" />
            {/*<DinamicalySelectInput arrayDati={categorie} width="md:full" valoreLabel="Categorie" />*/}
            <SelectInput arrayDati={taglie} width="md:w-[calc(50%-0.5rem)]" onChange={(event: any) => setTaglia(event.target.value)} valoreLabel="Size" placeholder="Select a size" />
            <SelectInput arrayDati={colori} width="md:w-[calc(50%-0.5rem)]" onChange={(event: any) => setColore(event.target.value)} valoreLabel="Color" placeholder="Select a color" />
            <SelectInput arrayDati={toni} width="md:w-full" onChange={(event: any) => setTono(event.target.value)} valoreLabel="Tone of the description" placeholder="Select a tone" />
            <ButtonGenerate onClick={() => onGeneration(brand, categoria, taglia, colore, tono)} accessToken={accessToken} />
        </form>
    );
}
