import type { CharacterTier } from '~/types/favorites';

/** Visual style (label + Tailwind color classes) for each tier, matching the reference board. */
export const TIER_STYLES: Record<CharacterTier, { label: string; bg: string; text: string }> = {
    ssss: { label: 'SSSS', bg: 'bg-fuchsia-400', text: 'text-slate-900' },
    sss: { label: 'SSS', bg: 'bg-cyan-400', text: 'text-slate-900' },
    ss: { label: 'SS', bg: 'bg-sky-400', text: 'text-slate-900' },
    s: { label: 'S', bg: 'bg-purple-500', text: 'text-white' },
    a: { label: 'A', bg: 'bg-lime-400', text: 'text-slate-900' },
    b: { label: 'B', bg: 'bg-yellow-300', text: 'text-slate-900' },
    c: { label: 'C', bg: 'bg-orange-400', text: 'text-slate-900' },
    d: { label: 'D', bg: 'bg-red-500', text: 'text-white' },
    f: { label: 'F', bg: 'bg-gray-400', text: 'text-slate-900' },
};
