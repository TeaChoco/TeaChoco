import type { CharacterTier } from '~/types/favorites';

/** Visual style (label + Tailwind color classes) for each tier, matching the reference board. */
export const TIER_STYLES: Record<CharacterTier, { label: string; bg: string; text: string }> = {
    ssss: { label: 'SSSS', bg: 'bg-linear-to-r from-pink-300 via-rose-300 to-pink-400', text: 'text-slate-900' },
    sss: { label: 'SSS', bg: 'bg-linear-to-r from-violet-300 via-purple-300 to-fuchsia-300', text: 'text-slate-900' },
    ss: { label: 'SS', bg: 'bg-linear-to-r from-cyan-300 via-sky-300 to-blue-300', text: 'text-slate-900' },
    s: { label: 'S', bg: 'bg-linear-to-r from-emerald-300 via-teal-300 to-cyan-300', text: 'text-slate-900' },
    a: { label: 'A', bg: 'bg-linear-to-r from-lime-300 via-green-300 to-emerald-300', text: 'text-slate-900' },
    b: { label: 'B', bg: 'bg-linear-to-r from-yellow-200 via-amber-300 to-orange-300', text: 'text-slate-900' },
    c: { label: 'C', bg: 'bg-linear-to-r from-orange-300 via-red-300 to-rose-300', text: 'text-slate-900' },
    d: { label: 'D', bg: 'bg-linear-to-r from-slate-300 via-slate-400 to-slate-500', text: 'text-slate-900' },
    f: { label: 'F', bg: 'bg-linear-to-r from-zinc-400 via-zinc-600 to-zinc-800', text: 'text-white' },
};
