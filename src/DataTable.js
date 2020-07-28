import React from 'react';

export default function DataTable({ data }) {
  const column = data[0] && Object.keys(data[0]);
  return (
    <div>
      <table cellPadding={0} cellSpacing={0} border='1'>
        <thead>
          <tr>{data[0] && column.map((ele) => <th>{ele}</th>)}</tr>
        </thead>

        <tbody>
          {data.map((row) => (
            <tr>
              {column.map((ele, i) => (
                <td key={i}>{row[ele]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
