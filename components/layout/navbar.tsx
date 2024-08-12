/* eslint-disable @next/next/no-img-element */
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from '@/assets/logo.svg'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const navigation = [
    { name: 'About Us', href: '#', current: false },
    { name: 'Our Services', href: '#', current: false },
    { name: 'Testimonials', href: '#', current: false },
    { name: 'Our Team', href: '#', current: false },
    { name: 'More From Manago', href: '#', current: false },
]

function classNames(...classes: (string | boolean | undefined)[]): string {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    return (
        <Disclosure as="nav" className="bg-transparent">
            <div className="mx-auto max-6-xl lg:max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-24 items-center justify-between">
                    <div className="flex items-center justify-between lg:items-stretch w-full">
                        <div className="flex flex-shrink-0 items-center justify-start ">
                            <Image src={logo.src} alt="logo" className='' width={60} height={60} />
                        </div>
                        <div className="hidden lg:ml-6 lg:block">
                            <div className="flex space-x-2">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        aria-current={item.current ? 'page' : undefined}
                                        className={classNames(
                                            item.current ? 'bg-gray-900 text-white' : 
                                            'text-sm font-normal text-white  hover:bg-black',
                                            'rounded-md px-2 py-2',
                                        )}>
                                        {item.name}
                                    </a>
                                ))}
                            </div>

                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center lg:hidden">
                        {/* Mobile menu button */}
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-500 bg-transparent border-none hover:border-none hover:bg-yellow-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                            <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
                        </DisclosureButton>
                    </div>
                </div>
            </div>

            <DisclosurePanel className="lg:hidden absolute w-full bg-white/60 z-10">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    {navigation.map((item) => (
                        <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            aria-current={item.current ? 'page' : undefined}
                            className={classNames(
                                item.current ? 'bg-gray-900 text-white' : 'text-sm font-bold text-black hover:text-yellow-500 hover:bg-black',
                                'block rounded-md px-3 py-2 text-base font-medium',
                            )}
                        >
                            {item.name}
                        </DisclosureButton>
                    ))}
                </div>
            </DisclosurePanel>
        </Disclosure>
    )
}