import { Session } from 'next-auth'

export type TBaseCommonProps<T = any> = T & {
  children?: React.ReactNode
  ref?: React.Ref<any>
  className?: string
}

export type TBaseCommonAppComponentProps<T = any> = T & {
  session?: Session | null
  translations?: {
    [key: string]: string
  }
}

export type TBaseFormProps<T = any> = T & {
  onSubmit: (e: any) => void
  data: any[]
  transations: { [key: string]: string }
}

export type TBaseCommonAppPageProps<T = any> = T & {
  params: {
    locale: string
    id?: string
  }
}
