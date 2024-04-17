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
        <Accordion className="w-full md:w-1/2 border border-custom-borderGray dark:border-dark-borderGray">
            {domande && domande.map((domanda, index) => (
                <AccordionPanel key={index}>
                    <AccordionTitle className="text-custom-textPrimaryGray dark:text-dark-textPrimaryGray text-balance bg-custom-elevation dark:bg-dark-elevation hover:bg-custom-elevation3 dark:hover:bg-dark-elevation3 focus:ring-0">{domanda.title}</AccordionTitle>
                    <AccordionContent className="text-custom-textSecondaryGray dark:text-dark-textSecondaryGray text-balance bg-custom-elevation3 dark:bg-dark-elevation3">
                        <p>{domanda.content}</p>
                    </AccordionContent>
                </AccordionPanel>
            ))}
        </Accordion>
    );
}
