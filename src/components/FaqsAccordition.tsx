//Flowbite
import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";
//Data
import { questions } from "../data/questions";

export default function FaqsAccordition() {
    return (
        <Accordion className="w-full md:w-1/2">
            {questions && questions.map((domanda, index) => (
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
