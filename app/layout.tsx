'use client'

import { Fragment } from 'react'

import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'
import 'focus-visible'
import { Inter } from 'next/font/google'
import Link from 'next/link'

import { Main, Paragraph } from '@components'
import { IRootLayoutPageLinksData } from '@interfaces'

import '@styles/globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const RootLayout = ({ children }): JSX.Element => {
  const pageLinks: IRootLayoutPageLinksData[] = [
    { label: 'Home', href: '/', description: 'Go to Home' },
    { label: 'Notes', href: '/notes', description: 'Go to Notes' },
  ]

  return (
    <html lang="en">
      <body className={clsx(inter.className, 'px-3 py-6')}>
        <header className="flex justify-center">
          <Popover className="relative">
            {({ open }) => (
              <>
                <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                  <span>Menu</span>
                  <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
                </Popover.Button>

                <Transition
                  as={Fragment}
                  show={open}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel
                    className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4"
                    static
                  >
                    <div className="w-screen max-w-sm flex-auto rounded-3xl bg-white p-4 text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                      {pageLinks.map(({ label, href, description }) => (
                        <div
                          key={href}
                          className="relative rounded-lg p-4 hover:bg-gray-50"
                        >
                          <Link
                            href={href}
                            className="font-semibold text-gray-900"
                          >
                            {label}
                            <span className="absolute inset-0" />
                          </Link>
                          <Paragraph
                            className="mt-1 text-gray-600"
                            message={description}
                          />
                        </div>
                      ))}
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
        </header>
        <Main>{children}</Main>
      </body>
    </html>
  )
}

export default RootLayout
