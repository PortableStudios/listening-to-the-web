import React from 'react';

import { Content } from '../content/Content';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const Table = () => (
  <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    <Content>
      <h1 className="mb-6 text-2xl">Tables</h1>
      <div className="p-10 text-white bg-black">
        go through each cell on the table and compare the 'Good' and the 'Bad' versions
      </div>
      <div className="mb-10">
        <h2>The Good</h2>
        <table className="table-fixed w-100">
          <caption>Delivery slots:</caption>
          <tr>
            <td />
            <th scope="col">Monday</th>
            <th scope="col">Tuesday</th>
            <th scope="col">Wednesday</th>
            <th scope="col">Thursday</th>
            <th scope="col">Friday</th>
          </tr>
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
        </table>
      </div>
      <div className="mb-10">
        <h2>The Bad</h2>
        <table>
          <caption>Delivery slots:</caption>
          <tr>
            <td />
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
          </tr>
          <tr>
            <th>09:00 - 11:00</th>
            <td>Closed</td>
            <td>Open</td>
            <td>Open</td>
            <td>Closed</td>
            <td>Closed</td>
          </tr>
          <tr>
            <th>11:00 - 13:00</th>
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
