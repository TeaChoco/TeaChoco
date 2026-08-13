// -Path: "TeaChoco-Portfolio/client/src/components/content/languageSkill/CardsView.tsx"
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { languageSkills } from '~/data/language';
import type { LanguageSkill, LanguageSkillAbility } from '~/types/language';
import { abilityKeys, getOverall } from '../LanguageSkill';
import { languageFlags } from '~/data/languageIcon';
import AbilityBar from './AbilityBar';

interface CardsViewProps {
    hex: string;
}

export default function CardsView({ hex }: CardsViewProps) {
    const { t } = useTranslation();

    return (
        <div className='grid gap-4 md:grid-cols-3'>
            {languageSkills.map((language, idx) => (
                <motion.div
                    key={language.id}
                    className='card group p-6'
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * idx }}
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
                                    const Flag = languageFlags[language.flag];
                                    return <Flag className='w-7 h-7 rounded-[4px]' />;
                                })()}
                            </div>
                            <span className='font-semibold text-text-light dark:text-text-dark group-hover:text-primary-light transition-colors'>
                                {t(`languages.${language.id}`)}
                            </span>
                        </div>
                        {language.native && (
                            <span className='text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary-light border border-primary/20'>
                                {t('languages.native')}
                            </span>
                        )}
                    </div>

                    <div className='flex items-baseline gap-2 mb-4'>
                        <span className='text-3xl font-bold linear-text'>{getOverall(language.abilities)}%</span>
                        <span className='text-sm text-surface-muted'>{t('languages.overall')}</span>
                    </div>

                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-3'>
                        {abilityKeys.map((ability: LanguageSkillAbility, i: number) => (
                            <AbilityBar
                                key={ability}
                                ability={ability}
                                level={language.abilities[ability]}
                                delay={0.1 + i * 0.08}
                            />
                        ))}
                    </div>
                </motion.div>
            ))}
        </div>
    );
}