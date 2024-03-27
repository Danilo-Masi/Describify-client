interface FeaturesStepProps {
    order1?: string;
    order2?: string;
}

export default function FeaturesStep({ order1, order2 }: FeaturesStepProps) {
    return (
        <div className="w-full flex flex-col md:flex-row gap-5">
            {/* Features text */}
            <div className={`w-full md:w-1/2 flex flex-col gap-3 text-center md:text-start ${order1}`}>
                <h1 className="text-2xl font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus fermentum.</h1>
                <p className="text-sm font-light text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam elementum felis sit amet massa efficitur auctor. Duis nisl eros, elementum non orci vel, porttitor mollis nunc. Nulla nec luctus nunc.</p>
            </div>
            {/* Features img */}
            <div className={`w-full md:w-1/2 h-[40svh] flex items-center justify-center bg-green-500 ${order2}`}>

            </div>
        </div>
    )
}
