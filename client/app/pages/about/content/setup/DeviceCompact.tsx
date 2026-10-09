// -Path: 'TeaChoco-Portfolio/client/app/pages/about/content/setup/DeviceCompact.tsx'
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion } from 'framer-motion';
import SpecList from './SpecList';
import { cx } from './utils';
import { FaChevronDown } from 'react-icons/fa6';
import { STATUS_META } from '~/data/about/setup-meta';
import type { Device } from '~/types/setup';

/** Props for {@link DeviceCompact}. */
interface DeviceCompactProps {
    /** A non-featured device (retired or broken). */
    device: Device;
}

/**
 * Collapsible one-row card for secondary devices. Specs are revealed on demand.
 *
 * @param props - DeviceCompact props.
 * @returns The rendered compact card.
 */
export default function DeviceCompact({ device }: DeviceCompactProps) {
    const { t } = useTranslation();
    const [open, setOpen] = useState(false);
    const status = STATUS_META[device.status];

    return (
        <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className={cx('card', device.status === 'broken' && 'opacity-80')}
        >
            <button
                type='button'
                aria-expanded={open}
                onClick={() => setOpen((prev) => !prev)}
                className='flex w-full items-center justify-between gap-3 text-left cursor-pointer'
            >
                <div className='min-w-0'>
                    <h3 className='font-bold text-surface-foreground'>{device.name}</h3>
                    <p className='text-xs text-surface-subtle'>
                        {t(device.typeKey)}
                        {device.year ? ` · ${device.year}` : ''}
                    </p>
                </div>

                <div className='flex items-center gap-3 shrink-0'>
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${status.pill}`}>
                        {t(status.labelKey)}
                    </span>
                    <FaChevronDown className={cx('text-xs transition-transform', open && 'rotate-180')} />
                </div>
            </button>

            <AnimatePresence initial={false}>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className='overflow-hidden'
                    >
                        <div className='flex flex-col gap-3 pt-4'>
                            <SpecList specs={device.specs} />
                            {device.noteKey && (
                                <p className='text-sm text-surface-subtle'>{t(device.noteKey)}</p>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.article>
    );
}
