import React from 'react';

import { Content } from '../content/Content';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const Home = () => (
  <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    <Content>
      <h1 className="mb-6 text-2xl">Home</h1>
      <div className="bg-black text-white p-10">
        Welcome to the Accessibility Playground!
        Turn on you VoiceOver option on your mac  by going to <span className="text-green-200">`Accessibiliy` => `VoiceOver` and ticking the checkbox</span>
      </div>
    </Content>
  </Main>
);

export default Home;
