// -Path: "TeaChoco-Portfolio/client/src/components/content/languageSkill/TabsView.tsx"
import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { languageSkills } from '~/data/language';
import { abilityKeys, getOverall } from '../LanguageSkill';
import type { LanguageSkillAbility } from '~/types/language';
import { languageFlags } from '~/data/languageIcon';
import AbilityBar from './AbilityBar';

interface TabsViewProps {
    hex: string;
}

export default function TabsView({ hex }: TabsViewProps) {
    const { t } = useTranslation();
    const [activeId, setActiveId] = useState(languageSkills[0].id);
    const active = useMemo(
        () => languageSkills.find((language) => language.id === activeId) ?? languageSkills[0],
        [activeId],
    );

    return (
        <div>
            <div className='flex flex-wrap gap-2 mb-4'>
                {languageSkills.map((language) => (
                    <button
                        key={language.id}
                        onClick={() => setActiveId(language.id)}
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border transition-colors cursor-pointer ${
                            language.id === activeId
                                ? 'bg-primary/10 text-primary-light border-primary/20'
                                : 'bg-surface-overlay text-surface-muted border-border hover:text-primary-light'
                        }`}
                    >
                        {(() => {
                            const Flag = languageFlags[language.flag];
                            return <Flag className='w-5 h-5 rounded' />;
                        })()}
                        {t(`languages.${language.id}`)}
                    </button>
                ))}
            </div>

            <motion.div
                key={active.id}
                className='card group p-6'
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
            >
                <div className='flex justify-between items-center mb-4'>
                    <div className='flex items-center gap-3'>
                        <div
                            className='w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden border border-black/10 dark:border-white/15'
                            style={{
                                backgroundColor: `${hex}20`,
                                boxShadow: `0 0 0 1px ${hex}35`,
                            }}
                        >
                            {(() => {
                                const Flag = languageFlags[active.flag];
                                return <Flag className='w-7 h-7 rounded-[4px]' />;
                            })()}
                        </div>
                        <div>
                            <span className='font-semibold text-text-light dark:text-text-dark block'>
                                {t(`languages.${active.id}`)}
                            </span>
                            {active.native && (
                                <span className='text-xs font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary-light border border-primary/20'>
                                    {t('languages.native')}
                                </span>
                            )}
                        </div>
                    </div>
                    <span className='text-2xl font-bold linear-text'>
                        {getOverall(active.abilities)}%
                    </span>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4'>
                    {abilityKeys.map((ability: LanguageSkillAbility, i: number) => (
                        <AbilityBar
                            key={ability}
                            ability={ability}
                            level={active.abilities[ability]}
                            delay={0.1 + i * 0.08}
                        />
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
