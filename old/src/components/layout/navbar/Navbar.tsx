// -Path: "vite-extra-react-ssr-ts/src/components/layout/Navbar.tsx"
import DeskMenu from './DeskMenu';
import { Link } from 'react-router-dom';
import MobileBottomBar from './MobileBottomBar';
import ThemeToggle from '$/components/config/ThemeToggle';
import LanguageSwitcher from '$/components/config/LanguageSwitcher';

export default function Navbar() {
    return (
        <>
            <header className='flex items-center justify-between px-4 md:px-8 sticky top-0 z-50 h-16 bg-surface/50 backdrop-blur-xl border-b border-border transition-all duration-200'>
                <Link
                    to='/'
                    onClick={() => window.scrollTo(0, 0)}
                    className='text-2xl font-bold no-underline z-50'
                >
                    <span className='linear-text'>TeaChoco</span>
                </Link>
                <DeskMenu />
                <div className='flex items-center gap-2'>
                    <LanguageSwitcher />
                    <ThemeToggle />
                </div>
            </header>

            {/* bottom bar สำหรับ mobile แทน hamburger menu */}
            <MobileBottomBar />
        </>
    );
}
