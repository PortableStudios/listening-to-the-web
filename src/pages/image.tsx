import React from 'react';

import { Content } from '../content/Content';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import CallOut from './Callout';
import MainHeading from './MainHeading';

const Image = () => (
  <Main
    meta={<Meta title="Image's - use proper Alt Tags" description="Explore these image examples" />}
  >
    <MainHeading>Image&#39;s - use proper Alt Tags</MainHeading>
    <CallOut>
      An image alt tag is a vital part of the Accessibility markup.
      <div className="mt-10">
        On VoiceOver, Navigate by 'Graphics' on the keyboard by pressing
        {' '}
        <span className="text-red-300">Cmd + Option + Control + Left or Right</span>
        . After
        selecting you can now navigate through each option by
        {' '}
        <span className="text-red-300">Cmd + Option + Control + Up or Down.</span>
      </div>
      <div className="mt-10">
        Optional:
        {' '}
        <span className="text-red-300">Cmd + Option + Control + g</span>
        {' '}
        and
        {' '}
        <span className="text-red-300">Cmd + Option + Control + Shift + g</span>
        {' '}
        to search
        backwards.
        {' '}
      </div>
    </CallOut>
    <Content>
      <div>
        <h2>Image with No Alt Text</h2>
        <img src="../../assets/images/dog-out-window.jpg" />
      </div>
      <div>
        <h2>Image with Alt Text that is misleading</h2>
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
