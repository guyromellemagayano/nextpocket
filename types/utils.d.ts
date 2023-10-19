export type TArrayFilterProps = (
  array: any[],
  key: string,
  values: any[],
  conditionValue?: any,
  exclude?: boolean,
) => any[]

export type TDatetimeProps = (data: string) => string

export type TFetcherProps = (url: string) => Promise<void | Awaited<T>>
