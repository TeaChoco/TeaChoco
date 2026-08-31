//-Path: "TeaChoco-Portfolio/client/src/components/custom/Search.tsx"
import { FaMagnifyingGlass, FaXmark } from 'react-icons/fa6';

interface SearchProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    ariaLabel?: string;
    clearTitle?: string;
    className?: string;
    inputClassName?: string;
}

export default function Search({
    value,
    onChange,
    placeholder,
    ariaLabel,
    clearTitle,
    className = '',
    inputClassName = '',
}: SearchProps) {
    return (
        <div className={`relative ${className}`}>
            <FaMagnifyingGlass
                className='absolute left-3.5 top-1/2 -translate-y-1/2 text-surface-muted pointer-events-none'
                aria-hidden='true'
            />
            <input
                type='text'
                value={value}
                onChange={(event) => onChange(event.target.value)}
                placeholder={placeholder}
                aria-label={ariaLabel}
                className={`w-full pl-10 pr-9 py-3.5 rounded-2xl border border-border bg-surface/20 text-sm text-surface-foreground placeholder:text-surface-muted focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all ${inputClassName}`}
            />
            {value && (
                <button
                    type='button'
                    onClick={() => onChange('')}
                    aria-label={clearTitle}
                    title={clearTitle}
                    className='absolute right-2.5 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full flex items-center justify-center text-surface-muted hover:text-surface-foreground hover:bg-surface-overlay cursor-pointer transition-colors'
                >
                    <FaXmark className='text-xs' />
                </button>
            )}
        </div>
    );
}
