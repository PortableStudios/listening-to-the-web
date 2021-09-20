import React from 'react';

import Link from 'next/link';

import { Content } from '../content/Content';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import CallOut from './Callout';
import MainHeading from './MainHeading';

const Home = () => (
  <Main meta={<Meta title="Home Page" description="Listening to the Web Home Page" />}>
    <Content>
      <MainHeading>Home Page</MainHeading>
      <p>Disclaimer: Instructions for this site is currently only with Mac VoiceOver</p>
      <CallOut>
        <span className="text-green-200">Welcome to the Accessibility Playground!</span>
        {' '}
        Turn on you
        VoiceOver option on your mac by going to your Settings, clicking on Accessibility, then
        VoiceOver and ticking the check box. Or press
        {' '}
        <span className="text-red-300">Command + F5</span>
        {' '}
        to turn on (press twice to turn off).
      </CallOut>
      <p> Here&#39;s some Basic commands to get you started:</p>
      <CallOut>
        <ul>
          <li>
            <span className="text-red-300">Tab</span>
            {' '}
            to jump to different links
          </li>
          <li>
            <span className="text-red-300">Control</span>
            {' '}
            to pause/skip the Reader
          </li>
          <li>
            <span className="text-red-300">Control + Option + Command + Left or Right</span>
            {' '}
            to
            select what element you want to navigate e.g. Landmark link
          </li>
          <li>
            <span className="text-red-300">Control + Option + Command + Up or Down</span>
            {' '}
            to
            navigate through the selected element link
          </li>
          <li>
            <span className="text-red-300">Control + Option + Space</span>
            {' '}
            to select the selected
            link
          </li>
          <li>
            <span className="text-red-300">Control + Option + A</span>
            {' '}
            Read from current position to
            end of the page
          </li>
          <li>
            Checkout this
            {' '}
            <Link href="https://www.maxability.co.in/voiceover-mac-commands/">
              <a className="text-red-300 underline" target="_blank" rel="noreferrer">
                {' '}
                Command Cheatsheet
                {' '}
              </a>
            </Link>
            {' '}
            for even more commands!
          </li>
        </ul>
      </CallOut>
    </Content>
  </Main>
);

export default Home;
