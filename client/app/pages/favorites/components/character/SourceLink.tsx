// -Path: 'TeaChoco-Portfolio/client/app/pages/favorites/components/character/SourceLink.tsx'
import { Link } from '~/i18n/routing';
import type { IconType } from 'react-icons';
import { LANG_FLAG } from '../card/MediaBits';
import type { DataItem } from '~/types/favorites';
import { languageFlags } from '~/data/languageIcon';
import { FaGamepad, FaClapperboard } from 'react-icons/fa6';

interface SourceLinkProps {
    kind: 'anime' | 'game';
    source: DataItem;
}

/**
 * Links a character source to its category page and opens the detail modal.
 */
export default function SourceLink({ kind, source }: SourceLinkProps) {
    const Icon = kind === 'anime' ? FaClapperboard : FaGamepad;
    const labels = Object.entries(source.names).filter(
        (entry): entry is [string, string] => Boolean(entry[1]),
    );

    return (
        <Link
            to={`/favorites/${kind}?item=${source.id}`}
            onClick={() => window.scrollTo(0, 0)}
            title={Object.values(source.names)[0]}
            className='inline-flex max-w-48 min-w-0 items-center gap-1.5 rounded-full border border-border bg-surface-overlay/50 px-2 py-0.5 transition-colors hover:border-primary hover:text-primary'
        >
            <Icon className='shrink-0' aria-hidden='true' />
            <span className='truncate'>
                {labels.map(([lang, name], index) => {
                    const Flag: IconType | undefined = languageFlags[LANG_FLAG[lang]];
                    return (
                        <span key={lang}>
                            {index > 0 ? (
                                <span className='mx-1 opacity-50' aria-hidden='true'>
                                    ·
                                </span>
                            ) : null}
                            {Flag ? (
                                <Flag
                                    className='mr-1 inline h-3 w-4 align-[-1px] rounded-xs'
                                    aria-hidden='true'
                                />
                            ) : null}
                            <span>{name}</span>
                        </span>
                    );
                })}
            </span>
        </Link>
    );
}
