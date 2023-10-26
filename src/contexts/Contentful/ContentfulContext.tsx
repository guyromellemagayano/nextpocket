import { createContext, useContext } from 'react'

import { contentfulConfigs } from '@configs/contentful'

export type TContentfulContext = {
  locale?: string
  spaceIds: {
    main: string
  }
  previewActive: boolean
}

export const contentfulContextConfig: TContentfulContext = {
  locale: 'en',
  spaceIds: {
    main: contentfulConfigs.cms.space_id
  },
  previewActive: false
}

export const ContentfulContext = createContext<TContentfulContext>(
  contentfulContextConfig
)

export const useContentfulContext = () => useContext(ContentfulContext)

const ContextfulProvider = ({ children, router }) => {
  const previewActive = !!router.query.preview

  return (
    <ContentfulContext.Provider
      value={{
        locale: typeof router.locale === 'string' ? router.locale : 'en',
        spaceIds: {
          main: contentfulConfigs.cms.space_id
        },
        previewActive
      }}
    >
      {children}
    </ContentfulContext.Provider>
  )
}

export default ContextfulProvider
