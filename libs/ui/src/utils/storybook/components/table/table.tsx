/* eslint-disable react/no-array-index-key */
import { ITableProps } from './table.declarations';

import { StyledTable } from './table.styles';

export function Table<T>({ columns, data }: ITableProps<T>) {
  return (
    <StyledTable>
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index} style={{ width: `${column.width}px` }}>{column.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((cell, cellIndex) => (
              <td
                align={cell.align}
                key={cellIndex}
              >
                {cell.render(item)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
}

export default Table;
