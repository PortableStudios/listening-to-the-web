import React from 'react';

import { Content } from '../content/Content';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import MainHeading from './MainHeading';

const Resource = () => (
  <Main meta={<Meta title="Resources" description="Play around with some button examples" />}>
    <MainHeading>Resources</MainHeading>
    <Content>
      <div>
        <h2>From the presentation</h2>
        <ul>
          <li>
            <a
              href="https://www.notion.so/portable/Screen-reader-testing-39eda1ca985b4722b1170af45bb6261c"
              target="_blank"
              rel="noreferrer"
            >
              Portable - Screen reader testing - Notion Doc
            </a>
          </li>
          <li>
            <a
              href="https://docs.google.com/presentation/d/134qKrfvi_-FAapa3Y9joH9ivJPqoJdl5ZSm4NKsPCTs/edit#slide=id.gf04db885bc_2_118"
              target="_blank"
              rel="noreferrer"
            >
              Google Slide Deck - Presentation - Listening to the web - Intorducing screen reader
              testing at Portable
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h2>Developer Resources</h2>
        <ul>
          <li>
            <a href="https://chakra-ui.com/" target="_blank" rel="noreferrer">
              Chakra UI. Used in Portable UI Kit
            </a>
          </li>
          <li>
            <a href="https://www.deque.com/axe/" target="_blank" rel="noreferrer">
              axe - Digital accessibility toolkit
            </a>
          </li>
          <li>
            <a href="https://www.w3.org/TR/using-aria/#intro" target="_blank" rel="noreferrer">
              Introduction to how to use ARIA
            </a>
          </li>
        </ul>
      </div>
    </Content>
  </Main>
);

export default Resource;
