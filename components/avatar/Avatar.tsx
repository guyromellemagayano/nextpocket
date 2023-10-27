import { Dialog, Transition } from '@headlessui/react'
import clsx from 'clsx'
import type { ImageProps } from 'next/image'
import {
  ChangeEvent,
  ForwardRefRenderFunction,
  Fragment,
  KeyboardEvent,
  useRef,
  useState
} from 'react'

import Button from '@components/buttons/Button'
import Image from '@components/images/Image'
import Paragraph from '@components/typography/Paragraph'
import { TRequestData } from '@helpers/request'
import { TNotesCollectionFormData, TNotesPageNotesData } from 'configs/data'
import { TBaseCommonAppComponentProps } from 'types/base'

export type TAvatarProps<T = any> = ImageProps &
  Omit<TBaseCommonAppComponentProps, 'session'> &
  T & {
    field: keyof TNotesPageNotesData
    selectedField: TNotesCollectionFormData
    editableData?: TRequestData
    isEditing: boolean
    setIsEditing: (value: boolean) => void
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    onKeyPress: (e: KeyboardEvent<HTMLInputElement>) => void
    onEditStatus: () => void
  }

/**
 * Avatar component that displays an image and allows editing of a specific field.
 *
 * @param src - The image source
 * @param width - The image width
 * @param height - The image height
 * @param field - The field to edit
 * @param selectedField - The selected field
 * @param editableData - The editable data
 * @param isEditing - The editing status
 * @param setIsEditing - The editing status setter
 * @param onChange - The change event handler
 * @param onKeyPress - The key press event handler
 * @param onEditStatus - The edit status event handler
 * @returns The avatar component
 */
const Avatar: ForwardRefRenderFunction<HTMLButtonElement, TAvatarProps> = <T,>(
  {
    field,
    selectedField,
    editableData,
    isEditing,
    setIsEditing,
    src,
    alt,
    width,
    height,
    translations,
    onChange,
    onKeyPress,
    onEditStatus
  }: TAvatarProps<T>,
  forwardedRef: any
): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false)
  const cancelButtonRef = useRef<HTMLButtonElement>(null)

  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div>
                    <Image
                      src={src}
                      width={width}
                      height={height}
                      alt={alt}
                      className="mx-auto mt-3 flex h-12 w-12 items-center justify-center rounded-full"
                    />
                    <div className="mt-3 text-center sm:mt-5">
                      {isEditing && editableData?.[field] && selectedField ? (
                        <input
                          type={selectedField.type}
                          name={selectedField.id}
                          placeholder={selectedField.placeholder}
                          onChange={onChange}
                          onKeyDown={onKeyPress}
                          value={editableData[field]}
                          className="my-2 block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      ) : (
                        <Paragraph
                          className="truncate text-ellipsis text-sm text-gray-500"
                          onClick={onEditStatus}
                        >
                          {editableData?.[field]}
                        </Paragraph>
                      )}
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-1 sm:gap-3">
                    <Button
                      ref={forwardedRef}
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
                      onClick={() => setOpen(false)}
                    >
                      {translations?.['close'] ?? 'Close'}
                    </Button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <Button
        type="button"
        className={clsx(
          'flex-none overflow-hidden rounded-full bg-gray-50',
          width && `w-${width}px`,
          height && `h-${height}px`
        )}
        onClick={() => {
          setIsEditing
          setOpen(true)
        }}
      >
        <Image src={src} width={width} height={height} alt="" />
      </Button>
    </>
  )
}

export default Avatar
