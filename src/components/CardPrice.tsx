//Flowbite
import { Card } from "flowbite-react";
import { useEffect, useState } from "react";

interface CardPriceProps {
    titlePlan: string;
    pricePlan: number;
    planOptions: { title: string, caption: string }[];
    currentPlan: string;
}

export default function CardPrice({ titlePlan, pricePlan, planOptions, currentPlan }: CardPriceProps) {

    const [buttonDisabled, setButtonDisabled] = useState(false);

    useEffect(() => {
        if (currentPlan.trim() === titlePlan.trim()) {
            setButtonDisabled(true);
        }
    }, []);

    return (
        <Card className='w-full md:w-1/3'>
            <h5 className="text-xl font-medium text-custom-textPrimary dark:text-dark-textPrimary">{titlePlan}</h5>
            <div className="flex items-baseline text-custom-textPrimary dark:text-dark-textPrimary">
                <span className="text-3xl font-semibold">€</span>
                <span className="text-5xl font-extrabold tracking-tight">{pricePlan}</span>
                <span className="ml-1 text-xl font-normal text-custom-textSecondary dark:text-dark-textSecondary">/month</span>
            </div>
            <ul className="my-7 space-y-5" >
                {planOptions.map((option, key) => (

                    <li className="flex space-x-3" key={key}>
                        <svg
                            className="h-5 w-5 shrink-0 text-custom-accent dark:text-dark-accent"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <div className="flex flex-col gap-y-1">
                            <span className="text-base font-normal leading-tight text-custom-textPrimary dark:text-dark-textPrimary">{option.title}</span>
                            <span className="text-base font-light leading-tight text-custom-textSecondary dark:text-dark-textSecondary">{option.caption}</span>
                        </div>
                    </li>

                ))}
            </ul>
            <button
                disabled={buttonDisabled}
                type="button"
                className="inline-flex w-full justify-center rounded-lg px-5 py-2.5 text-center text-sm font-medium focus:outline-none focus:ring-1 text-dark-textPrimary bg-custom-accent hover:bg-dark-accent focus:ring-custom-borderFocus dark:bg-dark-accent dark:hover:bg-custom-accent dark:focus:ring-dark-borderFocus disabled:bg-custom-disabled dark:disabled:bg-dark-disabled dark:disabled:text-dark-textPrimary"
            >
                {buttonDisabled ? 'Current plan' : 'Choose plan'}
            </button>
        </Card>
    )
}
