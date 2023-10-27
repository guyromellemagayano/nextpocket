import { TBaseCommonProps } from 'types/base'

export type TLivePreviewProviderProps<T = any> = TBaseCommonProps & T

/**
 * A live preview provider component.
 *
 * @param children - The live preview provider children.
 * @returns A live preview provider element.
 */
const LivePreviewProvider = <T,>({
  children
}: TLivePreviewProviderProps<T>): React.ReactNode => children

export default LivePreviewProvider
