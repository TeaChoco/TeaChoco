// -Path: "TeaChoco-Portfolio/client/src/pages/portfolio/components/ProjectCard.tsx"
import { motion } from 'framer-motion';
import ProjectImage from '../components/ProjectImage';
import { ProjectInfo } from '../components/ProjectInfo';
import type { Project } from '~/data/projects';

/** Card แสดงข้อมูล project แต่ละชิ้น */
export default function ProjectCard({ project }: { project: Project }) {
    return (
        <motion.div
            layout
            exit={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3, delay: 0.05 }}
            className='card group overflow-hidden p-0'
        >
            <ProjectImage project={project} />
            <ProjectInfo project={project} />
        </motion.div>
    );
}
