import React, { useState } from 'react';
import Image from 'next/image';
import { Disclosure } from '@headlessui/react';
import { Icon } from '@iconify/react';

const socialLinks = [
  { id: 0, icon: 'akar-icons:linkedin-fill', href: '#' },
  { id: 1, icon: 'akar-icons:twitter-fill', href: '#' },
  { id: 2, icon: 'akar-icons:discord-fill', href: '#' },
  { id: 3, icon: 'akar-icons:instagram-fill', href: '#' }
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const [navigation, setNavigation] = useState([
    { id: 0, name: 'About', href: '#about', current: false },
    { id: 2, name: 'Roadmap', href: '#roadmap', current: false },
    { id: 3, name: 'FAQ', href: '#faq', current: false },
    { id: 4, name: 'Team', href: '#team', current: false }
  ]);
  const gotoSection = (id) => {
    console.log(id);
    const _navigation = [...navigation];
    _navigation.forEach(item => {
      item.current = false;
      if (item.id === id) {
        item.current = true;
      }
    });
    setNavigation(_navigation);
  };
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <Icon icon="bi:x-lg" className="block h-6 w-6" />
                  ) : (
                    <Icon icon="ant-design:menu-outlined" className="block h-6 w-6" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center xs:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <Image
                    className="block lg:hidden h-8 w-auto"
                    src="/assets/images/logo.png"
                    alt="Chuel"
                    width={50}
                    height={50}
                  />
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                        onClick={() => gotoSection(item.id)}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                {
                  socialLinks.map((link) => (
                    <a
                      key={link.id}
                      className="
                        rounded-full 
                        bg-gradient-to-r from-cyan-500 to-blue-500 
                        
                      text-white
                      hover:from-white hover:to-white
                        hover:text-cyan-600
                        xl:text-xl
                        lg:text-xl
                        md:text-xl
                        sm:text-xl
                        text-sm p-2
                      "
                      target="_blank"
                      rel="noreferrer"
                      href={link.href}
                    >
                      <Icon icon={link.icon} />
                    </a>
                  ))
                }
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                  onClick={() => gotoSection(item.id)}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}