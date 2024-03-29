import React, { useState } from "react";

function RegenerateButton({ value, icon, onClick }: { value: string, icon: JSX.Element, onClick: () => void }) {
    return (
        <button
            onClick={onClick}
            type="button"
            className="w-max gap-2 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex items-center bg-custom-accent dark:bg-dark-accent text-dark-textPrimary hover:bg-dark-accent dark:hover:bg-custom-accent">
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

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(descrizioneAttuale);
            setCopied(true);
        } catch (error) {
            console.error('Errore nella copiatura del testo', error);
        }
    }

    return (
        <div className="w-full md:w-1/2 h-min flex flex-wrap justify-end gap-5 md:gap-3 p-5 rounded-lg border bg-custom-elevation dark:bg-dark-elevation border-custom-border dark:border-dark-border ">
            <textarea
                onChange={(event: any) => setDescrizioneAttuale(event.target.value)}
                value={descrizioneAttuale}
                id="message"
                className=" w-full h-[50svh] md:h-[40svh] text-md rounded-lg resize-none border-none bg-custom-elevation dark:bg-dark-elevation text-custom-textPrimary dark:text-dark-textPrimary" />
            <div className="w-full flex flex-col md:flex-row gap-4 justify-end items-end">
                <RegenerateButton value={copied ? 'Copied' : 'Copy to Clipboard'} icon={<CopyIcon />} onClick={handleCopy} />
                <RegenerateButton value="Regenerate" icon={<RegenerateIcon />} onClick={onRegenerate} />
            </div>
        </div>
    );
}
