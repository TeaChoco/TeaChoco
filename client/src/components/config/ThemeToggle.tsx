// -Path: "vite-extra-react-ssr-ts/src/components/ThemeToggle.tsx"
import { createElement } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa6';
import { useThemeStore } from '$/stores/themeStore';

export default function ThemeToggle() {
    const { theme, toggleTheme, _hydrated } = useThemeStore();

    if (!_hydrated) return <div className='h-8 w-14 rounded-full bg-border animate-pulse' />;

    const isDark = theme === 'dark';

    return (
        <button
            onClick={toggleTheme}
            aria-label='Toggle Theme'
            className={`relative h-8 w-14 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                isDark ? 'bg-slate-700' : 'bg-sky-200'
            }`}
        >
            <span
                className={`absolute left-1 top-1 flex h-6 w-6 transform items-center justify-center rounded-full bg-white shadow-lg transition-transform duration-300 ${
                    isDark ? 'translate-x-6' : 'translate-x-0'
                }`}
            >
                {createElement(theme === 'dark' ? FaMoon : FaSun, {
                    className: 'h-4 w-4 text-orange-400 dark:text-slate-800',
                })}
            </span>
        </button>
    );
}
