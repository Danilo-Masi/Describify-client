interface FeaturesStepProps {
    order1?: string;
    order2?: string;
}

export default function FeaturesStep({ order1, order2 }: FeaturesStepProps) {
    return (
        <div className="w-full flex flex-col md:flex-row gap-y-10 gap-x-5">
            {/* Features text */}
            <div className={`w-full md:w-1/2 flex flex-col items-center justify-center gap-y-5 text-center  ${order1}`}>
                <h1 className="text-2xl font-semibold text-custom-textPrimaryGray dark:text-dark-textPrimaryGray text-balance">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus fermentum.</h1>
                <p className="text-sm font-light text-custom-textSecondaryGray dark:text-dark-textSecondaryGray text-balance">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam elementum felis sit amet massa efficitur auctor. Duis nisl eros, elementum non orci vel, porttitor mollis nunc. Nulla nec luctus nunc.</p>
            </div>
            {/* Features img */}
            <div className={`w-full md:w-1/2 h-[60svh] flex items-center justify-center bg-custom-elevation2 dark:bg-dark-elevation2 rounded-xl ${order2}`}>

            </div>
        </div>
    )
}
