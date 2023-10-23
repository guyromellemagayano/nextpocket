'use client'

import { TrashIcon } from '@heroicons/react/20/solid'
import { redirect, useRouter } from 'next/navigation'
import { FC, useState } from 'react'
import useSWR, { mutate } from 'swr'

import {
  Article,
  AuthCheck,
  Button,
  EditableForm,
  Message,
  Section
} from '@components'
import { NOTE_PAGE_API_URL } from '@config'
import { request } from '@helpers'
import { useRedirect } from '@hooks'
import { fetcher } from '@utils'

/**
 * Renders a page for a specific note.
 *
 * @param {Object} params - The parameters for the note page.
 * @param {string} params.id - The ID of the note.
 * @returns {JSX.Element} - The note page component.
 */
const NotePage: FC<any> = ({ params }) => {
  const { session, status } = useRedirect()

  const { data, isValidating, error, isLoading } = useSWR(
    `${NOTE_PAGE_API_URL + params?.id}`,
    fetcher
  )
  const [currentlyEditing, setCurrentlyEditing] = useState<string | null>(null)
  const router = useRouter()

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
      url: `${NOTE_PAGE_API_URL + params.id}`
    })
    mutate(`${NOTE_PAGE_API_URL + params.id}`, req, false)
    router.push('/notes', { scroll: false })
  }

  if (!params?.id) {
    return (
      <Message className="flex h-full min-h-screen items-center justify-center">
        Error: No note ID provided
      </Message>
    )
  }

  if (status === 'loading') {
    return (
      <Message className="flex h-full min-h-screen items-center justify-center">
        Loading...
      </Message>
    )
  }

  if (!session && status === 'unauthenticated') {
    redirect(`/login?callbackUrl=/notes/${params?.id}`)
  }

  if (error) {
    return (
      <Message className="flex h-full min-h-screen items-center justify-center">
        Failed to load data
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
                Loading data...
              </Message>
            ) : Object.keys(data).length > 0 ? (
              <Article className="flex min-w-0 items-start gap-x-4">
                <EditableForm
                  field="avatar"
                  params={params}
                  data={data || null}
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
                      params={params}
                      data={data || null}
                      isEditing={currentlyEditing === 'name'}
                      setIsEditing={() => setCurrentlyEditing(null)}
                      onEditStatus={() => handleEditStatus('name')}
                      className="text-sm font-semibold leading-6 text-gray-900"
                    />
                    <EditableForm
                      field="title"
                      params={params}
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
                        params={params}
                        data={data || null}
                        isEditing={currentlyEditing === 'company'}
                        setIsEditing={() => setCurrentlyEditing(null)}
                        onEditStatus={() => handleEditStatus('company')}
                        className="text-sm leading-6 text-gray-900"
                      />
                      <EditableForm
                        field="department"
                        params={params}
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
                No data found
              </Message>
            )}
          </Section>
        </div>
      </div>
    </AuthCheck>
  )
}

export default NotePage
