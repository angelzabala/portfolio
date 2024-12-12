import en from "../locales/en.json";
import es from "../locales/es.json";

// Function to get the appropriate translations based on the language
export function getTranslations(lang) {
  switch (lang) {
    case "es":
      return es;
    case "en":
        return en;
    default:
      return en;
  }
}