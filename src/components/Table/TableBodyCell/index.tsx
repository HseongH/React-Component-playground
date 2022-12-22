import { FunctionComponent, ReactNode } from "react";
import { StyledTableBodyCell } from "./TableBodyCell.style";

interface TableBodyCellProps {
  children: ReactNode;
}

export const TableBodyCell: FunctionComponent<TableBodyCellProps> = ({
  children,
}) => {
  return <StyledTableBodyCell>{children}</StyledTableBodyCell>;
};
