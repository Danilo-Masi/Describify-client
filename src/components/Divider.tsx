export default function Divider({ dividerStyle }: { dividerStyle?: string; }) {
    return (
        <div className={`w-full border-t border-custom-borderGray dark:border-dark-borderGray ${dividerStyle}`} />
    );
}
