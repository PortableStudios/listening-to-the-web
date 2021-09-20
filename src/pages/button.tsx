import React from 'react';

import { Content } from '../content/Content';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import CallOut from './Callout';
import MainHeading from './MainHeading';

const Button = () => (
  <Main meta={<Meta title="Buttons" description="Play around with some button examples" />}>
    <MainHeading>Buttons - Don&#39;t use divs as buttons</MainHeading>
    <CallOut>
      Use the correct html elements. A button should never be a div.
      <div className="mt-10">
        On VoiceOver, Navigate by 'Controls' on the keyboard by pressing
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
        <span className="text-red-300">Cmd + Option + Control + j</span>
        {' '}
        and
        {' '}
        <span className="text-red-300">Cmd + Option + Control + Shift + j</span>
        {' '}
        to search
        backwards.
        {' '}
      </div>
    </CallOut>
    <Content>
      <div>
        <h2>The Good (Using button element as a button)</h2>
        <button
          type="button"
          className="p-5 font-bold text-center text-white bg-green-500 w-72 rounded-md point"
          onClick={() => null}
        >
          Go to the Next Step
        </button>
      </div>
      <div>
        <h2>The Bad (Using div as a button)</h2>
        <div className="p-5 font-bold text-center text-white bg-red-500 cursor-pointer w-72 rounded-md">
          Go to the Next Step
        </div>
      </div>
    </Content>
  </Main>
);

export default Button;
