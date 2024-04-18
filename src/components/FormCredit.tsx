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
        <div className="w-full md:w-3/4 h-auto flex flex-col md:flex-row items-start justify-start gap-x-5 ">
            <div className="w-full md:w-1/2 h-min flex flex-col gap-y-5">
                <div className="w-full h-[30svh] flex items-center justify-center rounded-lg bg-custom-elevation dark:bg-dark-elevation3">ciao</div>
                <div className="w-full h-[30svh] flex items-center justify-center rounded-lg bg-custom-elevation dark:bg-dark-elevation3">ciao</div>
            </div>
            <div className="w-full md:w-1/2 h-min flex items-center justify-start">
                <Chart />
            </div>
        </div>
    );
}
