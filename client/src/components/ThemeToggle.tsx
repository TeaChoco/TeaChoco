//-Path: "TeaChoco-Portfolio/client/src/components/ThemeToggle.tsx"
import { useTheme } from "../hooks/useTheme";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

export default function ThemeToggle() {
    const { theme, toggleTheme, mounted } = useTheme();

    if (!mounted) {
        return (
            <button
                className="p-2 rounded-lg transition-all duration-200
                           bg-bg-card-light dark:bg-bg-card-dark
                           border border-border-light dark:border-border-dark
                           hover:border-primary hover:scale-105
                           cursor-pointer"
                aria-label="Toggle theme">
                <MoonIcon className="w-5 h-5 opacity-0" />
            </button>
        );
    }

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-lg transition-all duration-200
                       bg-bg-card-light dark:bg-bg-card-dark
                       border border-border-light dark:border-border-dark
                       hover:border-primary hover:scale-105
                       cursor-pointer"
            aria-label={`Switch to ${
                theme === "dark" ? "light" : "dark"
            } mode`}>
            {theme === "dark" ? (
                <SunIcon className="w-5 h-5" />
            ) : (
                <MoonIcon className="w-5 h-5" />
            )}
        </button>
    );
}
