import { useColumns, useRows } from "../hook/useTableContext";
import { TableBodyCell } from "../TableBodyCell";
import { TableRow } from "../TableRow";
import { StyledTableBody } from "./TableBody.style";

export const TableBody = () => {
  const columns = useColumns();
  const rows = useRows();

  return (
    <StyledTableBody>
      {rows.map((row) => (
        <TableRow key={`${row.id}-body-row`}>
          {columns.map((column) => (
            <TableBodyCell key={`${row.id}-body-cell-${column.field}`}>
              {column.renderCell
                ? column.renderCell(row[column.field])
                : row[column.field]}
            </TableBodyCell>
          ))}
        </TableRow>
      ))}
    </StyledTableBody>
  );
};
