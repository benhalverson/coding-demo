import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Table.scss';
// import TableRow from './TableRow';
export default function Table() {
  const [pmData, setPmData] = useState([]);
  const URL =
    'https://public.opendatasoft.com/api/records/1.0/search/?dataset=us-air-quality-measurements&q=&rows=10&start=1&sort=-measurements_parameter&facet=city&facet=location&facet=measurements_unit&facet=measurements_parameter&facet=measurements_lastupdated';

  const getData = async () => {
    const { data } = await axios.get(URL);
    data.records.map(record => {
      const fields = record?.fields;
      const city = fields?.city;
      const country = fields?.country;
      const measurementValue = fields?.measurements_value;
      const measurementLastUpdate = fields?.measurements_lastupdated;
      let data = {};
      data.location = `${city}, ${country}`;
      data.pm25 = measurementValue;
      data.lastUpdated = measurementLastUpdate;
      setPmData(data);
      return data;
    });
    console.log('pmData', pmData);
    setPmData(data);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <table>
      <th>
        <td>location</td>
        <td>pm2.5</td>
        <td>last updated</td>
      </th>

      <tr>
        {pmData.map(p => {
          console.log('p', p);
        })}

        <>
          <td>p.location</td>
          <td>p.pm25</td>
          <td>p.lastupdated</td>
        </>
      </tr>
    </table>
  );
}
