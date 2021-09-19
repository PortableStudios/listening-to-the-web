import React from 'react';

import { Content } from '../content/Content';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const Image = () => (
  <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    <h1 className="mb-6 text-2xl">Image</h1>
    <div className="bg-black text-white p-10">
      A button or a link should never be a div. Check out these two examples below:
    </div>
    <Content>
      <div>
        <h2>{'The Good< (Using <button> as a button)'}</h2>
        <button
          type="button"
          className="p-5 text-center text-white bg-black w-72 rounded-md point"
          onClick={() => null}
        >
          Go to the Next Step
        </button>
      </div>
      <div>
        <h2>{'The Bad (Using <div> as a button)'}</h2>
        <div className="p-5 text-center text-white bg-black cursor-pointer w-72 rounded-md">
          Go to the Next Step
        </div>
      </div>
    </Content>
  </Main>
);

export default Image;
