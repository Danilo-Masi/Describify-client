import { useState } from "react";
//Components
import Chart from "./Chart";
import WaitlistModal from "./WaitlistModal";

export default function FormCredit() {

    const [modalWaitlistOpen, setModalWaitlistOpen] = useState(false);
    const [currentValue, setCurrentValue] = useState(40);

    const handleValueChange = (event: any) => {
        const euroInseriti = event.target.value;
        const numeroCrediti = euroInseriti / 0.5;
        setCurrentValue(numeroCrediti);
    }

    return (
        <div className="w-full md:w-3/4 flex flex-col md:flex-row gap-5">
            {/* Blocco Input */}
            <div className=" w-full md:w-1/2 h-1/2 md:h-full flex flex-wrap items-start justify-center p-5 gap-6 order-2 md:order-1 bg-custom-elevation2 dark:bg-dark-elevation2 rounded-lg">
                <div className="w-full md:w-[calc(50%-0.75rem)]">
                    <label htmlFor="visitors" className="block mb-2 text-sm font-medium text-custom-textPrimary dark:text-dark-textPrimary">Euro</label>
                    <input
                        type="number"
                        id="visitors"
                        className="bg-dark-elevation2 dark:bg-dark-elevation2 border border-custom-border dark:border-dark-border text-custom-textPrimary dark:text-dark-textPrimary text-sm rounded-lg focus:ring-custom-borderRing dark:ring-dark-borderRing focus:border-custom-borderFocus dark:focus:border-dark-borderFocus block w-full p-2.5  dark:placeholder:text-dark-textSecondary placeholder:text-custom-textSecondary"
                        placeholder="20"
                        required
                        onChange={handleValueChange} />
                </div>
                <div className="w-full md:w-[calc(50%-0.75rem)]">
                    <label htmlFor="visitors" className="block mb-2 text-sm font-medium text-custom-textPrimary dark:text-dark-textPrimary">Crediti</label>
                    <input
                        disabled
                        type="number"
                        id="visitors"
                        className="bg-custom-border dark:bg-dark-border text-custom-textPrimary dark:text-dark-textPrimary text-sm rounded-lg block w-full p-2.5 border-none"
                        value={currentValue}
                        required />
                </div>
                <p className="w-full text-balance text-custom-textSecondary dark:text-dark-textSecondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam blandit nulla pellentesque tortor fermentum vehicula. Duis in risus enim. Cras.
                </p>
                <button
                    onClick={() => setModalWaitlistOpen(true)}
                    type="button"
                    className="flex items-center justify-center gap-1 w-full text-dark-textPrimary bg-custom-accent dark:bg-dark-accent hover:bg-custom-borderRing dark:hover:bg-dark-elevation font-medium rounded-lg text-sm px-5 py-2.5">
                    Continua
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
            {/* Blocco grafico*/}
            <div className=" w-full md:w-1/2 h-auto flex flex-col items-center justify-center order-2 md:order-1">
                <Chart setModalOpen={setModalWaitlistOpen} />
            </div>
            {modalWaitlistOpen && <WaitlistModal onClose={() => setModalWaitlistOpen(false)} />}
        </div>
    );
}
