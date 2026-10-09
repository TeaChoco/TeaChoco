// -Path: 'TeaChoco-Portfolio/client/app/pages/about/content/experience/EraSection.tsx'
import { motion } from 'framer-motion';
import TimelineEntry from './TimelineEntry';
import { useTranslation } from 'react-i18next';
import type { EraView } from '../../../../types/experience';

interface EraSectionProps {
    era: EraView;
    /** Marks the newest era so its latest year gets the pulsing node. */
    isLatest?: boolean;
}

/** An era header followed by its milestones, grouped by year on a timeline spine. */
export default function EraSection({ era, isLatest }: EraSectionProps) {
    const { t } = useTranslation();

    return (
        <motion.section
            layout
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className='relative'
        >
            <div className='flex items-center gap-3'>
                <span className='text-3xl'>{era.emoji}</span>
                <div>
                    <h3 className='text-xl font-bold linear-text inline-block'>
                        {t(era.titleKey)}
                    </h3>
                    <p className='text-sm font-medium text-primary'>{era.yearRange}</p>
                </div>
            </div>

            <p className='text-sm text-surface-subtle mt-2 mb-4'>{t(era.descKey)}</p>

            <div className='relative'>
                {/* Gradient spine revealed as the era scrolls into view. */}
                <motion.span
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className='absolute left-4 top-2 bottom-2 w-0.5 origin-top rounded-full bg-linear-to-b from-primary via-primary/40 to-transparent'
                />

                {era.groups.map((group, gi) => (
                    <div key={group.year} className='relative pl-12 pb-8 last:pb-0'>
                        <span className='absolute left-4 top-1.5 -translate-x-1/2 block w-3.5 h-3.5'>
                            {isLatest && gi === era.groups.length - 1 && (
                                <span className='absolute -inset-0.5 rounded-full bg-primary/40 animate-ping' />
                            )}
                            <span className='relative block w-full h-full rounded-full bg-linear-to-r from-primary to-secondary ring-4 ring-surface-overlay shadow-lg shadow-primary/40' />
                        </span>

                        <motion.h4
                            viewport={{ once: true }}
                            initial={{ opacity: 0, y: 8 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className='linear-text inline-block text-2xl font-extrabold mb-3'
                        >
                            {group.year}
                        </motion.h4>

                        <div className='flex flex-col gap-3'>
                            {group.events.map((event, idx) => (
                                <TimelineEntry key={event.id} event={event} index={idx} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </motion.section>
    );
}
