// -Path: 'TeaChoco-Portfolio/client/app/data/about/setup-meta.ts'
import type { GearItem } from '~/types/setup';
import type { DeviceStatus } from '~/types/setup';

/** Icon and i18n label for each gear category. */
export const GEAR_CATEGORY_META: Record<GearItem['category'], { icon: string; labelKey: string }> = {
    monitor: { icon: '🖥️', labelKey: 'about.setup.gear.cat.monitor' },
    microphone: { icon: '🎤', labelKey: 'about.setup.gear.cat.microphone' },
    keyboard: { icon: '⌨️', labelKey: 'about.setup.gear.cat.keyboard' },
    mouse: { icon: '🖱️', labelKey: 'about.setup.gear.cat.mouse' },
    headset: { icon: '🎧', labelKey: 'about.setup.gear.cat.headset' },
    other: { icon: '✨', labelKey: 'about.setup.gear.cat.other' },
};

/** Maps a gear color name to design-token classes for its icon badge and color dot. */
export const GEAR_COLOR: Record<string, { dot: string; badge: string }> = {
    pink: {
        dot: 'bg-secondary',
        badge: 'bg-secondary/10 text-secondary border-secondary/20',
    },
};

/** Visual configuration of a device status. Class names are static so Tailwind can detect them. */
interface StatusMeta {
    labelKey: string;
    /** Text color token class. */
    color: string;
    /** Classes for the status pill. */
    pill: string;
}

/** Label and styling for each device status. */
export const STATUS_META: Record<DeviceStatus, StatusMeta> = {
    current: {
        labelKey: 'about.setup.status.current',
        color: 'text-success',
        pill: 'bg-success/10 text-success border-success/30',
    },
    retired: {
        labelKey: 'about.setup.status.retired',
        color: 'text-warning',
        pill: 'bg-warning/10 text-warning border-warning/30',
    },
    broken: {
        labelKey: 'about.setup.status.broken',
        color: 'text-error',
        pill: 'bg-error/10 text-error border-error/30',
    },
};

/** Spec label keys promoted to the hero highlight tiles, in display order. */
export const PRIMARY_SPEC_KEYS = [
    'about.setup.spec.cpu',
    'about.setup.spec.gpu',
    'about.setup.spec.ram',
    'about.setup.spec.storage',
] as const;
