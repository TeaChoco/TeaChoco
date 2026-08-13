// -Path: "TeaChoco-Portfolio/client/src/components/content/languageSkill/GridView.tsx"
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { languageSkills, abilityColors } from '~/data/language';
import type { LanguageSkill, LanguageSkillAbility } from '~/types/language';
import { abilityKeys, getOverall } from '../LanguageSkill';
import { languageFlags, abilityIcons } from '~/data/languageIcon';

interface GridViewProps {
    hex: string;
}

export default function GridView({ hex }: GridViewProps) {
    const { t } = useTranslation();

    return (
        <div className='card p-6'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-5'>
                {languageSkills.map((language, idx) => (
                    <motion.div
                        key={language.id}
                        className='p-4 rounded-xl border border-border bg-surface-overlay/50'
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 * idx }}
                    >
                        <div className='flex items-center justify-between mb-3'>
                            <div className='flex items-center gap-2'>
                                {(() => {
                                    const Flag = languageFlags[language.flag];
                                    return <Flag className='w-6 h-6 rounded-[3px]' />;
                                })()}
                                <span className='font-semibold text-sm text-text-light dark:text-text-dark'>
                                    {t(`languages.${language.id}`)}
                                </span>
                            </div>
                            <span className='text-sm font-bold' style={{ color: hex }}>
                                {getOverall(language.abilities)}%
                            </span>
                        </div>
                        <div className='space-y-2'>
                            {abilityKeys.map((ability: LanguageSkillAbility, i: number) => {
                                const Icon = abilityIcons[ability];
                                const color = abilityColors[ability];

                                return (
                                    <div key={ability} className='flex items-center gap-2'>
                                        <span className='flex items-center gap-1 text-xs text-surface-muted w-16 shrink-0'>
                                            <Icon className='text-[10px]' style={{ color }} />
                                            {t(`languages.${ability}`)}
                                        </span>
                                        <div className='flex-1 h-1.5 bg-border-light dark:bg-border-dark rounded-full overflow-hidden'>
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${language.abilities[ability]}%` }}
                                                transition={{ delay: 0.1 + i * 0.08, duration: 1, ease: 'easeOut' }}
                                                viewport={{ once: true }}
                                                className='h-full rounded-full'
                                                style={{
                                                    background: `linear-gradient(90deg, ${color}66, ${color})`,
                                                }}
                                            />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}