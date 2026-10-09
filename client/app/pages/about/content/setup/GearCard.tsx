// -Path: 'TeaChoco-Portfolio/client/app/pages/about/content/setup/GearCard.tsx'
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { GEAR_COLOR, GEAR_CATEGORY_META } from '~/data/about/setup-meta';
import type { GearItem } from '~/types/setup';

/** Props for {@link GearCard}. */
interface GearCardProps {
    /** The gear item to display. */
    item: GearItem;
}

/**
 * Card describing a single peripheral with category, color and note.
 *
 * @param props - GearCard props.
 * @returns The rendered gear card.
 */
export default function GearCard({ item }: GearCardProps) {
    const { t } = useTranslation();
    const category = GEAR_CATEGORY_META[item.category];
    const accent = GEAR_COLOR[item.color ?? ''] ?? {
        dot: 'bg-surface-overlay',
        badge: 'bg-surface-overlay text-surface-subtle border-border',
    };

    return (
        <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className='card flex flex-col gap-4'
        >
            <header className='flex items-center gap-3'>
                <span
                    className={`w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0 border ${accent.badge}`}
                    aria-hidden='true'
                >
                    {category.icon}
                </span>
                <div className='min-w-0'>
                    <h3 className='font-bold text-surface-foreground truncate'>{item.name}</h3>
                    <p className='text-xs text-surface-subtle truncate'>
                        {item.brand}
                        {item.model ? ` ${item.model}` : ''}
                    </p>
                </div>
            </header>

            <div className='flex items-center justify-between gap-2'>
                <span className='text-[0.65rem] uppercase tracking-wider font-semibold text-surface-muted'>
                    {t(category.labelKey)}
                </span>
                <span
                    className={`w-3.5 h-3.5 rounded-full shrink-0 ring-2 ring-surface-overlay ${accent.dot}`}
                    aria-hidden='true'
                />
            </div>

            {item.noteKey && <p className='text-sm text-surface-subtle'>{t(item.noteKey)}</p>}
        </motion.article>
    );
}
