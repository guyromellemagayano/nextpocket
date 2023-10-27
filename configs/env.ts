// Next
export const NEXT_PUBLIC_BASE_URL: string =
  process.env.NEXT_PUBLIC_BASE_URL || ''

// PocketBase API
export const POCKETBASE_API_URL: string =
  process.env.NEXT_PUBLIC_POCKETBASE_API_URL || ''

// PocketBase `notes` collection API
export const NOTES_PAGE_API_URL: string = `${POCKETBASE_API_URL}/api/collections/notes/records?page=1&perPage=10&sort=-created,id`
export const NOTE_PAGE_API_URL: string = `${POCKETBASE_API_URL}/api/collections/notes/records/`

// Contentful API
export const CONTENTFUL_SPACE_ID: string = process.env.CONTENTFUL_SPACE_ID || ''
export const CONTENTFUL_ACCESS_TOKEN: string =
  process.env.CONTENTFUL_ACCESS_TOKEN || ''
export const CONTENTFUL_PREVIEW_ACCESS_TOKEN: string =
  process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN || ''

// i18nexus API
export const I18NEXUS_API_KEY: string = process.env.I18NEXUS_API_KEY || ''
