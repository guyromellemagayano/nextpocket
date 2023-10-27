import { Session, getServerSession } from 'next-auth'

import { nextAuthOptions } from '@app/api/auth/[...nextauth]/route'
import ProfileApp from '@components/app/profile/Profile'
import translate from '@lib/i18n'
import { TBaseCommonAppPageProps } from 'types/base'

/**
 * Renders the Profile page
 *
 * @returns The Profile page component
 */
const ProfilePage = async <T,>({
  params: { locale }
}: TBaseCommonAppPageProps<T>): Promise<JSX.Element> => {
  const session: Session | null = await getServerSession(nextAuthOptions)
  const { t } = await translate(locale, ['profile'])

  const translations = {
    unknownUser: t('unknownUser'),
    loggedIn: t('loggedIn')
  }

  return <ProfileApp session={session} translations={translations} />
}

export default ProfilePage
