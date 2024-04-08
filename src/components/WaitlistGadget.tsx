import { useEffect, useRef } from "react";
//GSAP
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

interface WaitlistGadgetProps {
    mdWidth?: string;
    buttonColor?: string;
}

export default function WaitlistGadget({ mdWidth, buttonColor }: WaitlistGadgetProps) {

    const inputRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        const input = inputRef.current;
        const button = buttonRef.current;
        gsap.fromTo(input, { opacity: 0 }, { opacity: 1, duration: 1.5, scrollTrigger: { trigger: input }, delay: 1 });
        gsap.fromTo(button, { opacity: 0 }, { opacity: 1, duration: 1.5, scrollTrigger: { trigger: button }, delay: 1.2 });
    }, []);

    return (
        <form className={`flex items-center w-full flex-wrap md:flex-nowrap gap-y-3 ${mdWidth ? mdWidth : 'md:w-2/6'}`}>
            <label htmlFor="simple-search" className="sr-only">Search</label>
            <div className="relative w-full" ref={inputRef}>
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                        <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                    </svg>
                </div>
                <input
                    type="email"
                    id="email-input"
                    className="bg-custom-background border border-custom-border text-custom-textPrimary text-sm rounded-lg focus:border-custom-accent block w-full ps-10 py-3 px-5 dark:placeholder-gray-400"
                    placeholder="name@describify.com"
                    required />
            </div>
            <button
                ref={buttonRef}
                type="submit"
                className={`w-full md:w-min py-3 px-5 md:ms-2 text-sm font-medium text-dark-textPrimary rounded-lg border ${buttonColor ? buttonColor : 'bg-custom-accent dark:bg-dark-accent border-custom-accent dark:border-dark-accent hover:bg-dark-accent dark:hover:bg-custom-accent'}`}>
                Subscibe
            </button>
        </form>

    )
}
