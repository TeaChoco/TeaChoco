//-Path: "TeaChoco-Portfolio/client/src/components/LanguageSwitcher.tsx"
import { useTranslation } from "react-i18next";
import { useState, useRef, useEffect } from "react";

const languages = [
    { code: "en", label: "English", flag: "🇺🇸" },
    { code: "th", label: "ไทย", flag: "🇹🇭" },
    { code: "ja", label: "日本語", flag: "🇯🇵" },
];

export default function LanguageSwitcher() {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const currentLanguage =
        languages.find((l) => l.code === i18n.language) || languages[0];

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleLanguageChange = (code: string) => {
        i18n.changeLanguage(code);
        setIsOpen(false);
    };

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200
                           bg-bg-card-light dark:bg-bg-card-dark
                           border border-border-light dark:border-border-dark
                           hover:border-primary hover:scale-105
                           focus:outline-none focus:ring-2 focus:ring-primary/20"
                aria-label="Select language"
                aria-expanded={isOpen}>
                <span className="text-lg leading-none">
                    {currentLanguage.flag}
                </span>
                <span className="text-sm font-medium text-text-primary-light dark:text-text-primary-dark uppercase">
                    {currentLanguage.code}
                </span>
                <span
                    className={`text-xs ml-1 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                    }`}>
                    ▼
                </span>
            </button>

            <div
                className={`absolute right-0 mt-2 w-40 rounded-xl shadow-lg border border-border-light dark:border-border-dark
                            bg-bg-card-light dark:bg-bg-card-dark overflow-hidden z-50
                            transition-all duration-200 origin-top-right transform
                            ${
                                isOpen
                                    ? "opacity-100 scale-100 translate-y-0"
                                    : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                            }`}>
                <div className="p-1">
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => handleLanguageChange(lang.code)}
                            className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-150
                                      ${
                                          i18n.language === lang.code
                                              ? "bg-primary/10 text-primary"
                                              : "text-text-primary-light dark:text-text-primary-dark hover:bg-bg-hover-light dark:hover:bg-bg-hover-dark"
                                      }`}>
                            <span className="text-lg leading-none">
                                {lang.flag}
                            </span>
                            <span>{lang.label}</span>
                            {i18n.language === lang.code && (
                                <span className="ml-auto w-2 h-2 rounded-full bg-primary" />
                            )}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
