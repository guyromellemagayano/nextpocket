import { createInstance } from 'i18next'
// import resourcesToBackend from 'i18next-resources-to-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import HttpBackend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next/initReactI18next'

import { I18NEXUS_API_KEY } from '@configs/env'
import { i18n } from 'i18n.config.js'

const translate = async (locale: string, namespaces: string[]) => {
  const i18nInstance = createInstance()
  const loadPath = `https://api.i18nexus.com/project_resources/translations/{{lng}}/{{ns}}.json?api_key=${I18NEXUS_API_KEY}`

  await i18nInstance
    .use(initReactI18next)
    .use(HttpBackend)
    .use(LanguageDetector)
    .init(
      {
        lng: locale,
        fallbackLng: i18n.defaultLocale,
        supportedLngs: i18n.locales,
        defaultNS: namespaces[0],
        fallbackNS: namespaces[0],
        ns: namespaces,
        preload: typeof window === 'undefined' ? i18n.locales : [],
        backend: {
          loadPath: loadPath,
          addPath: `/locales/{{lng}}/{{ns}}.json`
        }
      },
      (err, t) => {
        if (err) return console.error(err)
        t('key')
      }
    )

  i18nInstance.reloadResources()

  return i18nInstance
}

export default translate
