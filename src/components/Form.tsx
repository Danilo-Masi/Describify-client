interface SelectItem {
    id: number;
    value: string;
}

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

function SelectInput({ arrayDati, width }: { arrayDati: SelectItem[], width: string }) {
    return (
        <select id="countries" className={`${width} bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}>
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

export default function Form() {
    return (
        <form className="w-full md:w-1/3 h-auto flex flex-wrap gap-4 p-5 rounded-md bg-gray-100">
            <SelectInput arrayDati={taglie} width="md:w-[calc(50%-0.5rem)]" />
            <SelectInput arrayDati={colori} width="md:w-[calc(50%-0.5rem)]" />
        </form>
    );
}
