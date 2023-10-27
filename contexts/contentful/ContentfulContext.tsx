import { createContext, useContext } from 'react'

import { contentful } from '@configs/contentful'
import { TBaseCommonProps } from 'types/base'

export type TContentfulContext<T = any> = T & {
  locale?: string
  spaceIds: {
    main: string
  }
  previewActive: boolean
}

export const contentfulContextConfig: TContentfulContext = {
  locale: 'en',
  spaceIds: {
    main: contentful.cms.space_id
  },
  previewActive: false
}

export const ContentfulContext = createContext<TContentfulContext>(
  contentfulContextConfig
)

export const useContentfulContext = () => useContext(ContentfulContext)

export type TContentfulContextProviderProps<T = any> = Omit<
  TBaseCommonProps,
  'ref' | 'className'
> &
  T & {
    router: {
      query: {
        preview?: string
      }
      locale?: string
    }
  }

/**
 * A contextful provider component.
 *
 * @param children - The contextful provider children.
 * @returns A contextful provider element.
 */
const ContextfulProvider = <T,>({
  children,
  router
}: TContentfulContextProviderProps<T>): JSX.Element => {
  const previewActive = !!router.query.preview

  return (
    <ContentfulContext.Provider
      value={{
        locale: typeof router.locale === 'string' ? router.locale : 'en',
        spaceIds: {
          main: contentful.cms.space_id
        },
        previewActive
      }}
    >
      {children}
    </ContentfulContext.Provider>
  )
}

export default ContextfulProvider
