import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import type { LangNames } from '~/types/favorites';
import { isValidLang } from '~/i18n/locales';

/**
 * Resolves a per-language name map (LangNames) into a display string for the
 * current i18n language. Falls back to the default language, then to any
 * available translation.
 */
export function resolveLangText(value: LangNames | undefined, language: string): string {
    if (!value) return '';
    if (isValidLang(language) && value[language]) return value[language];
    const fallback = Object.values(value).find((v): v is string => Boolean(v));
    return fallback ?? '';
}

export function useLangTextResolver() {
    const { i18n } = useTranslation();
    return useCallback(
        (value: LangNames | undefined) => resolveLangText(value, i18n.language),
        [i18n.language],
    );
}

/**
 * Returns every distinct localized label from a per-language name map
 * (LangNames) as `[lang, label]` pairs in language order.
 */
export function langTextLabels(value: LangNames | undefined): { lang?: string; label: string }[] {
    if (!value) return [];
    return Object.entries(value)
        .filter((entry): entry is [string, string] => Boolean(entry[1]))
        .map(([lang, label]) => ({ lang, label }));
}
