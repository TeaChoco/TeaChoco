// -Path: "TeaChoco-Portfolio/client/src/pages/about/content/components/CodingSkillList.tsx"
import { motion } from 'framer-motion';
import { getTagIcon } from '~/constants/icon';
import useTextColor from '~/hooks/useTextColor';
import type { CodingSkill } from '~/types/coding';
import CodingSkillLine from '../../components/CodingSkillLine';

interface CodingSkillListProps {
    skills: CodingSkill[];
}

export default function CodingSkillList({ skills }: CodingSkillListProps) {
    const { hex } = useTextColor();

    return (
        <div className='space-y-3 mt-2'>
            {skills.map((skill) => {
                const icon = getTagIcon(skill.id);

                return (
                    <motion.div
                        key={skill.id}
                        viewport={{ once: true }}
                        className='card group p-4'
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                    >
                        <div className='flex justify-between items-center mb-3'>
                            <div className='flex items-center gap-3'>
                                <div
                                    className='w-9 h-9 rounded-lg flex items-center justify-center border border-black/10 dark:border-white/15'
                                    style={{
                                        backgroundColor: `${icon.color ?? hex}20`,
                                        boxShadow: `0 0 0 1px ${icon.color ?? hex}35`,
                                    }}
                                >
                                    <icon.icon
                                        className='text-lg'
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
                                className='text-sm font-bold'
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
