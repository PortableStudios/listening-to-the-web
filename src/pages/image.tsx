import React from 'react';

import { Content } from '../content/Content';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const Image = () => (
  <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    <h1 className="mb-6 text-2xl">Image</h1>
    <div className="bg-black text-white p-10">
      An image alt tag is a vital part of the Accessibiliy markup. Check out these three images.
    </div>
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
