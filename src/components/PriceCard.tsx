export default function PriceCard() {
  return (
    <div className="w-full h-auto flex flex-col rounded-lg p-5 gap-y-5 bg-custom-elevation dark:bg-dark-elevation2 border border-custom-borderColor dark:border-dark-borderColor">
      <p className="text-2xl font-semibold text-custom-textPrimaryGray dark:text-dark-textPrimaryGray">Free</p>
      <p className="text-xl font-semibold text-custom-textPrimaryGray dark:text-dark-textPrimaryGray">$0
        <span className="text-md font-medium text-custom-textSecondaryGray dark:text-dark-textSecondaryGray"> / month</span>
      </p>
      <p className="text-md font-medium text-custom-textSecondaryGray dark:text-dark-textSecondaryGray">sdjbdsj sdnbdsjbnds dsbnadsjn jdajdasbj jbaj</p>
      <button
        type="button"
        className="text-dark-textPrimaryGray bg-custom-solidColor dark:bg-dark-solidColor hover:bg-custom-hoverColor dark:hover:bg-dark-hoverColor font-medium rounded-lg text-sm px-5 py-2.5">
        Abbonati
      </button>
    </div>
  );
}
