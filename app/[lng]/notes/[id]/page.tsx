'use client'

import { TrashIcon } from '@heroicons/react/20/solid'
import { redirect, useRouter } from 'next/navigation'
import { FC, useState } from 'react'
import useSWR, { mutate } from 'swr'

import AuthCheck from '@components/auth/AuthCheck'
import Button from '@components/buttons/Button'
import EditableForm from '@components/forms/EditableForm'
import { Article, Section } from '@components/layouts/Content'
import Message from '@components/messages/Message'
import { NOTE_PAGE_API_URL } from '@config/api'
import request from '@helpers/request'
import useRedirect from '@hooks/useRedirect'
import fetcher from '@utils/fetcher'

type TNotePage = {
  params: {
    id: string
  }
}

/**
 * Renders a page for a specific note.
 *
 * @param id - The note ID.
 * @returns The Note page component
 */
const NotePage: FC<TNotePage> = ({ params: { id } }) => {
  const { session, status } = useRedirect()

  const { data, isValidating, error, isLoading } = useSWR(
    `${NOTE_PAGE_API_URL + id}`,
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
      url: `${NOTE_PAGE_API_URL + id}`
    })
    mutate(`${NOTE_PAGE_API_URL + id}`, req, false)
    router.push('/notes', { scroll: false })
  }

  if (!id) {
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
    redirect(`/login?callbackUrl=/notes/${id}`)
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
                  id={id}
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
