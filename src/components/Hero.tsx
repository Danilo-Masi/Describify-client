//Flowbite
import { Button } from "flowbite-react";
//Components
import { ContainerComponents } from "./Layout";
import Intestazione from "./Intestazione";

export default function Hero() {
    return (
        <ContainerComponents gap="gap-y-5">
            <Intestazione
                badgeValue="A PROJECT BY DANILO MASI"
                titleValue="Value your time and increse your sell online"
                descriptionValue="Elevate your sales with AI. Descrify will instantly generate a captivating description for your listing. Boost your sales on Vinted, eBay, Subito, and more, with descriptions that sell. " />
            <Button color="blue" className=" bg-custom-accent dark:bg-dark-accent hover:bg-dark-accent dark:hover:bg-custom-accent text-dark-textPrimary">
                Get started
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.0} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
            </Button>
            <div className="w-full md:w-4/5 h-[60svh] md:h-[80svh] flex items-center justify-center rounded-xl bg-gray-900 ">

            </div>
        </ContainerComponents>
    );
}
