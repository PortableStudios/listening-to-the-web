import React, { ReactNode } from 'react';

type INavbarProps = {
  children: ReactNode;
};

const Navbar = (props: INavbarProps) => (
  <nav className="top-0 left-0 flex-wrap px-2 py-8 text-xl border-r-2 border-gray-100 bg-gray-50 navbar xl:px-16 xl:py-12 xl:h-screen xl:fixed">
    <ul className="mx-auto max-w-screen-md">
      {props.children}
      <style jsx>
        {`
          .navbar :global(a) {
            @apply text-gray-700;
          }

          .navbar :global(a:hover) {
            @apply no-underline text-gray-900;
          }
        `}
      </style>
    </ul>
  </nav>
);

export { Navbar };
