import { FunctionComponent, ReactNode } from "react";
import { StyledTableHeadCell } from "./TableHeadCell.style";

interface TableHeadCellProps {
  children: ReactNode;
}

export const TableHeadCell: FunctionComponent<TableHeadCellProps> = ({
  children,
}) => {
  return <StyledTableHeadCell>{children}</StyledTableHeadCell>;
};
