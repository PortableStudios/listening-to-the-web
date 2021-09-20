import React, { ReactNode } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { Navbar } from '../navigation/Navbar';
import Divider from '../pages/Divider';
import { Config } from '../utils/Config';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const StyledLink: React.FC<{ href: string }> = ({ href, children }) => {
  const router = useRouter();
  return (
    <Link href={href}>
      <a className={router.pathname === href ? 'font-bold underline' : ''}>{children}</a>
    </Link>
  );
};

const Main = (props: IMainProps) => (
  <div className="w-full px-3 antialiased text-gray-700 xl:pl-96 xl:flex md:px-0">
    {props.meta}
    <header>
      <Navbar>
        <div className="pt-2 pb-2">
          <div className="text-3xl font-semibold text-gray-900">{Config.title}</div>
          <div className="text-xl">{Config.description}</div>
        </div>
        <Divider />
        <li className="mr-6">
          <StyledLink href="/">Home</StyledLink>
        </li>
        <li className="mr-6">
          <StyledLink href="/button">Buttons - Don&#39;t use div&#39;s as buttons</StyledLink>
        </li>
        <li className="mr-6">
          <StyledLink href="/image">Images - Use proper Alt tags</StyledLink>
        </li>
        <li className="mr-6">
          <StyledLink href="/table">Tables - TH headings and captions</StyledLink>
        </li>
        <li className="mr-6">
          <StyledLink href="/resources">Resources</StyledLink>
        </li>
      </Navbar>
    </header>

    <main className="mx-auto max-w-screen-md">
      <div className="py-16 text-xl">{props.children}</div>
    </main>
  </div>
);

export { Main };
