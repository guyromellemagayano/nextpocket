import i18next from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import resourcesToBackend from 'i18next-resources-to-backend'
import { initReactI18next } from 'react-i18next/initReactI18next'

import i18nConfig from 'configs/i18n'

type TInitTranslation = (locale: any, namespaces: string[]) => any

const initTranslations: TInitTranslation = async (locale, namespaces) => {
  await i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .use(
      resourcesToBackend(
        (language: string, namespace: string) =>
          import(`public/locales/${language}/${namespace}.json`)
      )
    )
    .init({
      debug: process.env.NODE_ENV === 'development',
      lng: locale,
      fallbackLng: i18nConfig.defaultLocale,
      supportedLngs: i18nConfig.locales,
      defaultNS: namespaces[0],
      fallbackNS: namespaces[0],
      ns: namespaces,
      preload: typeof window === 'undefined' ? i18nConfig.locales : []
    })

  return i18next
}

export default initTranslations
