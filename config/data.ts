import { INotesCollectionFormData, IPageLinks } from '@interfaces'

export const NOTES_COLLECTION_FORM_DATA: INotesCollectionFormData[] = [
  {
    id: 'title',
    placeholder: 'Title',
    type: 'text',
    required: true,
    minLength: 2,
    maxLength: 255,
  },
  {
    id: 'company',
    placeholder: 'Company',
    type: 'text',
    required: true,
    minLength: 1,
    maxLength: 255,
  },
  {
    id: 'avatar',
    placeholder: 'Avatar',
    type: 'url',
    required: true,
    minLength: 8,
    maxLength: 512,
  },
  {
    id: 'name',
    placeholder: 'Name',
    type: 'text',
    required: true,
    minLength: 2,
    maxLength: 255,
  },
  {
    id: 'department',
    placeholder: 'Department',
    type: 'text',
    required: true,
    minLength: 2,
    maxLength: 255,
  },
]

export const PAGE_LINKS: IPageLinks[] = [
  { name: 'Home', href: '/' },
  { name: 'Notes', href: '/notes' },
]
