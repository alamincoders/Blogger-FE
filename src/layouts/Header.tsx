import { useState } from 'react';

import Button from '@/components/button';
import NavLink from '@/components/link';

type HeaderPropsTypes = {
  from?: string;
};

export default function Header({ from = 'home' }: HeaderPropsTypes) {
  const [user, setUser] = useState<boolean>(false);

  return (
    <div className=" border-b-[1px] border-gray-600/20 bg-[#1D2535] p-3">
      <nav
        className={`${
          from === 'home' ? '' : 'container mx-auto max-w-[1290px] px-4'
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 text-2xl font-medium">
            <NavLink
              className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-xl font-extrabold uppercase text-transparent"
              href="/"
            >
              Coder_Galib
            </NavLink>
            <div className="relative hidden lg:block">
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Search on coder galib"
                className="w-72 rounded-full border border-gray-100/20 bg-[#0A0F19] py-2 pr-3 pl-12 text-[16px] text-white outline-none placeholder:text-gray-600"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="absolute top-3 left-4 h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </div>
          </div>
          {user && (
            <div className="hidden items-center space-x-10 lg:flex">
              <div className="flex cursor-pointer items-center space-x-2 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                  />
                </svg>
                <h3>Write</h3>
              </div>
              <div className="cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                  />
                </svg>
              </div>
              <div
                onClick={() => setUser(false)}
                className="flex cursor-pointer items-center space-x-1"
              >
                <div className="h-8 w-8  rounded-[50%] bg-white">
                  <img src="" alt="" />
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
            </div>
          )}
          {!user && (
            <div className="hidden items-center space-x-6 text-[14px] font-medium lg:flex">
              <NavLink href="/" className="cursor-pointer text-gray-500">
                Our Story
              </NavLink>{' '}
              <NavLink href="/" className="cursor-pointer text-gray-500">
                Membership
              </NavLink>{' '}
              <NavLink href="/support" className="cursor-pointer text-gray-500">
                Support
              </NavLink>{' '}
              <NavLink href="/" className="cursor-pointer text-gray-500">
                Sign in
              </NavLink>
              <Button
                onClick={() => setUser(true)}
                className="cursor-pointer bg-[#C1383C]"
              >
                Get Started
              </Button>
            </div>
          )}
          <Button className="bg-[#C1383C] lg:hidden">Get Started</Button>
        </div>
      </nav>
    </div>
  );
}
