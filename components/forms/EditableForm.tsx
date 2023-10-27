import { ChangeEvent, KeyboardEvent, useState } from 'react'
import { mutate } from 'swr'

import Avatar from '@components/avatar/Avatar'
import Paragraph from '@components/typography/Paragraph'
import { NOTE_PAGE_API_URL } from '@configs/env'
import request, { TRequestData } from '@helpers/request'
import { notesCollectionFormData, TNotesPageNotesData } from 'configs/data'
import { TBaseCommonAppComponentProps } from 'types/base'

export type TEditableFormProps<T = any> = Omit<
  TBaseCommonAppComponentProps,
  'session'
> &
  T & {
    field: keyof TNotesPageNotesData
    id: string
    data?: TNotesPageNotesData
    isEditing: boolean
    width?: number
    height?: number
    setIsEditing: () => void
    onEditStatus: () => void
  }

/**
 * A reusable editable form component.
 *
 * @param field - The field to edit
 * @param id - The id of the component
 * @param data - The data of the component
 * @param width - The width of the component
 * @param height - The height of the component
 * @returns The editable form component
 */
const EditableForm = <T,>({
  field,
  id,
  data,
  translations,
  isEditing,
  width,
  height,
  setIsEditing,
  onEditStatus,
  ...props
}: TEditableFormProps<T>): JSX.Element => {
  const [editableData, setEditableData] = useState<
    TRequestData | object | undefined
  >(undefined)

  const collection = data
    ? notesCollectionFormData.map(item => ({
        ...item,
        value: data[item.id]
      }))
    : notesCollectionFormData

  const selectedField = collection.find(item => item.id === field) || null

  if (data && !editableData) {
    setEditableData(data)
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setEditableData(prevData => ({ ...prevData, [field]: e.target.value }))
  }

  const handleKeyPress = async (
    e: KeyboardEvent<HTMLInputElement>
  ): Promise<void> => {
    if (e.key === 'Enter') {
      const req = await request({
        method: 'PATCH',
        url: `${NOTE_PAGE_API_URL + id}`,
        data: editableData
      })
      mutate(`${NOTE_PAGE_API_URL + id}`, req, false)
      setIsEditing()
    } else if (e.key === 'Escape') {
      mutate(`${NOTE_PAGE_API_URL + id}`, data, false)

      setIsEditing()
    }
  }

  if (!selectedField || !editableData) return <></>

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
        translations={translations}
        selectedField={selectedField}
        editableData={editableData}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        onEditStatus={onEditStatus}
        {...props}
      />
    )
  }

  if (selectedField.type !== 'text' && selectedField.type !== 'url') {
    return <></>
  }

  return isEditing && editableData?.[field] ? (
    <input
      type={selectedField.type}
      name={selectedField.id}
      placeholder={selectedField.placeholder}
      onChange={handleInputChange}
      onKeyDown={handleKeyPress}
      value={editableData[field]}
      className="my-2 block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    />
  ) : (
    <Paragraph
      className="text-sm font-semibold leading-6 text-gray-900"
      onClick={onEditStatus}
      {...props}
    >
      {data?.[field]}
    </Paragraph>
  )
}

export default EditableForm
