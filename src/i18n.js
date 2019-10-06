// i18next config file with extra dependencies that detects user browser configuration
// and chose right language

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import common_en from './assets/i18n/en/common.json';
import common_dk from './assets/i18n/dk/common.json';

i18n
  .use(Backend) // detect user language
  .use(LanguageDetector) // pass the i18n instance to react-i18next.
  .use(initReactI18next) // init i18next
  .init({
    fallbackLng: 'en',
    debug: true,
    resources: {
      en: {
        common: common_en // 'common' is our custom namespace
      },
      dk: {
        common: common_dk
      }
    },
    react: {
      useSuspense: false
    },
    interpolation: {
      escapeValue: false // not needed for react as it escapes by default
    }
  });

export default i18n;
