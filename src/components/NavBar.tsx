import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export const NavBar: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = useState(false)
  return <nav className="bg-gray-900">
    <div className="max-w-6xl mx-auto px-2 sm:px-6 lg:px-8">
      <div className="relative flex items-center justify-between h-16">
        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">

          <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out">
            <svg className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>

            <svg className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <div className="hidden sm:block sm:ml-6">
            <div className="flex">
              <NavBarHomeButton>
                Home
              </NavBarHomeButton>
                <NavBarItemButton>
                  TypeScript
                </NavBarItemButton>
            </div>
          </div>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <button className="p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-white focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">
            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>

          <div className="ml-3 relative">
            <div>
              <button className="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-white transition duration-150 ease-in-out">
                <a href={'https://github.com/mauriceLC92'}>
                  <FontAwesomeIcon icon={faGithub} color='white' size='2x' />
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`}>
      <div className="px-2 pt-2 pb-3">
        <NavBarHomeButton>Home</NavBarHomeButton>
        <NavBarItemButtonMobile>TypeScript</NavBarItemButtonMobile>
      </div>
    </div>
  </nav>
}


interface NavbarItem {
  children: React.ReactNode;
}
const NavBarHomeButton: React.FunctionComponent<NavbarItem> = ({ children }) => {
  return <>
    <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium leading-5 text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">
      {children}
    </Link>
  </>
}

const NavBarItemButton: React.FunctionComponent<NavbarItem> = ({ children }) => {
  return <>
    <Link to={`${children?.toString().toLocaleLowerCase()}`} className="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">
      {children}
    </Link>
  </>
}

const NavBarItemButtonMobile: React.FunctionComponent<NavbarItem> = ({ children }) => {
  return <>
    <Link to={`${children?.toString().toLocaleLowerCase()}`} className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">
      {children}
    </Link>
  </>
}

