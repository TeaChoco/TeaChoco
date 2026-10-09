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

/**
 * Resolves any language code to a supported language.
 * `en-US` -> `en`, `zh-CN` -> `zh`; unknown codes fall back to `en`.
 *
 * @param code - Raw language code, possibly including a region.
 * @returns A supported language code.
 */
export function resolveLang(code?: string | null): Lang {
    const value = code?.toLowerCase();
    if (!value) return SUPPORTED_LANGS[0];

    return (
        SUPPORTED_LANGS.find((lang) => value === lang) ??
        SUPPORTED_LANGS.find((lang) => value.startsWith(`${lang}-`)) ??
        SUPPORTED_LANGS[0]
    );
}
