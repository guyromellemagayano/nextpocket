import { TRequestData } from '@helpers/request'

export type TNotesCollectionFormData = {
  id: string
  placeholder: string
  type: string
  required: boolean
  minLength: number
  maxLength: number
}

export const notesCollectionFormData: TNotesCollectionFormData[] = [
  {
    id: 'title',
    placeholder: 'Title',
    type: 'text',
    required: true,
    minLength: 2,
    maxLength: 255
  },
  {
    id: 'company',
    placeholder: 'Company',
    type: 'text',
    required: true,
    minLength: 1,
    maxLength: 255
  },
  {
    id: 'avatar',
    placeholder: 'Avatar',
    type: 'url',
    required: true,
    minLength: 8,
    maxLength: 512
  },
  {
    id: 'name',
    placeholder: 'Name',
    type: 'text',
    required: true,
    minLength: 2,
    maxLength: 255
  },
  {
    id: 'department',
    placeholder: 'Department',
    type: 'text',
    required: true,
    minLength: 2,
    maxLength: 255
  }
]

export type TPageLinks = {
  name: string
  slug: string
  href: string
}

export const pageLinks: TPageLinks[] = [
  { name: 'Home', slug: 'home', href: '/' },
  { name: 'Notes', slug: 'notes', href: '/notes' },
  { name: 'Log in', slug: 'login', href: '/login' },
  { name: 'View profile', slug: 'profile', href: '/profile' },
  { name: 'Log out', slug: 'logout', href: '/logout' }
]

export type TNotesPageNotesData = TRequestData & {
  value?: string
}

export type TNotesListData = {
  page: number
  perPage: number
  totalItems: number
  totalPages: number
  items: TNotesPageNotesData[]
}
