import { useState } from 'react';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { FaArrowLeft, FaArrowRight, FaClapperboard, FaGamepad, FaShuffle } from 'react-icons/fa6';
import type { CharacterItem, CharacterRating, CharacterTier } from '~/types/favorites';
import { TIER_STYLES } from '~/constants/Tier';
import { useRandomImage } from '../../hooks/useRandomImage';
import { langTextLabels } from '../../hooks/useLocalizedText';
import Rating from '~/components/custom/Rating';

type RatingKey = keyof CharacterRating;

const RATING_KEYS: RatingKey[] = ['appearance', 'nature', 'voice', 'warm'];

interface CharacterDetailsCardProps {
    character: CharacterItem;
    variant?: 'mini' | 'full';
}

function TierBadge({ tier, label }: { tier: CharacterTier; label: string }) {
    const style = TIER_STYLES[tier];
    return (
        <span
            className={clsx(
                'inline-flex items-center px-2 py-0.5 rounded text-xs font-extrabold border border-black/10 whitespace-nowrap',
                style.bg,
                style.text,
            )}
        >
            {label} {style.label}
        </span>
    );
}

function RatingStars({ label, value }: { label: string; value: number }) {
    return (
        <div className='flex items-center justify-between gap-3'>
            <span className='text-xs text-surface-subtle shrink-0'>{label}</span>
            <Rating type='star' rating={value} max={5} showNumber />
        </div>
    );
}

function SourceChip({ character }: { character: CharacterItem }) {
    const animeLabels = langTextLabels(character.from.anime);
    const gameLabels = langTextLabels(character.from.game);
    if (animeLabels.length === 0 && gameLabels.length === 0) return null;

    return (
        <span className='inline-flex flex-wrap items-center gap-x-1.5 gap-y-0.5 text-xs text-surface-subtle'>
            {animeLabels.length > 0 && (
                <span className='inline-flex items-center gap-1'>
                    <FaClapperboard aria-hidden='true' className='shrink-0' />
                    <span className='flex flex-wrap gap-x-1.5 gap-y-0.5'>
                        {animeLabels.map(({ label }) => (
                            <span key={label} className='whitespace-nowrap'>
                                {label}
                            </span>
                        ))}
                    </span>
                </span>
            )}
            {animeLabels.length > 0 && gameLabels.length > 0 && (
                <span className='opacity-50' aria-hidden='true'>
                    ·
                </span>
            )}
            {gameLabels.length > 0 && (
                <span className='inline-flex items-center gap-1'>
                    <FaGamepad aria-hidden='true' className='shrink-0' />
                    <span className='flex flex-wrap gap-x-1.5 gap-y-0.5'>
                        {gameLabels.map(({ label }) => (
                            <span key={label} className='whitespace-nowrap'>
                                {label}
                            </span>
                        ))}
                    </span>
                </span>
            )}
        </span>
    );
}

function Placeholder({ name, className }: { name: string; className?: string }) {
    return (
        <div
            className={clsx(
                'flex items-center justify-center bg-slate-300 px-2 text-center font-bold text-slate-700',
                className,
            )}
        >
            {name}
        </div>
    );
}

function FadeImage({
    srcs,
    active = 0,
    alt,
    className,
}: {
    srcs: string[];
    active?: number;
    alt: string;
    className?: string;
}) {
    return (
        <div className={clsx('relative overflow-hidden', className)}>
            {srcs.map((src, i) => (
                <img
                    key={src}
                    src={src}
                    alt={alt}
                    aria-hidden={i !== active}
                    className={clsx(
                        'absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-out',
                        i === active ? 'opacity-100' : 'opacity-0',
                    )}
                />
            ))}
        </div>
    );
}

export default function CharacterDetailsCard({
    character,
    variant = 'full',
}: CharacterDetailsCardProps) {
    const { t } = useTranslation();
    const [index, setIndex] = useState(0);
    const images = character.images ?? [];
    const image = images[Math.min(index, Math.max(images.length - 1, 0))];
    const isMini = variant === 'mini';

    const ratedKeys = RATING_KEYS.filter((key) => (character.rating?.[key] ?? 0) > 0);
    const info = [
        character.info?.age != null && {
            label: t('favorites.age'),
            value: `${character.info.age}`,
        },
        character.info?.height != null && {
            label: t('favorites.height'),
            value: `${character.info.height} cm`,
        },
        character.info?.birthday && {
            label: t('favorites.birthday'),
            value: character.info.birthday,
        },
    ].filter((row): row is { label: string; value: string } => Boolean(row));

    if (isMini) {
        const { image: miniImage, index: miniIndex } = useRandomImage(images);
        return (
            <div className='w-60 rounded-xl border border-border bg-surface-elevated shadow-xl shadow-black/10 p-3'>
                <div className='flex items-center gap-2.5'>
                    <div className='w-12 h-12 shrink-0 rounded-md overflow-hidden border border-border'>
                        {miniImage ? (
                            <FadeImage
                                srcs={images}
                                active={miniIndex}
                                alt={character.name}
                                className='w-full h-full'
                            />
                        ) : (
                            <Placeholder
                                name={character.name.slice(0, 2)}
                                className='w-full h-full text-[10px]'
                            />
                        )}
                    </div>
                    <div className='min-w-0 flex flex-col gap-0.5'>
                        <span className='font-semibold text-sm leading-tight truncate'>
                            {character.name}
                        </span>
                        <SourceChip character={character} />
                    </div>
                </div>

                <div className='flex gap-1.5 mt-2.5'>
                    <TierBadge
                        tier={character.tier.favorite}
                        label={t('favorites.tier.favorite')}
                    />
                    <TierBadge tier={character.tier.waifu} label={t('favorites.tier.waifu')} />
                </div>

                {ratedKeys.length > 0 && (
                    <div className='mt-3 flex flex-col gap-2'>
                        {ratedKeys.slice(0, 4).map((key) => (
                            <RatingStars
                                key={key}
                                label={t(`favorites.${key}`)}
                                value={character.rating![key]!}
                            />
                        ))}
                    </div>
                )}
            </div>
        );
    }

    return (
        <div className='flex flex-col gap-4'>
            <div className='grid grid-cols-[auto_1fr] gap-4 sm:grid-cols-[180px_1fr]'>
                <div className='flex flex-col gap-2'>
                    <div className='relative w-28 h-40 sm:w-44 sm:h-56 rounded-lg overflow-hidden border border-border'>
                        {image ? (
                            <>
                                <FadeImage
                                    srcs={images}
                                    active={index}
                                    alt={character.name}
                                    className='absolute inset-0 w-full h-full'
                                />
                                {images.length > 1 && (
                                    <>
                                        <button
                                            type='button'
                                            aria-label='previous'
                                            onClick={() =>
                                                setIndex(
                                                    (index - 1 + images.length) % images.length,
                                                )
                                            }
                                            className='absolute left-1 top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 cursor-pointer'
                                        >
                                            <FaArrowLeft className='text-xs' />
                                        </button>
                                        <button
                                            type='button'
                                            aria-label='next'
                                            onClick={() => setIndex((index + 1) % images.length)}
                                            className='absolute right-1 top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 cursor-pointer'
                                        >
                                            <FaArrowRight className='text-xs' />
                                        </button>
                                        <button
                                            type='button'
                                            aria-label='random'
                                            onClick={() => {
                                                let next = index;
                                                while (next === index && images.length > 1) {
                                                    next = Math.floor(
                                                        Math.random() * images.length,
                                                    );
                                                }
                                                setIndex(next);
                                            }}
                                            className='absolute top-1 right-1/2 translate-x-1/2 z-10 w-7 h-7 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 cursor-pointer'
                                        >
                                            <FaShuffle className='text-xs' />
                                        </button>
                                    </>
                                )}
                            </>
                        ) : (
                            <Placeholder
                                name={character.name}
                                className='absolute inset-0 w-full h-full'
                            />
                        )}
                    </div>

                    {images.length > 1 && (
                        <div className='flex gap-1.5 max-w-[180px] sm:max-w-[220px] overflow-x-auto pb-1'>
                            {images.map((src, i) => (
                                <button
                                    key={src}
                                    type='button'
                                    aria-label={`show image ${i + 1}`}
                                    onClick={() => setIndex(i)}
                                    className={clsx(
                                        'shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-md overflow-hidden border-2 cursor-pointer transition',
                                        i === index
                                            ? 'border-brand ring-1 ring-brand'
                                            : 'border-transparent opacity-70 hover:opacity-100',
                                    )}
                                >
                                    <img src={src} alt='' className='w-full h-full object-cover' />
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                <div className='flex flex-col gap-2'>
                    <h3 className='text-xl font-bold leading-tight'>{character.name}</h3>
                    <SourceChip character={character} />
                    <div className='flex flex-wrap gap-1.5 mt-1'>
                        <TierBadge
                            tier={character.tier.favorite}
                            label={t('favorites.tier.favorite')}
                        />
                        <TierBadge tier={character.tier.waifu} label={t('favorites.tier.waifu')} />
                    </div>

                    {info.length > 0 && (
                        <dl className='mt-2 flex flex-col gap-1 text-sm'>
                            {info.map((row) => (
                                <div key={row.label} className='flex justify-between gap-4'>
                                    <dt className='text-surface-subtle'>{row.label}</dt>
                                    <dd className='font-semibold text-right'>{row.value}</dd>
                                </div>
                            ))}
                        </dl>
                    )}
                </div>
            </div>

            {ratedKeys.length > 0 && (
                <div className='flex flex-col gap-2.5'>
                    {ratedKeys.map((key) => (
                        <RatingStars
                            key={key}
                            label={t(`favorites.${key}`)}
                            value={character.rating![key]!}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
