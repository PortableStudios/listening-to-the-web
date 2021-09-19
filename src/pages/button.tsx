import React from 'react';

import { Content } from '../content/Content';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const Image = () => (
  <Main meta={<Meta title="Buttons" description="Play around with some button examples" />}>
    <h1 className="mb-6 text-2xl">Buttons</h1>
    <div className="bg-black text-white p-10">
      A button or a link should never be a div. On VoiceOver you can search for buttons by pressing
      Cmd + Option + Control + j. The div button cannot be detecetd.
    </div>
    <Content>
      <div>
        <h2>{'The Good< (Using button elemmment as a button)'}</h2>
        <button
          type="button"
          className="p-5 text-center text-white bg-black w-72 rounded-md point"
          onClick={() => null}
        >
          Go to the Next Step
        </button>
      </div>
      <div>
        <h2>The Bad (Using div as a button)</h2>
        <div className="p-5 text-center text-white bg-black cursor-pointer w-72 rounded-md">
          Go to the Next Step
        </div>
      </div>
    </Content>
  </Main>
);

export default Image;
