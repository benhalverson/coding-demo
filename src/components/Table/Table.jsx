/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DateTime } from 'luxon';

import './Table.scss';
export default function Table() {
  const [pmData, setPmData] = useState([]);
  const URL =
    'https://public.opendatasoft.com/api/records/1.0/search/?dataset=us-air-quality-measurements&q=&rows=10&start=1&sort=-measurements_parameter&facet=city&facet=location&facet=measurements_unit&facet=measurements_parameter&facet=measurements_lastupdated';

  const getData = async () => {
    const { data } = await axios.get(URL);
    const newArray = [];
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
      newArray.push(data);
      return newArray;
    });
    setPmData(newArray);
  };
  useEffect(() => {
    getData().catch(e => console.log('Error', e));
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>location</th>
          <th>pm2.5</th>
          <th>last updated</th>
        </tr>
      </thead>
      <tbody>
        {pmData.map((p, i) => (
          <tr>
            <td>{p.location}</td>
            <td>{p.pm25}</td>
            <td>
              {DateTime.fromISO(p.lastUpdated)
                .setLocale('en')
                .toFormat('f')}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
