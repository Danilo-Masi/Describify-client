interface FeaturesStepProps {
    order1?: string;
    order2?: string;
    data: any;
}

export default function FeaturesStep({ order1, order2, data }: FeaturesStepProps) {
    return (
        <div className="w-full flex flex-col md:flex-row gap-y-10 gap-x-5">
            {/* Features text */}
            <div className={`w-full md:w-1/2 flex flex-col items-center justify-center gap-y-5 text-center  ${order1}`}>
                <h1 className="text-4xl font-semibold text-custom-textPrimaryGray dark:text-dark-textPrimaryGray text-balance">{data.title}</h1>
                <p className="text-lg font-light text-custom-textSecondaryGray dark:text-dark-textSecondaryGray text-balance">{data.caption}</p>
            </div>
            {/* Features img */}
            <div className={`w-full md:w-1/2 h-[60svh] flex items-center justify-center bg-custom-elevation2 dark:bg-dark-elevation2 rounded-xl ${order2}`}>

            </div>
        </div>
    )
}
