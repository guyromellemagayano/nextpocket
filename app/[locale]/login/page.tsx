import { Session, getServerSession } from 'next-auth'

import { nextAuthOptions } from '@app/api/auth/[...nextauth]/route'
import LoginApp from '@components/app/login/Login'
import translate from '@lib/i18n'
import { TBaseCommonAppPageProps } from 'types/base'

/**
 * Renders the Login page
 *
 * @returns The Login page component
 */
const LoginPage = async <T,>({
  params: { locale }
}: TBaseCommonAppPageProps<T>): Promise<JSX.Element> => {
  const session: Session | null = await getServerSession(nextAuthOptions)
  const { t } = await translate(locale, ['login'])

  const translations = {
    heading: t('heading'),
    github: t('github')
  }

  return <LoginApp session={session} translations={translations} />
}

export default LoginPage
