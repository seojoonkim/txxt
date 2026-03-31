import {defineRouting} from 'next-intl/routing';

export const locales = ['en', 'ko'] as const;

export type Locale = (typeof locales)[number];

export const routing = defineRouting({
  locales,
  defaultLocale: 'ko',
  localePrefix: 'always',
  localeDetection: false,
});

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
