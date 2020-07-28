import React, { useState, useEffect } from 'react';

import './App.css';
import DataTable from './DataTable';

function App() {
  const [data, setData] = useState([]);
  const [q, setQ] = useState('');
  const [searchColumn, setSearchColumn] = useState(['firstName', 'lastName']);

  useEffect(() => {
    fetch('https://devmentor.live/api/examples/contacts?api_key=b7c58b')
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  function search(rows) {
    const column = rows[0] && Object.keys(rows[0]);
    return rows.filter(
      (row) =>
        searchColumn.some(
          (ele) =>
            row[ele].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
        )
      ///    row.firstName.toLowerCase().indexOf(q.toLowerCase()) > -1 ||
      //    row.lastName.toLowerCase().indexOf(q.toLowerCase()) > -1 ||
      //    row.emailAddress.toLowerCase().indexOf(q.toLowerCase()) > -1
    );
  }

  const column = data[0] && Object.keys(data[0]);
  return (
    <div className='App'>
      <div>
        <able>Search Here : </able>
        <input type='text' value={q} onChange={(e) => setQ(e.target.value)} />
        <br />
        <label>Check Here</label>
        <br />
        {column &&
          column.map((column) => (
            <label>
              <input
                type='checkbox'
                checked={searchColumn.includes(column)}
                onChange={(e) => {
                  const checked = searchColumn.includes(column);
                  setSearchColumn((prev) =>
                    checked
                      ? prev.filter((sc) => sc !== column)
                      : [...prev, column]
                  );
                }}
              />

              {column}
            </label>
          ))}
      </div>
      <div>
        <DataTable data={search(data)} />
      </div>
    </div>
  );
}

export default App;
