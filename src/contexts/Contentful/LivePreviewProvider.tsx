import { FC, ReactNode } from 'react'

type TLivePreviewProviderProps = {
  children?: ReactNode
}

const LivePreviewProvider: FC<TLivePreviewProviderProps> = ({ children }) =>
  children

export default LivePreviewProvider
