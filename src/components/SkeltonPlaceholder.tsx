interface SkeltonPlaceholderProps {
    skeletonStyle: string;
}

export default function SkeltonPlaceholder({ skeletonStyle }: SkeltonPlaceholderProps) {
    return (
        <div
            role="status"
            className={`w-full flex items-center justify-center rounded-lg animate-pulse bg-custom-elevation4 dark:bg-dark-elevation4 ${skeletonStyle}`}>
            <span className="sr-only">Loading...</span>
        </div>
    );
}
