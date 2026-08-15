// -Path: "TeaChoco-Portfolio/client/src/components/content/languageSkill/RadarView.tsx"
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { languageSkills } from '~/data/language';
import type { LanguageSkill } from '~/types/language';
import { languageFlags } from '~/data/languageIcon';
import { abilityKeys, getOverall } from '../LanguageSkill';
import RadarChart from './RadarChart';

interface RadarViewProps {
    hex: string;
}

export default function RadarView({ hex }: RadarViewProps) {
    const { t } = useTranslation();

    return (
        <div className='grid gap-4 md:grid-cols-3'>
            {languageSkills.map((language: LanguageSkill) => (
                <motion.div
                    key={language.id}
                    className='card group p-6 flex flex-col items-center gap-3'
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                >
                    <div className='flex items-center gap-3'>
                        {(() => {
                            const Flag = languageFlags[language.flag];
                            return <Flag className='w-6 h-6 rounded-[3px]' />;
                        })()}
                        <span className='font-semibold text-text-light dark:text-text-dark group-hover:text-primary-light transition-colors'>
                            {t(`languages.${language.id}`)}
                        </span>
                        {language.native && (
                            <span className='text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary-light border border-primary/20'>
                                {t('languages.native')}
                            </span>
                        )}
                    </div>
                    <RadarChart language={language} hex={hex} />
                    <span className='text-2xl font-bold linear-text'>
                        {getOverall(language.abilities)}%
                    </span>
                </motion.div>
            ))}
        </div>
    );
}