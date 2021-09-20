import React from 'react';

import { Content } from '../content/Content';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import CallOut from './Callout';

const Button = () => (
  <Main meta={<Meta title="Buttons" description="Play around with some button examples" />}>
    <h1 className="mb-6 text-2xl">Buttons - Don&#39;t use divs as buttons</h1>
    <CallOut>
      A button or a link should never be a div. On VoiceOver you can search for buttons by pressing
      {' '}
      <span className="text-red-300">Cmd + Option + Control + q</span>
      {' '}
      and
      {' '}
      <span className="text-red-300">Cmd + Option + Control + Shift + q</span>
      {' '}
      to search backwards.
      {' '}
    </CallOut>
    <Content>
      <div>
        <h2>The Good (Using button elemmment as a button)</h2>
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
