/* global localStorage */
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-xhr-backend'
import { settings } from './constants'

const { LANGUAGE } = settings

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    debug: true,

    lng: localStorage.getItem(LANGUAGE) || 'en',
    fallbackLng: 'en',
    whitelist: ['en', 'es'],

    interpolation: {
      escapeValue: false // not needed for react as it escapes by default
    },
    backend: {
      loadPath: '../public/locales/{{lng}}/{{ns}}.json'
    }
  })

export default i18n
