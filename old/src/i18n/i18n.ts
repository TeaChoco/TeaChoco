//-Path: "TeaChoco-Portfolio/client/src/i18n/i18n.ts"
import i18n from 'i18next';
import th from './locales/th.json';
import en from './locales/en.json';
import ja from './locales/ja.json';
import zh from './locales/zh.json';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    th: { translation: th },
    en: { translation: en },
    ja: { translation: ja },
    zh: { translation: zh },
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
        lookupLocalStorage: 'i18next',
        cookieMinutes: 10080,
    },
});

export default i18n;
