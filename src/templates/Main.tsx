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
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li className="mr-6">
              <Link href="/button/">
                <a>Buttons - Don't use div's as buttons</a>
              </Link>
            </li>
            <li className="mr-6">
              <Link href="/image/">
                <a>Images - Use proper Alt tags</a>
              </Link>
            </li>
            <li className="mr-6">
              <Link href="/table/">
                <a>Tables - TH headings and captions</a>
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
