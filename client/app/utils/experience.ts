// -Path: 'TeaChoco-Portfolio/client/app/utils/experience.ts'
import type { ExperienceEvent, YearGroup } from '../types/experience';

/**
 * Groups events by year, oldest year first (chronological).
 * Inside a year, events are sorted by month oldest first; unknown months go last.
 */
export function groupByYear(events: ExperienceEvent[]): YearGroup[] {
    const map = new Map<number, ExperienceEvent[]>();

    for (const event of events) {
        map.set(event.year, [...(map.get(event.year) ?? []), event]);
    }

    return [...map.entries()]
        .sort(([a], [b]) => a - b)
        .map(([year, list]) => ({
            year,
            events: [...list].sort((a, b) => (a.month ?? 13) - (b.month ?? 13)),
        }));
}

/**
 * Formats an event into a short localized date label.
 * Year-only when the month is unknown, month + year when the day is unknown, else the full date.
 */
export function formatEventDate(event: ExperienceEvent, locale: string): string {
    if (!event.month) return String(event.year);

    const date = new Date(event.year, event.month - 1, event.day ?? 1);
    const options: Intl.DateTimeFormatOptions = event.day
        ? { day: 'numeric', month: 'short', year: 'numeric' }
        : { month: 'short', year: 'numeric' };

    return date.toLocaleDateString(locale, options);
}
