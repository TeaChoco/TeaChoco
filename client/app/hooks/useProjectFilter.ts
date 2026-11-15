// -Path: 'TeaChoco-Portfolio/client/app/hooks/useProjectFilter.ts'
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import type { Project } from '~/types/projects';
import type { CategoryKeys } from '~/types/category';
import { projects as allProjects } from '~/data/projects';

/** Sort order applied to the portfolio grid. */
export type ProjectSort = 'default' | 'name' | 'tags' | 'live';

/** State and derived list returned by {@link useProjectFilter}. */
interface UseProjectFilterResult {
    query: string;
    sort: ProjectSort;
    projects: Project[];
    isFiltering: boolean;
    category: CategoryKeys;
    setQuery: (query: string) => void;
    setSort: (sort: ProjectSort) => void;
    setCategory: (category: CategoryKeys) => void;
}

/** True when the project links to a live site other than the portfolio root. */
const hasLiveSite = (project: Project): boolean => Boolean(project.live) && project.live !== '/';

/**
 * Owns the portfolio list logic: category filter, text search and sorting.
 *
 * @returns Filter state plus the derived project list.
 */
export function useProjectFilter(): UseProjectFilterResult {
    const { t, i18n } = useTranslation();
    const [query, setQuery] = useState('');
    const [sort, setSort] = useState<ProjectSort>('default');
    const [category, setCategory] = useState<CategoryKeys>('all');

    /** Category, query and sort applied to the static project list. */
    const projects = useMemo(() => {
        const needle = query.trim().toLowerCase();

        /** Localized project title, falling back to the project id. */
        const titleOf = (project: Project) =>
            t(`portfolio.projects.${project.key}.title`, { defaultValue: project.id });

        /** Lowercased title, description and tags used for text matching. */
        const searchTextOf = (project: Project) =>
            [
                titleOf(project),
                t(`portfolio.projects.${project.key}.desc`, { defaultValue: '' }),
                ...project.tags,
            ]
                .join(' ')
                .toLowerCase();

        const visible = allProjects
            .filter((project) => category === 'all' || project.categorys.includes(category))
            .filter((project) => needle === '' || searchTextOf(project).includes(needle));

        if (sort === 'name') {
            visible.sort((a, b) => titleOf(a).localeCompare(titleOf(b), i18n.language));
        } else if (sort === 'tags') {
            visible.sort((a, b) => b.tags.length - a.tags.length);
        } else if (sort === 'live') {
            visible.sort((a, b) => Number(hasLiveSite(b)) - Number(hasLiveSite(a)));
        }

        return visible;
    }, [query, sort, category, t, i18n.language]);

    return {
        query,
        sort,
        projects,
        category,
        isFiltering: query.trim() !== '',
        setSort,
        setQuery,
        setCategory,
    };
}
