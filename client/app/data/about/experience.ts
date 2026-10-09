// -Path: 'TeaChoco-Portfolio/client/app/data/about/experience.ts'
import type { IconType } from 'react-icons';
import type { CategoryId } from '~/types/experience';
import type { ExperienceEra } from '~/types/experience';
import { FaCode, FaHeart, FaPalette, FaGamepad, FaScrewdriverWrench } from 'react-icons/fa6';

/**
 * The developer's journey as themed eras.
 * Titles live in i18n under `about.era.<id>` and events under `about.timeline.<id>`.
 */
export const EXPERIENCE_ERAS: ExperienceEra[] = [
    {
        id: 'origin',
        emoji: '🌱',
        yearRange: '2014 – 2019',
        titleKey: 'about.era.origin.title',
        descKey: 'about.era.origin.desc',
        events: [
            { id: 'ibispaint', year: 2014, category: ['creative'] },
            { id: 'mcMiniGame', year: 2015, category: ['game'], tags: ['Command Block'] },
            { id: 'novelist', year: 2017, category: ['creative'] },
            { id: 'youtube', year: 2018, category: ['creative'] },
            { id: 'mcAddonMobile', year: 2019, category: ['game'], tags: ['Minecraft Addon'] },
            { id: 'coach', year: 2019, category: ['life'] },
        ],
    },
    {
        id: 'codeEntry',
        emoji: '💻',
        yearRange: '2021 – 2022',
        titleKey: 'about.era.codeEntry.title',
        descKey: 'about.era.codeEntry.desc',
        events: [
            { id: 'newPc2021', year: 2021, category: ['life'], highlight: true },
            { id: 'discordBot', year: 2021, category: ['web'], tags: ['Discord'] },
            { id: 'phpSite', year: 2022, category: ['web'], tags: ['HTML', 'CSS', 'JS', 'PHP'] },
            {
                id: 'reactSite',
                year: 2022,
                category: ['web'],
                tags: ['React', 'Express', 'MUI', 'Socket.io', 'Three.js'],
                highlight: true,
            },
            { id: 'firstGithub', year: 2022, category: ['tooling'], tags: ['GitHub'] },
        ],
    },
    {
        id: 'expansion',
        emoji: '🚀',
        yearRange: '2023',
        titleKey: 'about.era.expansion.title',
        descKey: 'about.era.expansion.desc',
        events: [
            { id: 'arduino', year: 2023, category: ['tooling'], tags: ['Arduino'] },
            { id: 'blender', year: 2023, category: ['creative'], tags: ['Blender'] },
            {
                id: 'typescript',
                year: 2023,
                category: ['web'],
                tags: ['TypeScript'],
                highlight: true,
            },
        ],
    },
    {
        id: 'professional',
        emoji: '⚡',
        yearRange: '2024 – 2026',
        titleKey: 'about.era.professional.title',
        descKey: 'about.era.professional.desc',
        events: [
            { id: 'npmLib', year: 2024, category: ['tooling'], tags: ['npm'], highlight: true },
            { id: 'nextjs', year: 2024, category: ['web'], tags: ['Next.js', 'Tailwind'] },
            { id: 'mcAddonPc', year: 2025, month: 6, category: ['game'], tags: ['Minecraft Addon'] },
            {
                id: 'godot',
                year: 2025,
                month: 8,
                day: 12,
                category: ['game'],
                tags: ['Godot'],
            },
            {
                id: 'nest',
                year: 2025,
                month: 9,
                category: ['web'],
                tags: ['NestJS'],
                highlight: true,
            },
            { id: 'docker', year: 2026, month: 3, category: ['tooling'], tags: ['Docker'] },
            {
                id: 'reactRouter',
                year: 2026,
                month: 5,
                category: ['web'],
                tags: ['React Router'],
                highlight: true,
            },
            {
                id: 'manjaro',
                year: 2026,
                month: 7,
                day: 12,
                category: ['life'],
                tags: ['Linux', 'Manjaro'],
                highlight: true,
            },
            { id: 'vrchat', year: 2026, month: 8, day: 1, category: ['life', 'game'], tags: ['VRChat'] },
        ],
    },
];

/** Visual configuration of a category. Class names are static so Tailwind can detect them. */
interface CategoryConfig {
    icon: IconType;
    labelKey: string;
    /** Classes for the icon badge and category pill on each entry. */
    badge: string;
    /** Classes for the filter chip when it is active. */
    chipActive: string;
}

/** Category registry keyed by category id. Colors come from the design tokens only. */
export const CATEGORIES: Record<CategoryId, CategoryConfig> = {
    creative: {
        icon: FaPalette,
        labelKey: 'about.category.creative',
        badge: 'bg-secondary/10 text-secondary border-secondary/20',
        chipActive: 'bg-secondary/15 text-secondary border-secondary/40',
    },
    game: {
        icon: FaGamepad,
        labelKey: 'about.category.game',
        badge: 'bg-success/10 text-success border-success/20',
        chipActive: 'bg-success/15 text-success border-success/40',
    },
    web: {
        icon: FaCode,
        labelKey: 'about.category.web',
        badge: 'bg-primary/10 text-primary border-primary/20',
        chipActive: 'bg-primary/15 text-primary border-primary/40',
    },
    tooling: {
        icon: FaScrewdriverWrench,
        labelKey: 'about.category.tooling',
        badge: 'bg-accent/10 text-accent border-accent/20',
        chipActive: 'bg-accent/15 text-accent border-accent/40',
    },
    life: {
        icon: FaHeart,
        labelKey: 'about.category.life',
        badge: 'bg-neutral/10 text-neutral border-neutral/20',
        chipActive: 'bg-neutral/15 text-neutral border-neutral/40',
    },
};

/** Ordered list of category ids used by the filter bar. */
export const CATEGORY_IDS = Object.keys(CATEGORIES) as CategoryId[];
