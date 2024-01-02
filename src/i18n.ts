import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  lng: 'mm',
  fallbackLang: 'mm',
  interpolation: {
    escapeValue: false,
  },
  resources: {
    mm: {
      translation: {
        author: 'ရေးသားသူ ',
        blogTitle: 'ဘလော့များ ',
      },
    },
    en: {
      translation: {
        author: 'Written by ',
        blogTitle: 'All Blogs',
      },
    },
  },
});
export default i18n;
