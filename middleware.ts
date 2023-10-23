import { i18nRouter } from 'next-i18n-router'
import { NextRequest } from 'next/server'

import { I18N } from '@config'

export const middleware = (request: NextRequest) => {
  return i18nRouter(request, I18N)
}

export const config = {
  matcher: '/((?!api|static|.*..*|_next).*)'
}
