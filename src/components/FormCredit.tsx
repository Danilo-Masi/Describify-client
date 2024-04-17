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
            <div className=" w-full md:w-1/2 h-1/2 md:h-full flex flex-wrap items-start justify-center p-5 gap-6 order-2 md:order-1 bg-custom-elevation dark:bg-dark-elevation4 rounded-lg">
                <p className="w-full font-semibold text-2xl text-custom-textPrimaryGray dark:text-dark-textPrimaryGray">
                    Impostando il tuo budget puoi visualizzare quanti crediti riceverai
                </p>
                <p className="w-full text-balance text-custom-textSecondaryGray dark:text-dark-textSecondaryGray">
                    * 1 credito equivale ad una generazione
                </p>
                <div className="w-full md:w-[calc(50%-0.75rem)]">
                    <label htmlFor="visitors" className="block mb-2 text-sm font-medium text-custom-textPrimaryGray dark:text-dark-textPrimaryGray">Euro</label>
                    <input
                        type="number"
                        id="visitors"
                        className="bg-custom-elevation dark:bg-dark-elevation4 border border-custom-borderGray dark:border-dark-borderGray text-custom-textPrimaryGray dark:text-dark-textPrimaryGray text-sm rounded-lg focus:ring-custom-borderRingGray dark:ring-dark-borderRingGray focus:border-custom-borderFocusGray dark:focus:border-dark-borderFocusGray block w-full p-2.5 dark:placeholder:text-dark-textPrimaryGray placeholder:text-custom-textPrimaryGray"
                        placeholder="20"
                        required
                        onChange={handleValueChange} />
                </div>
                <div className="w-full md:w-[calc(50%-0.75rem)]">
                    <label htmlFor="visitors" className="block mb-2 text-sm font-medium text-custom-textPrimaryGray dark:text-dark-textPrimaryGray">Crediti</label>
                    <input
                        disabled
                        type="number"
                        id="visitors"
                        className="bg-custom-disabled dark:bg-dark-disabled text-custom-textSecondaryGray dark:text-dark-textSecondaryGray text-sm rounded-lg block w-full p-2.5 border-none"
                        placeholder="40"
                        value={currentValue} />
                </div>
                <button
                    onClick={() => setModalWaitlistOpen(true)}
                    type="button"
                    className="flex items-center justify-center gap-1 w-full text-dark-textPrimaryGray bg-custom-solidColor dark:bg-dark-solidColor hover:bg-custom-hoverColor dark:hover:bg-dark-hoverColor font-medium rounded-lg text-sm px-5 py-2.5">
                    Continua
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
