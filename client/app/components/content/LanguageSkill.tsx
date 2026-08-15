// -Path: "TeaChoco-Portfolio/client/src/pages/about/content/LanguageSkill.tsx"
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import useTextColor from '~/hooks/useTextColor';
import TabsView from './languageSkill/TabsView';
import GridView from './languageSkill/GridView';
import RadarView from './languageSkill/RadarView';
import CardsView from './languageSkill/CardsView';
import { viewOptions, type ViewMode } from './languageSkill/viewOptions';
import { type LanguageSkill, type LanguageSkillAbility } from '~/types/language';

export const abilityKeys: LanguageSkillAbility[] = ['read', 'speak', 'listen', 'write', 'type'];

export const getOverall = (abilities: LanguageSkill['abilities']) =>
    Math.round(abilityKeys.reduce((sum, key) => sum + abilities[key], 0) / abilityKeys.length);

export default function LanguageSkill() {
    const { t } = useTranslation();
    const { hex } = useTextColor();
    const [view, setView] = useState<ViewMode>('radar');

    return (
        <div className='mb-10 w-full'>
            <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4'>
                <h2 className='section-title linear-text inline-block'>{t('about.languagesTitle')}</h2>

                <div className='flex items-center gap-1.5 p-1 rounded-full border border-border bg-surface-overlay w-fit'>
                    {viewOptions.map((option) => {
                        const Icon = option.icon;
                        const active = view === option.id;

                        return (
                            <button
                                key={option.id}
                                onClick={() => setView(option.id)}
                                aria-pressed={active}
                                title={t(option.labelKey)}
                                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                                    active
                                        ? 'bg-primary/10 text-primary-light'
                                        : 'text-surface-muted hover:text-primary-light'
                                }`}
                            >
                                <Icon className='text-sm' />
                                <span className='hidden sm:inline'>{t(option.labelKey)}</span>
                            </button>
                        );
                    })}
                </div>
            </div>

            {view === 'radar' && <RadarView hex={hex} />}
            {view === 'cards' && <CardsView hex={hex} />}
            {view === 'tabs' && <TabsView hex={hex} />}
            {view === 'grid' && <GridView hex={hex} />}
        </div>
    );
}