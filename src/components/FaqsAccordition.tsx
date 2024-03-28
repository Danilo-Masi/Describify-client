//Flowbite
import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";
//Data
import { questions } from "../data/questions";

export default function FaqsAccordition() {
    return (
        <Accordion className="w-[90%] md:w-1/2">
            {questions && questions.map((domanda, index) => (
                <AccordionPanel key={index}>
                    <AccordionTitle>{domanda.title}</AccordionTitle>
                    <AccordionContent>
                        <p>{domanda.content}</p>
                    </AccordionContent>
                </AccordionPanel>
            ))}
        </Accordion>
    );
}
