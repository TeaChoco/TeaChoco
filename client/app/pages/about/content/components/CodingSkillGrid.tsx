// -Path: "TeaChoco-Portfolio/client/src/pages/about/content/components/CodingSkillGrid.tsx"
import { motion } from 'framer-motion';
import { getTagIcon } from '~/constants/icon';
import type { CodingSkill } from '~/types/coding';
import useTextColor from '~/hooks/useTextColor';

interface CodingSkillGridProps {
    skills: CodingSkill[];
}

export default function CodingSkillGrid({ skills }: CodingSkillGridProps) {
    const { hex } = useTextColor();

    return (
        <div className='card p-4'>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3'>
                {skills.map((skill, idx) => {
                    const icon = getTagIcon(skill.id);

                    return (
                        <motion.div
                            key={skill.id}
                            className='p-3 rounded-xl border border-border bg-surface-overlay/50 group'
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.1 * idx }}
                        >
                            <div className='flex items-center justify-between mb-2'>
                                <div
                                    className='w-8 h-8 rounded-lg flex items-center justify-center border border-black/10 dark:border-white/15'
                                    style={{
                                        backgroundColor: `${icon.color ?? hex}20`,
                                        boxShadow: `0 0 0 1px ${icon.color ?? hex}35`,
                                    }}
                                >
                                    <icon.icon
                                        className='text-base'
                                        style={{
                                            color: icon.color ?? hex,
                                            filter: 'drop-shadow(0 0 1px rgba(0,0,0,0.12))',
                                        }}
                                    />
                                </div>
                                <span className='text-xs font-bold' style={{ color: icon.color ?? hex }}>
                                    {skill.level}%
                                </span>
                            </div>
                            <span className='text-sm font-medium text-text-light dark:text-text-dark truncate block'>
                                {skill.name}
                            </span>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}