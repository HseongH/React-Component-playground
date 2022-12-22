import { FunctionComponent, ReactNode } from "react";
import { StyledTableRow } from "./TableRow.style";

interface TableRowProps {
  children: ReactNode;
}

export const TableRow: FunctionComponent<TableRowProps> = ({ children }) => {
  return <StyledTableRow>{children}</StyledTableRow>;
};
