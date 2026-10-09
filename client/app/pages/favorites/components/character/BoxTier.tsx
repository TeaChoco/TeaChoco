import clsx from 'clsx';

export default function BoxTier({
    className,
    children,
    title,
}: {
    className?: string;
    children?: React.ReactNode;
    title?: string;
}) {
    return (
        <div
            title={title}
            className={clsx(
                'relative overflow-hidden flex w-12 sm:w-16 lg:w-20 shrink-0 items-center justify-center text-sm sm:text-lg lg:text-xl font-extrabold border border-border rounded sm:rounded-sm md:rounded-md',
                className,
            )}
        >
            {children}
        </div>
    );
}
