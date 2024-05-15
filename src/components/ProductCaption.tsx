import { Textarea } from "flowbite-react";

export default function ProductOutput() {
    return (
        <div className="w-full h-auto flex flex-col items-start justify-between gap-y-5 p-5 rounded-lg bg-custom-elevation4 dark:bg-dark-elevation4 border border-custom-borderGray dark:border-dark-borderGray">
            <div className="w-full flex items-center justify-between">
                <h1 className="text-lg font-medium text-custom-textPrimaryGray dark:text-dark-textPrimaryGray">Descrizione</h1>
                <button type="button" className="w-fit flex items-center justify-center gap-x-3 py-3 px-3.5 bg-custom-elevation3 dark:bg-dark-elevation3 border border-custom-borderGray dark:border-dark-borderGray rounded-xl text-custom-textPrimaryGray dark:text-dark-textPrimaryColor">
                    Copia titolo
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                    </svg>
                </button>
            </div>
            {/* Area testo */}
            <Textarea
                placeholder={
`💼 Camicia Elegante Massimo Dutti 💼
                
Scopri la raffinatezza con questa splendida camicia a righe di Massimo Dutti. Ideale per ogni occasione, questa camicia presenta un design classico con righe color azzurro chiaro e bianco, perfetto per aggiungere un tocco di eleganza al tuo guardaroba.
                
🌟 Caratteristiche principali:
    - Taglia: M
    - Materiale: 100% cotone di alta qualità
    - Colore: Azzurro chiaro e bianco a righe
    - Condizione: Nuova, mai indossata
                
Questa camicia è incredibilmente comoda e traspirante, ideale sia per l'ufficio che per una serata fuori. Il tessuto in cotone puro assicura una sensazione di morbidezza sulla pelle e una vestibilità perfetta.
                
🔹 Perché scegliere questa camicia?
    - Stile senza tempo e versatile
    - Perfetta per abbinamenti sia formali che casual
    - Qualità superiore garantita da Massimo Dutti
                
Non perdere l'occasione di aggiungere questo pezzo unico al tuo guardaroba! 👔✨
                
📞 Contattami per maggiori dettagli o per organizzare una prova. Sono a tua disposizione per qualsiasi domanda!`}
                className="w-full h-[30svh] overflow-scroll resize-none px-0 bg-custom-elevation4 dark:bg-dark-elevation4 border-0 focus:border-0 focus:ring-0 text-md text-custom-textPrimaryGray dark:text-dark-textPrimaryGray placeholder:text-custom-textSecondaryGray dark:placeholder:text-dark-textSecondaryGray" />
        </div>
    );
}
