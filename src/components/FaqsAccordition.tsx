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
            const verificaLingua = localStorage.getItem("language") || "en";
            if (verificaLingua === "en") {
                setDomande(questionsEn);
            } else {
                setDomande(questionsIt);
            }
        };

        aggiornaDomande();

        // Opzionalmente, puoi ascoltare gli eventi di cambio della lingua se prevedi
        // che la lingua possa cambiare mentre il componente è montato
        window.addEventListener('languageChange', aggiornaDomande);

        // Cleanup function per rimuovere l'event listener
        return () => {
            window.removeEventListener('languageChange', aggiornaDomande);
        };
    }, []);

    return (
        <Accordion className="w-full md:w-1/2">
            {domande && domande.map((domanda, index) => (
                <AccordionPanel key={index}>
                    <AccordionTitle className="text-custom-textPrimary dark:text-dark-textPrimary text-balance">{domanda.title}</AccordionTitle>
                    <AccordionContent className="text-custom-textSecondary dark:text-dark-textSecondary text-balance">
                        <p>{domanda.content}</p>
                    </AccordionContent>
                </AccordionPanel>
            ))}
        </Accordion>
    );
}
