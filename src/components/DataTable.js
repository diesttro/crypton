import React from 'react';

const DataTable = ({ rows, columns }) => (
  <table className="divide-y divide-gray-400">
    <thead>
      <tr>
        {columns.map(({ field, text, headerClassName }) => {
          return (
            <th key={`th-${field}`} className={headerClassName}>
              {text}
            </th>
          );
        })}
      </tr>
    </thead>
    <tbody className="divide-y divide-gray-400">
      {rows.map((row, index) => (
        <tr key={`tr-${index + 1}`}>
          {columns.map(({ field, className, render, onClick }) => (
            <td key={`td-${field}`} className={className} onClick={onClick}>
              {render({ index, ...row })}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

export default DataTable;
