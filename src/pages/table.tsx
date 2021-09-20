import React from 'react';

import { Content } from '../content/Content';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

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
      <h1 className="mb-6 text-2xl">Tables - TH headings and captions</h1>
      <div className="bg-black text-white p-10">
        It is very helpful to have caption in tables alsong wih helpful headings. Make sure you rae
        using the correct th element.
        {' '}
        <span className="text-red-300">Cmd + Option + Control + t</span>
        {' '}
        to jump from different
        tables.
        {' '}
        <span className="text-red-300">Cmd + Option + Control + Shift + t</span>
        {' '}
        to go to
        the prev table.
      </div>
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
      <div className="mb-10">
        <h2>The Bad</h2>
        <table className="w-full table-auto text-md">
          <tr>
            <td />
            <td>Monday</td>
            <td>Tuesday</td>
            <td>Wednesday</td>
            <td>Thursday</td>
            <td>Friday</td>
          </tr>
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
        </table>
      </div>
    </Content>
  </Main>
);

export default Table;
