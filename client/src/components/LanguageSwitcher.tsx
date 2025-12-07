//-Path: "TeaChoco-Portfolio/client/src/components/LanguageSwitcher.tsx"
import { useTranslation } from "react-i18next";

const languages = [
    { code: "en", label: "English", flag: "🇺🇸" },
    { code: "th", label: "ไทย", flag: "🇹🇭" },
    { code: "ja", label: "日本語", flag: "🇯🇵" },
];

export default function LanguageSwitcher() {
    const { i18n } = useTranslation();

    return (
        <div className="relative">
            <select
                value={i18n.language}
                onChange={(e) => i18n.changeLanguage(e.target.value)}
                className="appearance-none px-3 py-2 pr-8 rounded-lg text-sm font-medium cursor-pointer transition-all duration-200 bg-bg-card-light dark:bg-bg-card-dark border border-border-light dark:border-border-dark hover:border-primary focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
                aria-label="Select language">
                {languages.map((lang) => (
                    <option key={lang.code} value={lang.code}>
                        {lang.flag} {lang.label}
                    </option>
                ))}
            </select>
            <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-text-muted-light dark:text-text-muted-dark">
                ▼
            </div>
        </div>
    );
}
