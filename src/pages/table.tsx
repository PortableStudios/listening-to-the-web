import React from 'react';

import { Content } from '../content/Content';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import CallOut from './Callout';
import Divider from './Divider';
import MainHeading from './MainHeading';

const Table = () => (
  <Main
    meta={(
      <Meta
        title="Tables - TH headings and captions"
        description="No Headings with Tables with no caption"
      />
    )}
  >
    <Content>
      <MainHeading>Tables - TH headings and captions</MainHeading>
      <CallOut>
        It is very helpful to have caption in tables along with helpful headings. Make sure you are
        using the correct th element.
        <div className="mt-10">
          On VoiceOver, Navigate by &#39;Table&#39; on the keyboard by pressing
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
          <span className="text-red-300">Cmd + Option + Control + t</span>
          {' '}
          and
          {' '}
          <span className="text-red-300">Cmd + Option + Control + Shift + t</span>
          {' '}
          to search
          backwards.
          {' '}
        </div>
        <div className="mt-10">
          Navigate in the table:
          {' '}
          <span>Once in the table you can navigate through the table with</span>
          {' '}
          <span className="text-red-300">Control + Option + Up or Left or Down or Right</span>
        </div>
      </CallOut>
      <div className="mb-10">
        <h2>The Good</h2>
        <table className="w-full table-auto text-md">
          <caption>Delivery slots in Collingwood:</caption>
          <thead>
            <tr>
              <td />
              <th scope="col">Monday</th>
              <th scope="col">Tuesday</th>
              <th scope="col">Wednesday</th>
              <th scope="col">Thursday</th>
              <th scope="col">Friday</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">09:00 - 11:00</th>
              <td>Closed</td>
              <td>Open</td>
              <td>Open</td>
              <td>Closed</td>
              <td>Closed</td>
            </tr>
            <tr>
              <th scope="row">11:00 - 13:00</th>
              <td>Open</td>
              <td>Open</td>
              <td>Closed</td>
              <td>Closed</td>
              <td>Closed</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Divider />
      <div className="mb-10">
        <h2>The Bad</h2>
        <table className="w-full table-auto text-md">
          <thead>
            <tr>
              <td />
              <th scope="col">Monday</th>
              <th scope="col">Tuesday</th>
              <th scope="col">Wednesday</th>
              <th scope="col">Thursday</th>
              <th scope="col">Friday</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>09:00 - 11:00</td>
              <td>Closed</td>
              <td>Open</td>
              <td>Open</td>
              <td>Closed</td>
              <td>Closed</td>
            </tr>
            <tr>
              <td>11:00 - 13:00</td>
              <td>Open</td>
              <td>Open</td>
              <td>Closed</td>
              <td>Closed</td>
              <td>Closed</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Content>
  </Main>
);

export default Table;
