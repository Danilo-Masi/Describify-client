import { useState } from "react";
//Flowbite
import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";
//Data
import { questionsEn } from "../data/questions_en";
import { questionsIt } from "../data/questions_it";

export default function FaqsAccordition() {

    const [domande, setDomande] = useState(questionsEn);

    const aggiornaDomande = () => {
        const verificaLingua = localStorage.getItem("language") || "en";
        if (verificaLingua === "en") {
            setDomande(questionsEn);
        } else {
            setDomande(questionsIt);
        }
    }

    useState(() => {
        aggiornaDomande();
    }, []);

    return (
        <Accordion className="w-full md:w-1/2">
            {domande && domande.map((domanda, index) => (
                <AccordionPanel key={index}>
                    <AccordionTitle className="text-custom-textPrimary dark:text-dark-textPrimary">{domanda.title}</AccordionTitle>
                    <AccordionContent className="text-custom-textSecondary dark:text-dark-textSecondary">
                        <p>{domanda.content}</p>
                    </AccordionContent>
                </AccordionPanel>
            ))}
        </Accordion>
    );
}
