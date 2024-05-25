import { Dispatch, MutableRefObject, SetStateAction } from "react";

interface PriceCardProps {
  percentSaved: string;
  isYearly: boolean;
  subscriptionPrice: string;
  planDetails: any;
  reference: MutableRefObject<null>;
  setModalWaitListOpen: Dispatch<SetStateAction<boolean>>;
}

export default function PriceCard({ percentSaved, isYearly, subscriptionPrice, planDetails, reference, setModalWaitListOpen }: PriceCardProps) {
  return (
    <div className="w-full h-auto flex flex-col rounded-lg p-5 gap-y-5 bg-custom-elevation dark:bg-dark-elevation2 border border-custom-borderColor dark:border-dark-borderColorxw" ref={reference}>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-y-3">
        <p className="text-2xl font-semibold text-custom-textPrimaryGray dark:text-dark-textPrimaryGray">
          {planDetails.title}
        </p>
        {isYearly && <p className="text-md font-medium text-green-700 bg-green-300 px-4 py-1 rounded-full">Save {percentSaved}%</p>}
      </div>
      <div className="flex items-center justify-start gap-x-3">
        <p className="text-3xl font-semibold text-custom-textPrimaryGray dark:text-dark-textPrimaryGray">€{subscriptionPrice}</p>
        <p className="max-w-[50%] text-sm font-light text-custom-textSecondaryGray dark:text-dark-textSecondaryGray">
          {isYearly ? planDetails.yearly : planDetails.monthly}
        </p>
      </div>
      <p className="text-md font-light text-clip text-custom-textSecondaryGray dark:text-dark-textSecondaryGray">{planDetails.description}</p>
      <button
        onClick={() => setModalWaitListOpen(true)}
        type="button"
        className="text-dark-textPrimaryGray bg-custom-solidColor dark:bg-dark-solidColor hover:bg-custom-hoverColor dark:hover:bg-dark-hoverColor font-semibold rounded-lg text-sm px-5 py-2.5">
        {planDetails.button}
      </button>
      <ul className="text-custom-textSecondaryGray dark:text-dark-textSecondaryGray flex flex-col gap-y-5 font-light">
        {planDetails.points.map((point: string, index: number) => (
          <li className="flex gap-x-2" key={index}>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
              </svg>
            </span>{point}
          </li>
        ))}
      </ul>
    </div>
  );
}
