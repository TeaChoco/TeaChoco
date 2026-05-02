//-Path: "vite-extra-react-ssr-ts/src/components/layout/Navbar.tsx"
import DeskMenu from './DeskMenu';
import MobileMenu from './MobileMenu';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <header className='flex items-center justify-between px-4 md:px-8 py-3 sticky top-0 z-50 h-20 bg-bg-light/80 dark:bg-bg-dark/80 backdrop-blur-xl border-b border-border-light dark:border-border-dark transition-all duration-200'>
            <Link to='/' className='text-2xl font-bold no-underline z-50'>
                <span className='linear-text'>TeaChoco</span>
            </Link>

            <DeskMenu />
            <MobileMenu />
        </header>
    );
}
