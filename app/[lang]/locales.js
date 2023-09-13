import 'server-only';
import { supportedLocales } from '../../middleware';

const locales = {
  ca: () => import('./locales/ca/common.json').then((module) => module.default),
  en: () => import('./locales/en/common.json').then((module) => module.default),
  es: () => import('./locales/es/common.json').then((module) => module.default),
  fr: () => import('./locales/fr/common.json').then((module) => module.default),
};

export const getLocale = async (locale) => locales[locale]();
