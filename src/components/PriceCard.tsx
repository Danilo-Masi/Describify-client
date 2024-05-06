import { Dispatch, SetStateAction } from "react";

interface PriceCardProps {
  setModalWaitListOpen: Dispatch<SetStateAction<boolean>>;
  planDetails: any;
}

export default function PriceCard({ setModalWaitListOpen, planDetails }: PriceCardProps) {
  return (
    <div className="w-full h-auto flex flex-col rounded-lg p-5 gap-y-5 bg-custom-elevation dark:bg-dark-elevation2 border border-custom-borderColor dark:border-dark-borderColor">
      <p className="text-2xl font-semibold text-custom-textPrimaryGray dark:text-dark-textPrimaryGray">{planDetails.title}</p>
      <p className="text-2xl font-semibold text-custom-textPrimaryGray dark:text-dark-textPrimaryGray">${planDetails.prices}
        <span className="text-md font-medium text-custom-textSecondaryGray dark:text-dark-textSecondaryGray"> / {planDetails.month}</span>
      </p>
      <p className="text-md font-medium text-clip text-custom-textSecondaryGray dark:text-dark-textSecondaryGray">{planDetails.description}</p>
      <button
        onClick={() => setModalWaitListOpen(true)}
        type="button"
        className="text-dark-textPrimaryGray bg-custom-solidColor dark:bg-dark-solidColor hover:bg-custom-hoverColor dark:hover:bg-dark-hoverColor font-medium rounded-lg text-sm px-5 py-2.5">
        {planDetails.button}
      </button>
      <ul className="text-custom-textSecondaryGray dark:text-dark-textSecondaryGray flex flex-col gap-y-5">
        <li className="flex gap-x-2">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
            </svg>
          </span>{planDetails.punto1}
        </li>
        <li className="flex gap-x-2">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
            </svg>
          </span>{planDetails.punto2}
        </li>
        <li className="flex gap-x-2">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
            </svg>
          </span>{planDetails.punto3}
        </li>
        <li className="flex gap-x-2">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
            </svg>
          </span>{planDetails.punto4}
        </li>
        <li className="flex gap-x-2">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
            </svg>
          </span>{planDetails.punto5}
        </li>
      </ul>
    </div>
  );
}
