// -Path: 'TeaChoco-Portfolio/client/app/pages/about/content/experience/TimelineEntry.tsx'
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { CATEGORIES } from '~/data/about/experience';
import { formatEventDate } from '~/utils/experience';
import { FaCalendarDays, FaStar } from 'react-icons/fa6';
import type { ExperienceEvent } from '~/types/experience';

interface TimelineEntryProps {
    event: ExperienceEvent;
    index: number;
}

/** A single milestone card with category badge, title, optional date and tech tags. */
export default function TimelineEntry({ event, index }: TimelineEntryProps) {
    const { t, i18n } = useTranslation();
    const dateLabel = formatEventDate(event, i18n.language);
    const { icon: Icon, badge } = CATEGORIES[event.category[0]];

    return (
        <motion.article
            layout
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.35, delay: index * 0.04, ease: 'easeOut' }}
            className={`card relative flex items-start gap-3 overflow-hidden ${
                event.highlight
                    ? 'border-primary/40 ring-1 ring-primary/25 bg-linear-to-br from-primary/10 via-transparent to-secondary/10 shadow-lg shadow-primary/20'
                    : ''
            }`}
        >
            {/* Accent bar marking a highlighted milestone. */}
            {event.highlight && (
                <span className='absolute inset-y-0 left-0 w-1 bg-linear-to-b from-primary via-secondary to-accent' />
            )}

            <span
                className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border ${badge} ${
                    event.highlight ? 'shadow-lg shadow-primary/30' : ''
                }`}
            >
                <Icon />
            </span>

            <div className='min-w-0 flex-1'>
                <div className='flex flex-wrap items-center gap-2 mb-1'>
                    <span className='inline-flex items-center gap-1.5 text-xs font-mono text-primary px-2 py-0.5 rounded bg-primary/10 border border-primary/20'>
                        <FaCalendarDays className='text-[0.7rem]' />
                        {dateLabel}
                    </span>
                    {event.category.map((categoryId) => {
                        const category = CATEGORIES[categoryId];
                        return (
                            <span
                                key={categoryId}
                                className={`text-[0.65rem] uppercase tracking-wider font-semibold px-2 py-0.5 rounded border ${category.badge}`}
                            >
                                {t(category.labelKey)}
                            </span>
                        );
                    })}
                    {event.highlight && (
                        <span className='inline-flex items-center gap-1 text-[0.65rem] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-linear-to-r from-primary/20 to-secondary/20 text-primary border border-primary/30'>
                            <FaStar className='text-[0.6rem]' />
                            {t('about.highlight')}
                        </span>
                    )}
                </div>

                <h3
                    className={`font-bold text-surface-foreground ${
                        event.highlight ? 'linear-text inline-block' : ''
                    }`}
                >
                    {t(`about.timeline.${event.id}`)}
                </h3>

                {event.tags && (
                    <ul className='flex flex-wrap gap-1.5 mt-2'>
                        {event.tags.map((tag) => (
                            <li
                                key={tag}
                                className='text-xs px-2 py-0.5 rounded-md bg-surface-overlay text-surface-subtle border border-border'
                            >
                                {tag}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </motion.article>
    );
}
