// -Path: "TeaChoco-Portfolio/client/src/pages/about/content/components/AbilityBar.tsx"
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { abilityColors } from '~/data/language';
import type { LanguageSkillAbility } from '~/types/language';
import { abilityIcons } from '~/data/languageIcon';

interface AbilityBarProps {
    ability: LanguageSkillAbility;
    level: number;
    delay?: number;
}

export default function AbilityBar({ ability, level, delay = 0.1 }: AbilityBarProps) {
    const { t } = useTranslation();
    const color = abilityColors[ability];
    const Icon = abilityIcons[ability];

    return (
        <div>
            <div className='flex justify-between items-center mb-1'>
                <span className='flex items-center gap-1.5 text-sm text-surface-muted'>
                    <Icon className='text-xs' style={{ color }} />
                    {t(`languages.${ability}`)}
                </span>
                <span className='text-sm font-bold' style={{ color }}>
                    {level}%
                </span>
            </div>
            <div className='h-2 bg-border-light dark:bg-border-dark rounded-full overflow-hidden'>
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${level}%` }}
                    transition={{ delay, duration: 1, ease: 'easeOut' }}
                    viewport={{ once: true }}
                    className='h-full rounded-full'
                    style={{
                        background: `linear-gradient(90deg, ${color}66, ${color})`,
                    }}
                />
            </div>
        </div>
    );
}