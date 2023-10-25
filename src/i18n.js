import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

// locales
import translationDe from "@/locales/de/translation.json";
import translationEn from "@/locales/en/translation.json";
import translationFr from "@/locales/fr/translation.json";
import translationIt from "@/locales/it/translation.json";
import translationEs from "@/locales/es/translation.json";
import translationTr from "@/locales/tr/translation.json";

// translations
const resources = {
  de: {
    translation: translationDe,
  },
  en: {
    translation: translationEn,
  },
  fr: {
    translation: translationFr,
  },
  it: {
    translation: translationIt,
  },
  es: {
    translation: translationEs,
  },
  tr: {
    translation: translationTr,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    lng: "tr",
    debug: false,
    fallbackLng: "tr",
    keySeparator: false, // we do not use keys in form messages.welcome
    resources,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
