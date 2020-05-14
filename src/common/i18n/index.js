import {initReactI18next} from 'react-i18next'
import HttpApi from 'i18next-http-backend'
import i18n from 'i18next'

i18n
  .use(initReactI18next)
  .use(HttpApi)
  .init({
    backend: {
      loadPath: 'locales/{{lng}}.json',
    },
    lng: process.env.REACT_APP_LOCALE,
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
