'use client'

import { ChangeEvent, FC, KeyboardEvent, useState } from 'react'
import { mutate } from 'swr'

import Avatar from '@components/avatar/Avatar'
import Paragraph from '@components/typography/Paragraph'
import { NOTE_PAGE_API_URL } from '@config/api'
import { NOTES_COLLECTION_FORM_DATA, TNotesPageNotesData } from '@config/data'
import request, { TRequestData } from '@helpers/request'

type TEditableFormProps = {
  field: keyof TNotesPageNotesData
  params?: any
  data?: TNotesPageNotesData
  width?: number
  height?: number
  [key: string]: any
}

/**
 * A reusable editable form component.
 *
 * @param field - The field to edit
 * @param params - The params of the component
 * @param data - The data of the component
 * @param width - The width of the component
 * @param height - The height of the component
 * @returns The editable form component
 */
const EditableForm: FC<TEditableFormProps> = ({
  field,
  params,
  data,
  isEditing,
  width,
  height,
  setIsEditing,
  onEditStatus,
  ...props
}) => {
  const [editableData, setEditableData] = useState<TRequestData | null>(null)

  const collection = data
    ? NOTES_COLLECTION_FORM_DATA.map(item => ({
        ...item,
        value: data[item.id]
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
    e: KeyboardEvent<HTMLInputElement>
  ): Promise<void> => {
    if (e.key === 'Enter') {
      const req = await request({
        method: 'PATCH',
        url: `${NOTE_PAGE_API_URL + params.id}`,
        data: editableData
      })
      mutate(`${NOTE_PAGE_API_URL + params.id}`, req, false)
      setIsEditing()
    } else if (e.key === 'Escape') {
      mutate(`${NOTE_PAGE_API_URL + params.id}`, data, false)

      setIsEditing()
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
        setIsEditing={setIsEditing}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        onEditStatus={onEditStatus}
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
