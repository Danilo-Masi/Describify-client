//Flowbite
import { Button } from "flowbite-react";
//Components
import { ContainerComponents } from "./Layout";
import Intestazione from "./Intestazione";

export default function Hero() {
    return (
        <ContainerComponents>
            <Intestazione
                badgeValue="A project by Danilo Masi"
                titleValue="Value your time and increse your sell online"
                descriptionValue="You can create easily and fast a complete description for your announce with the power of AI. What are you waiting for?Do it now. " />
            <Button color="blue">
                Get started
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.0} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
            </Button>
            <div className="w-[90%] md:w-3/4 h-[60svh] md:h-[80svh] flex items-center justify-center rounded-xl bg-gray-900 ">

            </div>
        </ContainerComponents>
    );
}
