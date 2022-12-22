import { ReactNode, createContext, FunctionComponent } from "react";
import { StyledTableContainer, StyledTable } from "./Table.style";

import { TableHead } from "./TableHead";
import { TableBody } from "./TableBody";
import { TablePagination } from "./TablePagination";

export interface ColumnInterface {
  field: string;
  headerName: string;
  renderCell?: (value: any) => ReactNode;
}

export interface RowInterface {
  [key: string]: any;
}

export interface TableProps {
  columns: ColumnInterface[];
  rows: RowInterface[];
  totalPages: number;
  onPageChange: () => void;
}

export interface StyledTableProps {
  width?: string;
  height?: string;
}

export const TableContext = createContext<TableProps | null>(null);

export const Table: FunctionComponent<TableProps & StyledTableProps> = ({
  columns,
  rows,
  totalPages,
  onPageChange,
  width,
  height,
}) => {
  return (
    <TableContext.Provider value={{ columns, rows, totalPages, onPageChange }}>
      <StyledTableContainer width={width} height={height}>
        <StyledTable>
          <TableHead />

          <TableBody />
        </StyledTable>

        <TablePagination />
      </StyledTableContainer>
    </TableContext.Provider>
  );
};

Table.defaultProps = {
  width: "100%",
  height: "100vh",
};
