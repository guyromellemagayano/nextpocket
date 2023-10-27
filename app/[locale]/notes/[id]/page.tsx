import { Session, getServerSession } from 'next-auth'

import { nextAuthOptions } from '@app/api/auth/[...nextauth]/route'
import NoteApp from '@components/app/notes/note/Note'
import translate from '@lib/i18n'
import { TBaseCommonAppPageProps } from 'types/base'

/**
 * Renders the Note page
 *
 * @returns The Note page component
 */
const NotePage = async <T,>({
  params: { locale, id }
}: TBaseCommonAppPageProps<T>): Promise<JSX.Element> => {
  const session: Session | null = await getServerSession(nextAuthOptions)
  const { t } = await translate(locale, ['note', 'notes'])

  const translations = {
    errorNoNoteId: t('errorNoNoteId'),
    loading: t('loading'),
    empty: t('empty'),
    error: t('error'),
    close: t('close')
  }

  return <NoteApp session={session} translations={translations} queryId={id} />
}

export default NotePage
