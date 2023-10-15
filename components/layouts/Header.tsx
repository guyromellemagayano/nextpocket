'use client'

import { FC, useState } from 'react'

import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import { signOut } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@components'
import { useRedirect } from '@hooks'
import { arrayFilter } from '@utils'

/**
 * Header component that displays the navigation bar and menu for the NextPocket website.
 */
const Header: FC = (): JSX.Element => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)
  const { navigation, session, status } = useRedirect()

  const middleLinks =
    !session && status === 'unauthenticated'
      ? arrayFilter(navigation, 'slug', ['home'], undefined, false)
      : arrayFilter(navigation, 'slug', ['home', 'notes'], undefined, false)

  const rightLinks =
    !session && status === 'unauthenticated'
      ? arrayFilter(navigation, 'slug', ['login'], undefined, false)
      : arrayFilter(navigation, 'slug', ['profile', 'logout'], undefined, false)

  return (
    <header className="bg-white sm:sticky md:top-0 relative z-10 border-b-2 border-gray-100">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">NextPocket</span>
            <Image
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              width={38}
              height={32}
              alt=""
            />
          </Link>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {middleLinks.map(item => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex flex-1 items-center justify-end gap-x-6">
          {rightLinks
            .sort(
              (a, b) =>
                (a.slug === 'profile' || a.slug === 'login' ? -1 : 1) -
                (b.slug === 'profile' || a.slug === 'login' ? -1 : 1),
            )
            .map(item =>
              item.slug === 'profile' || item.slug === 'login' ? (
                <Link
                  key={item.name}
                  href={item.href}
                  className={clsx(
                    item.slug === 'profile' || item.slug === 'login'
                      ? 'rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                      : 'hidden lg:block lg:text-sm lg:font-semibold lg:leading-6 lg:text-gray-900',
                  )}
                >
                  {item.name}
                </Link>
              ) : (
                <Button
                  key={item.name}
                  className="hidden lg:block lg:text-sm lg:font-semibold lg:leading-6 lg:text-gray-900"
                  onClick={() =>
                    signOut({
                      callbackUrl: '/login',
                    })
                  }
                >
                  {item.name}
                </Button>
              ),
            )}
        </div>
        <div className="flex lg:hidden">
          <Button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </Button>
        </div>
      </nav>

      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center gap-x-6">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">NextPocket</span>
              <Image
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                width={38}
                height={32}
                alt=""
              />
            </a>

            {navigation
              .filter(item => item.slug === 'profile')
              .map(item => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="ml-auto rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {item.name}
                </Link>
              ))}

            <Button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </Button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation
                  .filter(
                    item => item.slug !== 'login' && item.slug !== 'profile',
                  )
                  .map(item => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}

export default Header
