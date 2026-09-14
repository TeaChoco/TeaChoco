//-Path: "TeaChoco-Portfolio/client/src/pages/contact/content/ContactMethod.tsx"
import { FaArrowUpRightFromSquare, FaCheck, FaCopy } from 'react-icons/fa6';
import type { ContactMethod as ContactMethodType } from '~/types/contact';

export default function ContactMethod({
    method,
    copied,
    onCopy,
}: {
    method: ContactMethodType;
    copied: boolean;
    onCopy: () => void;
}) {
    const { icon: Icon, label, value, href, color } = method;

    return (
        <div className='group/method flex items-center gap-3 rounded-xl border border-border bg-surface-overlay/50 p-2.5 transition-all hover:border-primary/50 hover:bg-surface-overlay'>
            <a
                href={href}
                {...(href ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className='flex min-w-0 flex-1 items-center gap-3'
            >
                <span
                    className='grid size-10 shrink-0 place-items-center rounded-lg bg-surface-sunken transition-colors'
                    style={color ? { color, boxShadow: `inset 0 0 0 1px ${color}33` } : undefined}
                    aria-hidden='true'
                >
                    <Icon />
                </span>

                <span className='min-w-0 flex-1'>
                    <span className='block truncate text-sm font-semibold text-surface-foreground transition-colors group-hover/method:text-primary'>
                        {label}
                    </span>
                    <span className='block truncate text-xs text-surface-muted' title={value}>
                        {value}
                    </span>
                </span>
            </a>

            <div className='flex shrink-0 items-center gap-1'>
                <button
                    type='button'
                    onClick={onCopy}
                    aria-label={`Copy ${label}`}
                    title='Copy to clipboard'
                    className='grid size-8 place-items-center rounded-lg text-surface-muted transition-colors hover:text-primary'
                >
                    {copied ? (
                        <FaCheck className='text-xs text-primary' aria-hidden='true' />
                    ) : (
                        <FaCopy className='text-xs' aria-hidden='true' />
                    )}
                </button>

                {href && (
                    <FaArrowUpRightFromSquare
                        className='size-3 text-surface-muted/70 transition-colors group-hover/method:text-primary'
                        aria-hidden='true'
                    />
                )}
            </div>
        </div>
    );
}
