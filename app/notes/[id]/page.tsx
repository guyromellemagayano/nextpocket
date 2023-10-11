/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import {
  ChangeEvent,
  FC,
  Fragment,
  KeyboardEvent,
  useRef,
  useState,
} from 'react'

import { TrashIcon } from '@heroicons/react/20/solid'
import { useRouter } from 'next/navigation'
import { mutate } from 'swr'

import {
  Article,
  Button,
  Image,
  Message,
  Paragraph,
  Section,
} from '@components'
import { NOTES_COLLECTION_FORM_DATA, NOTE_PAGE_API_URL } from '@config'
import { Dialog, Transition } from '@headlessui/react'
import { request } from '@helpers'
import { IAvatarProps, IEditableFormProps, IRequestData } from '@interfaces'
import { swr } from '@lib'
import clsx from 'clsx'

const EditableForm: FC<IEditableFormProps> = ({
  field,
  params,
  data,
  isEditing,
  width,
  height,
  ...props
}) => {
  const [editableData, setEditableData] = useState<IRequestData | null>(null)

  const collection = data
    ? NOTES_COLLECTION_FORM_DATA.map(item => ({
        ...item,
        value: data[item.id],
      }))
    : NOTES_COLLECTION_FORM_DATA

  const selectedField = collection.find(item => item.id === field) || null

  if (data && !editableData) {
    setEditableData(data)
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setEditableData(prevData => ({ ...prevData, [field]: e.target.value }))
  }

  const handleKeyPress = async (
    e: KeyboardEvent<HTMLInputElement>,
  ): Promise<void> => {
    if (e.key === 'Enter') {
      const req = await request({
        method: 'PATCH',
        url: `${NOTE_PAGE_API_URL + params.id}`,
        data: editableData,
      })
      mutate(`${NOTE_PAGE_API_URL + params.id}`, req, false)
      props.setIsEditing()
    } else if (e.key === 'Escape') {
      mutate(`${NOTE_PAGE_API_URL + params.id}`, data, false)
      props.setIsEditing()
    }
  }

  if (!selectedField || !editableData) return null

  if (
    editableData?.[field] &&
    selectedField.type === 'url' &&
    width &&
    height
  ) {
    return (
      <Avatar
        src={editableData[field]}
        width={width}
        height={height}
        field={field}
        params={params}
        data={data}
        selectedField={selectedField}
        editableData={editableData}
        isEditing={isEditing}
        setIsEditing={props.setIsEditing}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        onEditStatus={props.onEditStatus}
        {...props}
      />
    )
  }

  if (selectedField.type !== 'text' && selectedField.type !== 'url') {
    return null
  }

  return isEditing && editableData?.[field] ? (
    <input
      type={selectedField.type}
      name={selectedField.id}
      placeholder={selectedField.placeholder}
      onChange={handleInputChange}
      onKeyDown={handleKeyPress}
      value={editableData[field]}
      className="block w-full rounded-md border-0 py-1 my-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    />
  ) : (
    <Paragraph
      className="text-sm font-semibold leading-6 text-gray-900"
      message={data[field]}
      onClick={props.onEditStatus}
      {...props}
    />
  )
}

const Avatar: FC<IAvatarProps> = ({
  src,
  field,
  selectedField,
  editableData,
  isEditing,
  width,
  height,
  ...props
}): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false)
  const cancelButtonRef = useRef(null)

  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div>
                    <Image
                      src={src}
                      width={width}
                      height={height}
                      alt=""
                      className="mt-3 mx-auto flex h-12 w-12 items-center justify-center rounded-full"
                      {...props}
                    />
                    <div className="mt-3 text-center sm:mt-5">
                      {isEditing && editableData?.[field] ? (
                        <input
                          type={selectedField.type}
                          name={selectedField.id}
                          placeholder={selectedField.placeholder}
                          onChange={props.onChange}
                          onKeyDown={props.onKeyPress}
                          value={editableData[field]}
                          className="block w-full rounded-md border-0 py-1 my-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      ) : (
                        <Paragraph
                          className="text-sm text-gray-500 text-ellipsis truncate"
                          message={editableData?.[field]}
                          onClick={props.onEditStatus}
                          {...props}
                        />
                      )}
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-1 sm:gap-3">
                    <Button
                      ref={cancelButtonRef}
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
                      onClick={() => setOpen(false)}
                    >
                      Close
                    </Button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <Button
        type="button"
        className={clsx(
          'flex-none rounded-full bg-gray-50 overflow-hidden',
          width && `w-${width}px`,
          height && `h-${height}px`,
        )}
        onClick={() => {
          props.setIsEditing
          setOpen(true)
        }}
      >
        <Image src={src} width={width} height={height} alt="" {...props} />
      </Button>
    </>
  )
}

/**
 * Renders a page for a specific note.
 * @param {Object} params - The parameters for the note page.
 * @param {string} params.id - The ID of the note.
 * @returns {JSX.Element} - The note page component.
 */
const NotePage: FC = ({ params }: any): JSX.Element => {
  const { data, error, isLoading, isValidating } = swr(
    `${NOTE_PAGE_API_URL + params.id}`,
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
      url: `${NOTE_PAGE_API_URL + params.id}`,
    })
    mutate(`${NOTE_PAGE_API_URL + params.id}`, req, false)
    router.push('/notes', { scroll: false })
  }

  if (isLoading || isValidating) {
    return (
      <Message
        className="min-h-screen h-full flex items-center justify-center"
        message="Loading..."
      />
    )
  }

  if (error) {
    return (
      <Message
        className="min-h-screen h-full flex items-center justify-center"
        message={`Failed to load data, ${error.message}`}
      />
    )
  }

  return (
    <div className="flex w-full my-6 mx-auto lg:max-w-3xl  max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8">
      <div className="grid grid-cols-1 gap-x-8 gap-y-8 w-full">
        <Section
          className="flex flex-1 flex-col my-6 px-6 md:px-0 md:col-span-2"
          aria-label="Content"
        >
          <Article className="flex min-w-0 gap-x-4 items-start">
            <EditableForm
              field="avatar"
              params={params}
              data={data}
              isEditing={currentlyEditing === 'avatar'}
              setIsEditing={() => setCurrentlyEditing(null)}
              onEditStatus={() => handleEditStatus('avatar')}
              width={48}
              height={48}
            />
            <div className="flex gap-y-3 flex-col sm:flex-row flex-auto justify-between">
              <div className="min-w-0">
                <EditableForm
                  field="name"
                  params={params}
                  data={data}
                  isEditing={currentlyEditing === 'name'}
                  setIsEditing={() => setCurrentlyEditing(null)}
                  onEditStatus={() => handleEditStatus('name')}
                  className="text-sm font-semibold leading-6 text-gray-900"
                />
                <EditableForm
                  field="title"
                  params={params}
                  data={data}
                  isEditing={currentlyEditing === 'title'}
                  setIsEditing={() => setCurrentlyEditing(null)}
                  onEditStatus={() => handleEditStatus('title')}
                  className="mt-1 truncate text-xs leading-5 text-gray-500"
                />
              </div>

              <div className="flex shrink-1 items-center gap-x-8">
                <div className="items-start sm:flex sm:flex-col md:items-end">
                  <EditableForm
                    field="company"
                    params={params}
                    data={data}
                    isEditing={currentlyEditing === 'company'}
                    setIsEditing={() => setCurrentlyEditing(null)}
                    onEditStatus={() => handleEditStatus('company')}
                    className="text-sm leading-6 text-gray-900"
                  />
                  <EditableForm
                    field="department"
                    params={params}
                    data={data}
                    isEditing={currentlyEditing === 'department'}
                    setIsEditing={() => setCurrentlyEditing(null)}
                    onEditStatus={() => handleEditStatus('department')}
                    className="mt-1 text-xs leading-5 text-gray-500"
                  />
                </div>
                <Button
                  type="button"
                  className="flex-none rounded-full bg-gray-50 overflow-hidden w-6 h-6"
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
        </Section>
      </div>
    </div>
  )
}

export default NotePage
