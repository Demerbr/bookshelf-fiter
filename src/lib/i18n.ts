import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import pt from '@/i18n/messages/pt.json';
import en from '@/i18n/messages/en.json';

const resources = {
  pt: {
    translation: pt
  },
  en: {
    translation: en
  }
};

if (!i18n.isInitialized) {
  i18n
    .use(initReactI18next)
    .init({
      resources,
      lng: typeof window !== 'undefined' ? localStorage.getItem('locale') || 'pt' : 'pt',
      fallbackLng: 'pt',
      
      interpolation: {
        escapeValue: false
      }
    });
}

export default i18n;