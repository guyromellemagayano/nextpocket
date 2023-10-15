'use client'

import { FC } from 'react'

import { Form, List, Message, Section, Sidebar } from '@components'
import {
  NOTES_COLLECTION_FORM_DATA,
  NOTES_PAGE_API_URL,
  NOTE_PAGE_API_URL,
} from '@config'
import { request } from '@helpers'
import { useRedirect } from '@hooks'
import { INotesPageNotesData } from '@interfaces'
import { swr } from '@lib'

/**
 * Renders the Notes page
 */
const NotesPage: FC = (): JSX.Element => {
  const { session, status } = useRedirect()

  const { data, error, isLoading, isValidating, mutate } =
    swr(NOTES_PAGE_API_URL)

  const notes: INotesPageNotesData[] =
    (data?.items as INotesPageNotesData[]) || []

  const handleSubmit = async (formData: INotesPageNotesData): Promise<void> => {
    await request({
      url: NOTE_PAGE_API_URL,
      method: 'POST',
      data: formData,
    })

    mutate(NOTES_PAGE_API_URL)
  }

  if (!session && status === 'unauthenticated')
    return (
      <Message className="min-h-screen h-full flex items-center justify-center">
        Access Denied
      </Message>
    )

  if (status === 'loading')
    return (
      <Message className="min-h-screen h-full flex items-center justify-center">
        Loading...
      </Message>
    )

  return (
    <div className="flex justify-center w-full my-6 mx-auto lg:max-w-3xl">
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
            <Message className="min-h-screen h-full flex items-center justify-center">
              Loading...
            </Message>
          ) : error ? (
            <Message className="min-h-screen h-full flex items-center justify-center">{`Failed to load data, {error.message}`}</Message>
          ) : data ? (
            <List role="list" className="grid grid-cols-1 gap-6" data={notes} />
          ) : (
            <Message className="min-h-screen h-full flex items-center justify-center">
              No data found
            </Message>
          )}
        </Section>
      </div>
    </div>
  )
}

export default NotesPage
