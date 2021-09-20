import React from 'react';

import { Content } from '../content/Content';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import CallOut from './Callout';

const Image = () => (
  <Main meta={<Meta title="Image's with no Alt Tags" description="Explore these image examples" />}>
    <h1 className="mb-6 text-2xl">Image&#39;s with no Alt Tags</h1>
    <CallOut>
      An image alt tag is a vital part of the Accessibiliy markup.
      {' '}
      <span className="text-red-300">Cmd + Option + Control + g</span>
      {' '}
      to go too the next graphic.
      {' '}
      <span className="text-red-300">Cmd + Option + Control + Shift + g</span>
      {' '}
      to go to the prev
      graphic.
    </CallOut>
    <Content>
      <div>
        <h2>Image with No Alt Text</h2>
        <img src="../../assets/images/dog-out-window.jpg" />
      </div>
      <div>
        <h2>Image with Alt Text that is missleading</h2>
        <img src="../../assets/images/dog-out-window.jpg" alt="a duck in the park" />
      </div>
      <div>
        <h2>Image with Alt Text </h2>
        <img src="../../assets/images/dog-out-window.jpg" alt="a dog looking out of the window" />
      </div>
    </Content>
  </Main>
);

export default Image;
