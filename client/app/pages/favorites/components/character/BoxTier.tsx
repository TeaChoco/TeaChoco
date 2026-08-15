import clsx from 'clsx';

export default function BoxTier({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) {
    return (
        <div
            className={clsx(
                'relative overflow-hidden flex w-12 sm:w-16 lg:w-20 shrink-0 items-center justify-center text-sm sm:text-lg lg:text-xl font-extrabold border border-border rounded sm:rounded-sm md:rounded-md',
                className,
            )}
        >
            {children}
        </div>
    );
}
