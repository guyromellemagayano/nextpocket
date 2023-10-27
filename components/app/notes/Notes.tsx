'use client'

import { useRouter } from 'next/navigation'
import useSWR, { mutate } from 'swr'

import AuthCheck from '@components/auth/AuthCheck'
import Form from '@components/forms/Form'
import { Section } from '@components/layouts/Content'
import Sidebar from '@components/layouts/Sidebar'
import List from '@components/lists/List'
import Message from '@components/messages/Message'
import { NOTES_PAGE_API_URL, NOTE_PAGE_API_URL } from '@configs/env'
import request from '@helpers/request'
import fetcher from '@utils/fetcher'
import {
  TNotesListData,
  TNotesPageNotesData,
  notesCollectionFormData
} from 'configs/data'
import { TBaseCommonAppComponentProps } from 'types/base'

/**
 * Renders the Notes page
 *
 * @returns The Notes page component
 */
const NotesApp = <T,>({
  session,
  translations
}: TBaseCommonAppComponentProps<T>): JSX.Element => {
  const router = useRouter()

  const { data, error, isLoading, isValidating } = useSWR<TNotesListData>(
    NOTES_PAGE_API_URL,
    fetcher
  )

  if (!session) {
    router.push('/login?callbackUrl=/notes')
  }

  if (error) {
    return (
      <Message className="flex h-full min-h-screen items-center justify-center">
        {translations?.error ?? ''}
      </Message>
    )
  }

  const notes: TNotesPageNotesData[] = data?.items || []
  const translatedFormData = notesCollectionFormData.map(item => ({
    ...item,
    placeholder: translations?.[item.id] ?? ''
  }))

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
            <Form
              data={translatedFormData}
              onSubmit={handleSubmit}
              translations={translations}
            />
          </Sidebar>

          <Section
            className="flex flex-1 flex-col md:col-span-2"
            aria-label="Content"
          >
            {isLoading || isValidating ? (
              <Message className="flex h-full min-h-screen items-center justify-center">
                {translations?.loading ?? ''}
              </Message>
            ) : notes?.length > 0 ? (
              <List
                role="list"
                className="grid grid-cols-1 gap-6"
                data={notes}
              />
            ) : (
              <Message className="flex h-full min-h-screen items-center justify-center">
                {translations?.empty ?? ''}
              </Message>
            )}
          </Section>
        </div>
      </div>
    </AuthCheck>
  )
}

export default NotesApp
