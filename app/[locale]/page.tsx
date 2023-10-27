import HomeApp from '@components/app/home/Home'
import translate from '@lib/i18n'

/**
 * Renders the Home page
 *
 * @returns The Home page component
 */
const HomePage = async ({ params: { locale } }): Promise<JSX.Element> => {
  const { t } = await translate(locale, ['home'])

  const translations = {
    title: t('title'),
    description: t('description')
  }

  return <HomeApp translations={translations} />
}

export default HomePage
