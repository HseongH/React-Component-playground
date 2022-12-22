import { useColumns } from "../hook/useTableContext";
import { TableHeadCell } from "../TableHeadCell";
import { TableRow } from "../TableRow";
import { StyledTableHead } from "./TableHead.style";

export const TableHead = () => {
  const columns = useColumns();

  return (
    <StyledTableHead>
      <TableRow>
        {columns.map((column) => (
          <TableHeadCell key={`${column.field}-head-cell`}>
            {column.headerName}
          </TableHeadCell>
        ))}
      </TableRow>
    </StyledTableHead>
  );
};
