// -Path: 'TeaChoco-Portfolio/client/app/types/experience.ts'

/** Identifier of an experience category. */
export type CategoryId = 'creative' | 'game' | 'web' | 'tooling' | 'life';

/** A single milestone in the developer's journey. */
export interface ExperienceEvent {
    /** Unique id, also used to build the i18n key (`about.timeline.<id>`). */
    id: string;
    year: number;
    /** One or more categories this milestone belongs to. */
    category: CategoryId[];
    /** 1-12. Omitted when the exact month is unknown. */
    month?: number;
    /** 1-31. Omitted when the exact day is unknown. */
    day?: number;
    /** Optional tech labels. These are not translated. */
    tags?: string[];
    /** Marks a standout milestone worth emphasizing. */
    highlight?: boolean;
}

/** Events that share the same year. */
export interface YearGroup {
    year: number;
    events: ExperienceEvent[];
}

/** A themed chapter that groups milestones from a period of time. */
export interface ExperienceEra {
    id: string;
    emoji: string;
    yearRange: string;
    titleKey: string;
    descKey: string;
    events: ExperienceEvent[];
}

/** An era whose events are already filtered and grouped by year. */
export interface EraView {
    id: string;
    emoji: string;
    yearRange: string;
    titleKey: string;
    descKey: string;
    groups: YearGroup[];
}
