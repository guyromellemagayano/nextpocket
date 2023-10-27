import { Session, getServerSession } from 'next-auth'

import { nextAuthOptions } from '@app/api/auth/[...nextauth]/route'
import NotesApp from '@components/app/notes/Notes'
import translate from '@lib/i18n'
import { TBaseCommonAppPageProps } from 'types/base'

/**
 * Renders the Notes page
 *
 * @returns The Notes page component
 */
const NotesPage = async <T,>({
  params: { locale }
}: TBaseCommonAppPageProps<T>): Promise<JSX.Element> => {
  const session: Session | null = await getServerSession(nextAuthOptions)
  const { t } = await translate(locale, ['notes'])

  const translations = {
    loading: t('loading'),
    empty: t('empty'),
    error: t('error'),
    title: t('title'),
    company: t('company'),
    avatar: t('avatar'),
    name: t('name'),
    department: t('department'),
    save: t('save')
  }

  return <NotesApp session={session} translations={translations} />
}

export default NotesPage
