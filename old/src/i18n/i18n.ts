//-Path: "vite-extra-react-ssr-ts/src/i18n.ts"
import i18n from 'i18next';
import thLocale from './locales/th.json';
import enLocale from './locales/en.json';
import jaLocale from './locales/ja.json';
import zhLocale from './locales/zh.json';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    th: { translation: thLocale },
    en: { translation: enLocale },
    ja: { translation: jaLocale },
    zh: { translation: zhLocale },
};

const isBrowser = typeof window !== 'undefined';

if (isBrowser) i18n.use(LanguageDetector);

i18n.use(initReactI18next).init({
    resources,
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
    detection: {
        order: ['cookie', 'localStorage', 'navigator'],
        caches: ['cookie', 'localStorage'],
        lookupCookie: 'i18next',
        cookieMinutes: 10080,
        lookupLocalStorage: 'i18next',
    },
});

export default i18n;
