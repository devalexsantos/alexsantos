import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";

export default function Header(props) {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div>
      <Disclosure
        as="nav"
        className="backdrop-blur-sm fixed w-full z-[999] shadow-xl"
      >
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-center h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Abrir menu Principal</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex items-center justify-center">
                  <div className="flex-shrink-0 flex items-center"></div>
                  <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4">
                      {props.navigation.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          aria-current={item.current ? "page" : undefined}
                        >
                          <a
                            className={classNames(
                              item.current
                                ? "bg-zinc-900 text-white"
                                : "text-gray-300 hover:bg-gray-700 hover:text-white",
                              "px-3 py-2 rounded-md text-sm font-medium"
                            )}
                          >
                            {item.name}
                          </a>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center gap-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <button type="button">
                    <a
                      href={props.info.linkedin}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image
                        src="/assets/icon-linkedin.svg"
                        alt="Linkedin Logo"
                        width={35}
                        height={35}
                      />
                    </a>
                  </button>
                  <button type="button">
                    <a
                      href={props.info.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image
                        src="/assets/icon-github.svg"
                        alt="Linkedin Logo"
                        width={33}
                        height={33}
                      />
                    </a>
                  </button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {props.navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    className={classNames(
                      item.current
                        ? "bg-zinc-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block px-3 py-2 rounded-md text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    <Link href={item.href}>{item.name}</Link>
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}
