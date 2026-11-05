// -Path: 'TeaChoco-Portfolio/client/app/pages/favorites/components/character/CharacterDetailsCard.tsx'
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { TIER_STYLES } from '~/constants/Tier';
import Rating from '~/components/custom/Rating';
import SourceLink from './SourceLink';
import { useRandomImage } from '../../hooks/useRandomImage';
import { useCharacterSources } from '../../hooks/useCharacterSources';
import CharacterGallery, { CharacterPlaceholder } from './CharacterGallery';
import type { CharacterItem, CharacterRating, CharacterTier } from '~/types/favorites';

type RatingKey = keyof CharacterRating;

const RATING_KEYS: RatingKey[] = ['appearance', 'nature', 'voice', 'warm'];

interface CharacterDetailsCardProps {
    character: CharacterItem;
    variant?: 'mini' | 'full';
}

/**
 * Character tier badge with the tier label and colour from `TIER_STYLES`.
 */
function TierBadge({ tier, label }: { tier: CharacterTier; label: string }) {
    const style = TIER_STYLES[tier];
    return (
        <span
            className={clsx(
                'inline-flex items-center rounded border border-black/10 px-2 py-0.5 text-xs font-extrabold whitespace-nowrap',
                style.bg,
                style.text,
            )}
        >
            {label} {style.label}
        </span>
    );
}

/**
 * One rating row: label on the left, stars and value on the right.
 */
function RatingStars({ label, value }: { label: string; value: number }) {
    return (
        <div className='flex items-center justify-between gap-2'>
            <span className='shrink-0 text-xs text-surface-subtle'>{label}</span>
            <Rating type='star' rating={value} max={5} showNumber />
        </div>
    );
}

/**
 * Links that point back to the anime/game category page of this character.
 */
function SourceChip({ character }: { character: CharacterItem }) {
    const getSources = useCharacterSources();
    const { anime, game } = getSources(character.from);
    if (!anime && !game) return null;

    return (
        <span className='inline-flex flex-wrap items-center gap-1.5 text-xs text-surface-subtle'>
            {anime ? <SourceLink kind='anime' source={anime} /> : null}
            {game ? <SourceLink kind='game' source={game} /> : null}
        </span>
    );
}

/**
 * Character details in two layouts: a compact hover card (`mini`) and the full
 * responsive detail body used by the character modal.
 */
export default function CharacterDetailsCard({
    character,
    variant = 'full',
}: CharacterDetailsCardProps) {
    const { t } = useTranslation();
    const images = character.images ?? [];
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
        const { image } = useRandomImage(images);
        return (
            <div className='w-60 max-w-[calc(100vw-2rem)] rounded-xl border border-border bg-surface-elevated p-3 shadow-xl shadow-black/10'>
                <div className='flex items-center gap-2.5'>
                    <div className='h-12 w-12 shrink-0 overflow-hidden rounded-md border border-border'>
                        {image ? (
                            <img
                                src={image}
                                alt={character.name}
                                className='h-full w-full object-cover'
                            />
                        ) : (
                            <CharacterPlaceholder
                                name={character.name.slice(0, 2)}
                                className='h-full w-full text-[10px]'
                            />
                        )}
                    </div>
                    <div className='flex min-w-0 flex-col gap-0.5'>
                        <span className='truncate text-sm leading-tight font-semibold'>
                            {character.name}
                        </span>
                        <SourceChip character={character} />
                    </div>
                </div>

                <div className='mt-2.5 flex flex-wrap gap-1.5'>
                    <TierBadge
                        tier={character.tier.favorite}
                        label={t('favorites.tier.favorite')}
                    />
                    <TierBadge tier={character.tier.waifu} label={t('favorites.tier.waifu')} />
                </div>

                {ratedKeys.length > 0 && (
                    <div className='mt-3 flex flex-col gap-2'>
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

    return (
        <div className='flex flex-col gap-5'>
            <header className='flex flex-col gap-2'>
                <h3 className='text-xl leading-tight font-bold sm:text-2xl'>{character.name}</h3>
                <SourceChip character={character} />
                <div className='flex flex-wrap gap-1.5'>
                    <TierBadge
                        tier={character.tier.favorite}
                        label={t('favorites.tier.favorite')}
                    />
                    <TierBadge tier={character.tier.waifu} label={t('favorites.tier.waifu')} />
                </div>
            </header>

            <div className='grid gap-4 sm:grid-cols-[minmax(0,18rem)_1fr] sm:gap-5'>
                <CharacterGallery name={character.name} images={images} />

                <div className='flex min-w-0 flex-col gap-4'>
                    {info.length > 0 && (
                        <dl className='grid grid-cols-2 gap-2'>
                            {info.map((row) => (
                                <div
                                    key={row.label}
                                    className='rounded-lg border border-border bg-surface-overlay/40 px-3 py-2'
                                >
                                    <dt className='text-[0.65rem] tracking-wide text-surface-muted uppercase'>
                                        {row.label}
                                    </dt>
                                    <dd className='truncate text-sm font-semibold'>{row.value}</dd>
                                </div>
                            ))}
                        </dl>
                    )}

                    {ratedKeys.length > 0 && (
                        <div className='flex flex-col gap-2 rounded-xl border border-border bg-surface-overlay/40 p-3'>
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
            </div>
        </div>
    );
}
