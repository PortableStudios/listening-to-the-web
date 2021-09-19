import React from 'react';

import { Content } from '../content/Content';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const Home = () => (
  <Main meta={<Meta title="Home Page" description="Listening to the Web Home Page" />}>
    <Content>
      <h1 className="mb-6 text-2xl">Home</h1>
      <div className="bg-black text-white p-10">
        Welcome to the Accessibility Playground! Turn on you VoiceOver option on your mac by going
        to your Settings, clicking on
        {' '}
        <span className="text-green-200">
          `Accessibiliy, then VoiceOver and ticking the checkbox.
        </span>
        .
        <h2> Some Basic commands to get you started:</h2>
        <ul>
          <li>Tab to jump to different links</li>
          <li>Control + Option + Space to select the link</li>
          <li>Control + Option + A for an auto read of the page frrom top to bottom</li>
        </ul>
      </div>
    </Content>
  </Main>
);

export default Home;
