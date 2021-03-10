import React from 'react';
import { OrderArrow } from './Icons';

const DataTable = ({ rows, columns, order, handleOrderClick }) => (
  <table className="divide-y divide-gray-300">
    <thead>
      <tr>
        {columns.map(({ field, text, sortable, className }) => {
          return (
            <th key={`th-${field}`} className={className}>
              {sortable ? (
                <div className="inline-flex items-center">
                  <span
                    className="cursor-pointer select-none"
                    onClick={() => handleOrderClick(field)}
                  >
                    {text}
                  </span>
                  {order.value === field && (
                    <OrderArrow
                      order={order.direction}
                      className="w-3 h-3 ml-1 stroke-current text-gray-800"
                    />
                  )}
                </div>
              ) : (
                text
              )}
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
