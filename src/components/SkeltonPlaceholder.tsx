export default function SkeltonPlaceholder({ skeletonStyle }: { skeletonStyle: string; }) {
    return (
        <div className={`w-full flex flex-col items-start justify-between gap-y-5 p-5 rounded-lg dark:bg-dark-elevation4 animate-pulse ${skeletonStyle}`}>
            <div className="w-full flex items-center justify-between">
                <div className="h-6 w-1/2 dark:bg-dark-elevation2 rounded"></div>
                <div className="w-fit flex items-center justify-center gap-x-3 py-2.5 px-3 dark:bg-dark-elevation2 rounded-xl">
                    <div className="h-4 w-12 dark:bg-dark-elevation4 rounded"></div>
                    <svg className="w-5 h-5"></svg>
                </div>
            </div>
            <div className="w-full h-40 dark:bg-dark-elevation2 rounded">
            </div>
        </div>
    );
}
