import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import { TRANSLATIONS_MAL } from "../translations/mal/mal";
import { TRANSLATIONS_EN } from "../translations/en/en";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: TRANSLATIONS_EN,
      },
      mal: {
        translation: TRANSLATIONS_MAL,
      },
    },
  });

i18n.changeLanguage("mal");
