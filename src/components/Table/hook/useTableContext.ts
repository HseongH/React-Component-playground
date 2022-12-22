import { useContext } from "react";
import { TableContext, TableProps, ColumnInterface, RowInterface } from "..";

const useTableContext: () => TableProps = () => {
  const context = useContext(TableContext);
  if (!context) {
    throw new Error(
      "Table compound components cannot be rendered outside the Table component"
    );
  }

  return context;
};

export const useColumns: () => ColumnInterface[] = () => {
  const columns = useTableContext().columns;

  return columns;
};

export const useRows: () => RowInterface[] = () => {
  const rows = useTableContext().rows;

  return rows;
};

export const usePage: () => {
  totalPages: number;
  onPageChange: (page: number) => void;
} = () => {
  const context = useTableContext();
  const { totalPages, onPageChange } = context;

  return { totalPages, onPageChange };
};
