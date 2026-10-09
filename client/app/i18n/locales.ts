// -Path: 'Vite-React-Router-TypeScript/app/i18n/locales.ts'
import enLocale from './locales/en.json';
import thLocale from './locales/th.json';
import jaLocale from './locales/ja.json';
import zhLocale from './locales/zh.json';
import koLocale from './locales/ko.json';

export const resources = {
    en: { translation: enLocale },
    th: { translation: thLocale },
    ja: { translation: jaLocale },
    zh: { translation: zhLocale },
    ko: { translation: koLocale },
} as const;

export const SUPPORTED_LANGS = Object.keys(resources) as (keyof typeof resources)[];
export type Lang = (typeof SUPPORTED_LANGS)[number];

export const isValidLang = (lang: string): lang is Lang => SUPPORTED_LANGS.includes(lang as Lang);
