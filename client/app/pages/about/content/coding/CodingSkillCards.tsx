// -Path: "TeaChoco-Portfolio/client/src/pages/about/content/components/CodingSkillCards.tsx"
import { motion } from 'framer-motion';
import { getTagIcon } from '~/constants/icon';
import useTextColor from '~/hooks/useTextColor';
import type { CodingSkill } from '~/types/coding';
import CodingSkillLine from '../../components/CodingSkillLine';

interface CodingSkillCardsProps {
    skills: CodingSkill[];
}

export default function CodingSkillCards({ skills }: CodingSkillCardsProps) {
    const { hex } = useTextColor();

    return (
        <div className='grid gap-4 mt-2 md:grid-cols-2 lg:grid-cols-3'>
            {skills.map((skill) => {
                const icon = getTagIcon(skill.id);

                return (
                    <motion.div
                        key={skill.id}
                        viewport={{ once: true }}
                        className='card group p-5'
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                    >
                        <div className='flex justify-between items-start mb-3'>
                            <div className='flex items-center gap-3'>
                                <div
                                    className='w-10 h-10 rounded-lg flex items-center justify-center border border-black/10 dark:border-white/15'
                                    style={{
                                        backgroundColor: `${icon.color ?? hex}20`,
                                        boxShadow: `0 0 0 1px ${icon.color ?? hex}35`,
                                    }}
                                >
                                    <icon.icon
                                        className='text-xl'
                                        style={{
                                            color: icon.color ?? hex,
                                            filter: 'drop-shadow(0 0 1px rgba(0,0,0,0.12))',
                                        }}
                                    />
                                </div>
                                <span className='font-semibold text-text-light dark:text-text-dark group-hover:text-primary-light transition-colors'>
                                    {skill.name}
                                </span>
                            </div>
                            <span
                                className='text-lg font-bold'
                                style={{ color: icon.color ?? hex }}
                            >
                                {skill.level}%
                            </span>
                        </div>
                        <CodingSkillLine icon={icon} skill={skill} />
                    </motion.div>
                );
            })}
        </div>
    );
}
