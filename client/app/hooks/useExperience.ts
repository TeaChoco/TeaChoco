// -Path: 'TeaChoco-Portfolio/client/app/hooks/useExperience.ts'
import { useMemo, useState } from 'react';
import { EXPERIENCE_ERAS } from '../data/about/experience';
import type { CategoryId, EraView } from '../types/experience';
import { groupByYear } from '../utils/experience';

/** Active filter value. `all` disables filtering. */
export type ExperienceFilter = CategoryId | 'all';

/** Result returned by {@link useExperience}. */
interface UseExperienceResult {
    filter: ExperienceFilter;
    setFilter: (filter: ExperienceFilter) => void;
    /** Eras with filtered, year-grouped events; empty eras are removed. */
    eras: EraView[];
    /** Number of events per category, used for the filter chip counters. */
    counts: Record<ExperienceFilter, number>;
}

/** Provides filtered, era-grouped experience data and the current filter state. */
export function useExperience(): UseExperienceResult {
    const [filter, setFilter] = useState<ExperienceFilter>('all');

    const eras = useMemo<EraView[]>(() => {
        return EXPERIENCE_ERAS.map((era) => {
            const visible =
                filter === 'all' ? era.events : era.events.filter((e) => e.category.includes(filter));
            return {
                id: era.id,
                emoji: era.emoji,
                yearRange: era.yearRange,
                titleKey: era.titleKey,
                descKey: era.descKey,
                groups: groupByYear(visible),
            };
        }).filter((era) => era.groups.length > 0);
    }, [filter]);

    const counts = useMemo(() => {
        const result = { all: 0 } as Record<ExperienceFilter, number>;
        for (const era of EXPERIENCE_ERAS) {
            for (const event of era.events) {
                result.all += 1;
                for (const category of event.category) {
                    result[category] = (result[category] ?? 0) + 1;
                }
            }
        }
        return result;
    }, []);

    return { filter, setFilter, eras, counts };
}
