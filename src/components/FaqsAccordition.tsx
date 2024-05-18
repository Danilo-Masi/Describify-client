import { useEffect, useState } from "react";
//Flowbite-react
import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";
//Utilities
import { useLanguage } from "../utilities/useLanguage";
//Data
import { questions } from "../data/questions";

// Interfaccia per la struttura delle FAQ
interface Faq {
    title: string;
    content: string;
}

export default function FaqsAccordion() {
    const language = useLanguage();
    const [faqs, setFaqs] = useState<Faq[]>([]);

    useEffect(() => {
        setFaqs(questions[language]);
    }, [language]);

    return (
        <Accordion className="w-full md:w-1/2 border border-custom-borderGray dark:border-dark-borderGray mt-10">
            {faqs && faqs.map((faq, index) => (
                <AccordionPanel key={index}>
                    <AccordionTitle className="text-custom-textPrimaryGray dark:text-dark-textPrimaryGray text-balance bg-custom-elevation dark:bg-dark-elevation hover:bg-custom-elevation3 dark:hover:bg-dark-elevation3 focus:ring-0 font-medium">
                        {faq.title}
                    </AccordionTitle>
                    <AccordionContent className="text-custom-textSecondaryGray dark:text-dark-textSecondaryGray text-balance bg-custom-elevation3 dark:bg-dark-elevation3 font-light">
                        <p>{faq.content}</p>
                    </AccordionContent>
                </AccordionPanel>
            ))}
        </Accordion>
    );
}
