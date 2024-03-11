import React, { useState } from "react";

function RegenerateButton({ value, icon, onClick }: { value: string, icon: JSX.Element, onClick: () => void }) {
    return (
        <button
            onClick={onClick}
            type="button"
            className="gap-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            {icon}
            {value}
        </button>
    );
}

const CopyIcon = React.memo(() => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path fillRule="evenodd" d="M10.5 3A1.501 1.501 0 0 0 9 4.5h6A1.5 1.5 0 0 0 13.5 3h-3Zm-2.693.178A3 3 0 0 1 10.5 1.5h3a3 3 0 0 1 2.694 1.678c.497.042.992.092 1.486.15 1.497.173 2.57 1.46 2.57 2.929V19.5a3 3 0 0 1-3 3H6.75a3 3 0 0 1-3-3V6.257c0-1.47 1.073-2.756 2.57-2.93.493-.057.989-.107 1.487-.15Z" clipRule="evenodd" />
    </svg>
));


const RegenerateIcon = React.memo(() => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path fillRule="evenodd" d="M4.755 10.059a7.5 7.5 0 0 1 12.548-3.364l1.903 1.903h-3.183a.75.75 0 1 0 0 1.5h4.992a.75.75 0 0 0 .75-.75V4.356a.75.75 0 0 0-1.5 0v3.18l-1.9-1.9A9 9 0 0 0 3.306 9.67a.75.75 0 1 0 1.45.388Zm15.408 3.352a.75.75 0 0 0-.919.53 7.5 7.5 0 0 1-12.548 3.364l-1.902-1.903h3.183a.75.75 0 0 0 0-1.5H2.984a.75.75 0 0 0-.75.75v4.992a.75.75 0 0 0 1.5 0v-3.18l1.9 1.9a9 9 0 0 0 15.059-4.035.75.75 0 0 0-.53-.918Z" clipRule="evenodd" />
    </svg>
));

export default function GenerateOutput({ description, onRegenerate }: { description: string, onRegenerate: () => void }) {

    const [descrizioneAttuale, setDescrizioneAttuale] = useState(description);
    const [copied, setCopied] = useState(false);

    const handleCopy = async() => {
        try {
            await navigator.clipboard.writeText(descrizioneAttuale);
            setCopied(true);
        } catch (error) {
            console.error('Errore nella copiatura del testo', error);
        }
    }

    return (
        <div className="w-full md:w-1/3 flex flex-col gap-3">
            <textarea
                onChange={(event: any) => setDescrizioneAttuale(event.target.value)}
                value={descrizioneAttuale}
                id="message"
                rows={10}
                className="p-2-5 text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write your thoughts here..." />
            <div className="flex justify-between md:justify-end md:gap-3">
                <RegenerateButton value="Regenerate" icon={<RegenerateIcon />} onClick={onRegenerate} />
                <RegenerateButton value={copied ? 'Copied' : 'Copy to Clipboard'} icon={<CopyIcon />} onClick={handleCopy} />
            </div>
        </div>
    );
}
