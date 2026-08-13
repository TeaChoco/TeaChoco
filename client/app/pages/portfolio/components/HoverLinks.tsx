// -Path: "TeaChoco-Portfolio/client/src/pages/portfolio/components/HoverLinks.tsx"
import type { Project } from '~/types/projects';
import { FaGithub, FaArrowUpRightFromSquare } from 'react-icons/fa6';

export default function HoverLinks({ project }: { project: Project }) {
    return (
        <div className='absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
            {project.github && (
                <a
                    href={project.github}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary transition-colors duration-200'
                >
                    <FaGithub className='text-lg' />
                </a>
            )}
            {project.live && (
                <a
                    href={project.live}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-accent transition-colors duration-200'
                >
                    <FaArrowUpRightFromSquare className='text-sm' />
                </a>
            )}
        </div>
    );
}
