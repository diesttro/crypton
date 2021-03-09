import React from 'react';

const DataTable = ({ rows, columns }) => (
  <table className="divide-y divide-gray-300">
    <thead>
      <tr>
        {columns.map(({ text, headerClassName }, index) => {
          return (
            <th key={`th-${index + 1}`} className={headerClassName}>
              {text}
            </th>
          );
        })}
      </tr>
    </thead>
    <tbody className="divide-y divide-gray-300">
      {rows.map((row, index) => (
        <tr key={`tr-${index + 1}`}>
          {columns.map(({ field, className, render, onClick }) => (
            <td
              key={`td-${field}-${index + 1}`}
              className={className}
              onClick={onClick}
            >
              {render({ index, ...row })}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

export default DataTable;
