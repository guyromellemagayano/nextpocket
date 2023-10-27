'use client'

import { TrashIcon } from '@heroicons/react/20/solid'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import useSWR, { mutate } from 'swr'

import AuthCheck from '@components/auth/AuthCheck'
import Button from '@components/buttons/Button'
import EditableForm from '@components/forms/EditableForm'
import { Article, Section } from '@components/layouts/Content'
import Message from '@components/messages/Message'
import { NOTE_PAGE_API_URL } from '@configs/env'
import request from '@helpers/request'
import fetcher from '@utils/fetcher'
import { TBaseCommonAppComponentProps } from 'types/base'

export type TNoteAppProps<T = any> = TBaseCommonAppComponentProps &
  T & {
    queryId: string
  }

const NoteApp = <T,>({
  session,
  translations,
  queryId
}: TNoteAppProps<T>): JSX.Element => {
  const router = useRouter()
  const id = (queryId as string) || ''

  const { data, isValidating, error, isLoading } = useSWR(
    `${NOTE_PAGE_API_URL + id}`,
    fetcher
  )
  const [currentlyEditing, setCurrentlyEditing] = useState<string | null>(null)

  if (!id) {
    return (
      <Message className="flex h-full min-h-screen items-center justify-center">
        {translations?.errorNoNoteId ?? 'Error: No note ID provided'}
      </Message>
    )
  }

  if (!session) {
    router.push(`/login?callbackUrl=/notes/${id}`)
  }

  const handleEditStatus = (field: string): void => {
    if (currentlyEditing === field) {
      setCurrentlyEditing(null)
    } else {
      setCurrentlyEditing(field)
    }
  }

  const handleDeleteOnClick = async (): Promise<void> => {
    const req = await request({
      method: 'DELETE',
      url: `${NOTE_PAGE_API_URL + id}`
    })
    mutate(`${NOTE_PAGE_API_URL + id}`, req, false)
    router.push('/notes')
  }

  if (error) {
    return (
      <Message className="flex h-full min-h-screen items-center justify-center">
        {translations?.error ?? 'Failed to load data'}
      </Message>
    )
  }

  return (
    <AuthCheck>
      <div className="mx-auto my-6 flex w-full max-w-7xl  items-center justify-between gap-x-6 p-6 lg:max-w-3xl lg:px-8">
        <div className="grid w-full grid-cols-1 gap-x-8 gap-y-8">
          <Section
            className="my-6 flex flex-1 flex-col px-6 md:col-span-2 md:px-0"
            aria-label="Content"
          >
            {isLoading || isValidating ? (
              <Message className="flex h-full min-h-screen items-center justify-center">
                {translations?.loading ?? 'Loading data...'}
              </Message>
            ) : Object.keys(data).length > 0 ? (
              <Article className="flex min-w-0 items-start gap-x-4">
                <EditableForm
                  field="avatar"
                  id={id}
                  data={data || null}
                  translations={translations}
                  isEditing={currentlyEditing === 'avatar'}
                  setIsEditing={() => setCurrentlyEditing(null)}
                  onEditStatus={() => handleEditStatus('avatar')}
                  width={48}
                  height={48}
                />
                <div className="flex flex-auto flex-col justify-between gap-y-3 sm:flex-row">
                  <div className="min-w-0">
                    <EditableForm
                      field="name"
                      id={id}
                      data={data || null}
                      isEditing={currentlyEditing === 'name'}
                      setIsEditing={() => setCurrentlyEditing(null)}
                      onEditStatus={() => handleEditStatus('name')}
                      className="text-sm font-semibold leading-6 text-gray-900"
                    />
                    <EditableForm
                      field="title"
                      id={id}
                      data={data || null}
                      isEditing={currentlyEditing === 'title'}
                      setIsEditing={() => setCurrentlyEditing(null)}
                      onEditStatus={() => handleEditStatus('title')}
                      className="mt-1 truncate text-xs leading-5 text-gray-500"
                    />
                  </div>

                  <div className="shrink-1 flex items-center gap-x-8">
                    <div className="items-start sm:flex sm:flex-col md:items-end">
                      <EditableForm
                        field="company"
                        id={id}
                        data={data || null}
                        isEditing={currentlyEditing === 'company'}
                        setIsEditing={() => setCurrentlyEditing(null)}
                        onEditStatus={() => handleEditStatus('company')}
                        className="text-sm leading-6 text-gray-900"
                      />
                      <EditableForm
                        field="department"
                        id={id}
                        data={data || null}
                        isEditing={currentlyEditing === 'department'}
                        setIsEditing={() => setCurrentlyEditing(null)}
                        onEditStatus={() => handleEditStatus('department')}
                        className="mt-1 text-xs leading-5 text-gray-500"
                      />
                    </div>

                    <Button
                      type="button"
                      className="h-6 w-6 flex-none overflow-hidden rounded-full bg-gray-50"
                      onClick={handleDeleteOnClick}
                    >
                      <TrashIcon
                        className="h-6 w-6 flex-none text-red-600"
                        aria-hidden="true"
                      />
                    </Button>
                  </div>
                </div>
              </Article>
            ) : (
              <Message className="flex h-full min-h-screen items-center justify-center">
                {translations?.empty ?? 'No data found'}
              </Message>
            )}
          </Section>
        </div>
      </div>
    </AuthCheck>
  )
}

export default NoteApp
