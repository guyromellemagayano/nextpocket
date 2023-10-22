'use client'

import { yupResolver } from '@hookform/resolvers/yup'
import clsx from 'clsx'
import { FC } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import { Button } from '@components'
import { TNotesCollectionFormData } from '@config'

export type TFormProps = {
  data: TNotesCollectionFormData[]
  onSubmit: (e: any) => void
  [key: string]: any
}

/**
 * Defines the Yup validation schema for the form.
 *
 * @param data - The form data.
 * @param onSubmit - The form submit handler.
 * @returns A form element.
 */
const Form: FC<TFormProps> = ({ data, onSubmit, ...props }) => {
  const formSchema = yup.object().shape(
    data.reduce(
      (acc: any, curr: any) => {
        switch (curr.type) {
          case 'email':
            acc[curr.id] = yup
              .string()
              .required()
              .email()
              .min(curr.minLength)
              .max(curr.maxLength)
            break
          case 'url':
            acc[curr.id] = yup
              .string()
              .required()
              .url()
              .min(curr.minLength)
              .max(curr.maxLength)
            break
          default:
            acc[curr.id] = yup
              .string()
              .required()
              .min(curr.minLength)
              .max(curr.maxLength)
            break
        }

        return acc
      },
      {} as { [key: string]: yup.StringSchema }
    )
  )

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(formSchema),
    mode: 'onSubmit',
    reValidateMode: 'onChange'
  })

  return (
    <form
      className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      {...props}
    >
      <div className="px-4 py-6 sm:p-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-3">
          {data.map(({ id, placeholder, type }) => (
            <div key={id} className="sm:col-span-4">
              <div className="mt-2">
                <div
                  className={clsx(
                    'flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset ',
                    errors[id]
                      ? 'focus-within:ring-red-600'
                      : 'focus-within:ring-indigo-600'
                  )}
                >
                  <input
                    type={type}
                    id={id}
                    className={clsx(
                      'block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6',
                      errors[id]
                        ? 'focus:ring-red-600'
                        : 'focus:ring-indigo-600'
                    )}
                    placeholder={placeholder}
                    aria-invalid={errors[id] ? true : false}
                    {...register(id)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-evenly border-t border-gray-900/10 px-4 py-4 sm:px-8">
        <Button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </Button>
      </div>
    </form>
  )
}

export default Form
