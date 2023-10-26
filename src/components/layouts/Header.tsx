import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import { signOut } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { FC, useState } from 'react'

import AuthCheck from '@components/auth/AuthCheck'
import AuthRedirect from '@components/auth/AuthRedirect'
import Button from '@components/buttons/Button'
import arrayFilter from '@utils/arrayFilter'

/**
 * Header component that displays the navigation bar and menu for the NextPocket website.
 *
 * @returns The header component
 */
const Header: FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)

  const { session, navigation } = AuthRedirect()

  const middleLinks = !session
    ? arrayFilter(navigation, 'slug', ['home'], undefined, false)
    : arrayFilter(navigation, 'slug', ['home', 'notes'], undefined, false)

  const rightLinks = !session
    ? arrayFilter(navigation, 'slug', ['login'], undefined, false)
    : arrayFilter(navigation, 'slug', ['profile', 'logout'], undefined, false)

  const sidebarCtaLink = !session
    ? arrayFilter(navigation, 'slug', ['login'], undefined, false)
    : arrayFilter(navigation, 'slug', ['profile'], undefined, false)

  return (
    <header className="relative z-10 border-b-2 border-gray-100 bg-white sm:sticky md:top-0">
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
          {middleLinks.map(item =>
            item.slug === 'notes' ? (
              <AuthCheck key={item.name}>
                <Link
                  href={item.href}
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  {item.name}
                </Link>
              </AuthCheck>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                {item.name}
              </Link>
            )
          )}
        </div>
        <div className="flex flex-1 items-center justify-end gap-x-6">
          {rightLinks
            .sort(
              (a, b) =>
                (a.slug === 'profile' || a.slug === 'login' ? -1 : 1) -
                (b.slug === 'profile' || a.slug === 'login' ? -1 : 1)
            )
            .map(item =>
              item.slug === 'profile' ? (
                <AuthCheck key={item.name}>
                  <Link
                    href={item.href}
                    className={clsx(
                      item.slug === 'profile'
                        ? 'rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                        : 'hidden lg:block lg:text-sm lg:font-semibold lg:leading-6 lg:text-gray-900'
                    )}
                  >
                    {item.name}
                  </Link>
                </AuthCheck>
              ) : item.slug === 'login' ? (
                <Link
                  key={item.name}
                  href={item.href}
                  className={clsx(
                    item.slug === 'login'
                      ? 'rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                      : 'hidden lg:block lg:text-sm lg:font-semibold lg:leading-6 lg:text-gray-900'
                  )}
                >
                  {item.name}
                </Link>
              ) : (
                <AuthCheck key={item.name}>
                  <Button
                    className="hidden lg:block lg:text-sm lg:font-semibold lg:leading-6 lg:text-gray-900"
                    onClick={() =>
                      signOut({
                        callbackUrl: '/login'
                      })
                    }
                  >
                    {item.name}
                  </Button>
                </AuthCheck>
              )
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

            {sidebarCtaLink.map(item => (
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
                {[...middleLinks, ...rightLinks]
                  .filter(item => item.slug !== 'profile')
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
