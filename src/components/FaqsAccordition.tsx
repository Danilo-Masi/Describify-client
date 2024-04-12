import { useEffect, useState } from "react";
//Flowbite
import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";
//Data
import { questionsEn } from "../data/questions_en";
import { questionsIt } from "../data/questions_it";

export default function FaqsAccordition() {

    const [domande, setDomande] = useState(questionsEn);

    useEffect(() => {
        const aggiornaDomande = () => {
            const verificaLingua = localStorage.getItem("language") || "it";
            if (verificaLingua === "en") {
                setDomande(questionsEn);
            } else {
                setDomande(questionsIt);
            }
        };

        aggiornaDomande();

        window.addEventListener('languageChange', aggiornaDomande);

        // Cleanup
        return () => window.removeEventListener('languageChange', aggiornaDomande);
    }, []);

    return (
        <Accordion className="w-full md:w-1/2 bg-custom-elevation dark:bg-dark-elevation border-custom-border dark:border-dark-border">
            {domande && domande.map((domanda, index) => (
                <AccordionPanel key={index}>
                    <AccordionTitle className="text-custom-textPrimary dark:text-dark-textPrimary text-balance">{domanda.title}</AccordionTitle>
                    <AccordionContent className="text-custom-textSecondary dark:text-dark-textSecondary text-balance bg-custom-elevation2 dark:bg-dark-elevation2">
                        <p>{domanda.content}</p>
                    </AccordionContent>
                </AccordionPanel>
            ))}
        </Accordion>
    );
}
