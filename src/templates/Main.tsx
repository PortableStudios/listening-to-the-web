import React, { ReactNode } from 'react';

import Link from 'next/link';

import { Navbar } from '../navigation/Navbar';
import { Config } from '../utils/Config';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="antialiased w-full text-gray-700 px-3 md:px-0">
    {props.meta}

    <div className="mx-auto max-w-screen-md">
      <div className="border-b border-gray-300">
        <div className="pt-16 pb-8">
          <div className="text-3xl font-semibold text-gray-900">{Config.title}</div>
          <div className="text-xl">{Config.description}</div>
        </div>
        <div>
          <Navbar>
            <li className="mr-6">
              <Link href="/" aria-label="Home Page">
                <a>Home</a>
              </Link>
            </li>
            <li className="mr-6">
              <Link href="/button/" aria-label="Explore Accessible Buttons">
                <a>Buttons</a>
              </Link>
            </li>
            <li className="mr-6">
              <Link href="/image/" aria-label="Explore Accessible Images">
                <a>Images</a>
              </Link>
            </li>
            <li className="mr-6">
              <Link href="/table/" aria-label="Explore Accessible Tables">
                <a>Tables</a>
              </Link>
            </li>
          </Navbar>
        </div>
      </div>
      <div className="py-5 text-xl">{props.children}</div>
    </div>
  </div>
);

export { Main };
