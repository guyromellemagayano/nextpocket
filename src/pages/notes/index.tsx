import { NextPage } from 'next'
import { useRouter } from 'next/router'
import useSWR, { mutate } from 'swr'

import AuthCheck from '@components/auth/AuthCheck'
import Form from '@components/forms/Form'
import { Section } from '@components/layouts/Content'
import Sidebar from '@components/layouts/Sidebar'
import List from '@components/lists/List'
import Message from '@components/messages/Message'
import request from '@helpers/request'
import useRedirect from '@hooks/useRedirect'
import fetcher from '@utils/fetcher'
import { NOTES_PAGE_API_URL, NOTE_PAGE_API_URL } from 'configs/api'
import {
  NOTES_COLLECTION_FORM_DATA,
  TNotesListData,
  TNotesPageNotesData
} from 'configs/data'

/**
 * Renders the Notes page
 *
 * @returns The Notes page component
 */
const NotesPage: NextPage = () => {
  const { session, status } = useRedirect()
  const router = useRouter()

  const { data, error, isLoading, isValidating } = useSWR<TNotesListData>(
    NOTES_PAGE_API_URL,
    fetcher
  )

  if (status === 'loading')
    return (
      <Message className="flex h-full min-h-screen items-center justify-center">
        Loading...
      </Message>
    )

  if (!session && status === 'unauthenticated') {
    router.push('/login?callbackUrl=/notes')
  }

  if (error) {
    return (
      <Message className="flex h-full min-h-screen items-center justify-center">
        Failed to load data
      </Message>
    )
  }

  const notes: TNotesPageNotesData[] = data?.items || []

  const handleSubmit = async (formData: TNotesPageNotesData): Promise<void> => {
    await request({
      url: NOTE_PAGE_API_URL,
      method: 'POST',
      data: formData
    })

    mutate(NOTES_PAGE_API_URL)
  }

  return (
    <AuthCheck>
      <div className="mx-auto my-6 flex w-full justify-center lg:max-w-3xl">
        <div className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 md:grid-cols-3">
          <Sidebar
            className="flex flex-1 flex-col self-start sm:sticky md:top-20"
            aria-label="Sidebar"
          >
            <Form data={NOTES_COLLECTION_FORM_DATA} onSubmit={handleSubmit} />
          </Sidebar>

          <Section
            className="flex flex-1 flex-col md:col-span-2"
            aria-label="Content"
          >
            {isLoading || isValidating ? (
              <Message className="flex h-full min-h-screen items-center justify-center">
                Loading data...
              </Message>
            ) : notes?.length > 0 ? (
              <List
                role="list"
                className="grid grid-cols-1 gap-6"
                data={notes}
              />
            ) : (
              <Message className="flex h-full min-h-screen items-center justify-center">
                No data found
              </Message>
            )}
          </Section>
        </div>
      </div>
    </AuthCheck>
  )
}

export default NotesPage
