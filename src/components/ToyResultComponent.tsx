// Flowbite
import { Textarea } from "flowbite-react";

export default function ToyResultComponent() {
  return (
    <div className="w-full h-auto flex flex-col gap-y-6">
      {/* Div titolo */}
      <div className="w-full h-1/3 min-h-fit flex flex-col items-start justify-between gap-y-5 p-5 rounded-lg bg-custom-elevation4 dark:bg-dark-elevation4 border border-custom-borderGray dark:border-dark-borderGray">
        <div className="w-full flex items-center justify-between">
          <h1 className="text-lg font-medium text-custom-textPrimaryGray dark:text-dark-textPrimaryGray">
            Titolo generato
          </h1>
          <button
            disabled
            type="button"
            className="w-fit flex items-center justify-center gap-x-3 py-2.5 px-3 bg-custom-elevation3 dark:bg-dark-elevation3 border border-custom-borderGray dark:border-dark-borderGray rounded-xl text-custom-textPrimaryGray dark:text-dark-textPrimaryColor disabled:bg-custom-disabled dark:disabled:bg-dark-disabled">
            Copia
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
            </svg>
          </button>
        </div>
        <Textarea
          name="textarea titolo"
          placeholder="🚀 Tuta Spaziale Prada - Stile unico al mondo"
          className="w-full h-[7svh] overflow-scroll resize-none px-0 bg-custom-elevation4 dark:bg-dark-elevation4 border-0 focus:border-0 focus:ring-0 text-md text-custom-textPrimaryGray dark:text-dark-textPrimaryGray placeholder:text-custom-textSecondaryGray dark:placeholder:text-dark-textSecondaryGray" />
      </div>
      {/* Div descrizione */}
      <div className="w-full h-1/3 min-h-fit flex flex-col items-start justify-between gap-y-5 p-5 rounded-lg bg-custom-elevation4 dark:bg-dark-elevation4 border border-custom-borderGray dark:border-dark-borderGray">
        <div className="w-full flex items-center justify-between">
          <h1 className="text-lg font-medium text-custom-textPrimaryGray dark:text-dark-textPrimaryGray">
            Descrizione generata
          </h1>
          <button
            disabled
            type="button"
            className="w-fit flex items-center justify-center gap-x-3 py-2.5 px-3 bg-custom-elevation3 dark:bg-dark-elevation3 border border-custom-borderGray dark:border-dark-borderGray rounded-xl text-custom-textPrimaryGray dark:text-dark-textPrimaryColor disabled:bg-custom-disabled dark:disabled:bg-dark-disabled">
            Copia
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
            </svg>
          </button>
        </div>
        <Textarea
          name="textarea titolo"
          placeholder={`Sei pronto a fare un viaggio nello spa...stile? Questa tuta spaziale Prada è il mix perfetto di design audace e comfort, ideale per chi ama distinguersi!

🌟 Caratteristiche principali:
- Taglia: M
- Colore: Bianco, Rosso, Grigio
- Materiale: Alta qualità
- Condizioni: Ottime, come nuova (mai usata per nessuna missione)

🔹 Perché scegliere questo prodotto?
Questa tuta è un affare imperdibile! Con un prezzo competitivo, offre la qualità e il prestigio del marchio Prada. Perfetta per eventi speciali o per un look casual-chic, non puoi lasciartela sfuggire!

📞 Contattami per maggiori dettagli o per organizzare una prova. Non perdere l'occasione di aggiungere un pezzo unico al tuo guardaroba!`}
          className="w-full h-fit min-h-[30svh] max-h-[30svh] overflow-scroll resize-none px-0 bg-custom-elevation4 dark:bg-dark-elevation4 border-0 focus:border-0 focus:ring-0 text-md text-custom-textPrimaryGray dark:text-dark-textPrimaryGray placeholder:text-custom-textSecondaryGray dark:placeholder:text-dark-textSecondaryGray" />
      </div>
    </div>

  )
}
