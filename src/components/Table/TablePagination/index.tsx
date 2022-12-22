import { MouseEvent } from "react";
import { useLocation } from "react-router-dom";

import { usePage } from "../hook/useTableContext";
import {
  StyledTablePagination,
  StyledTablePaginationButton,
} from "./TablePagination.style";

export const TablePagination = () => {
  const { pathname } = useLocation();
  const { totalPages, onPageChange } = usePage();
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const onClickPage = (event: MouseEvent<HTMLButtonElement>) => {
    onPageChange(+event.currentTarget.value);
  };

  return (
    <StyledTablePagination>
      <div>
        {pages.map((page) => (
          <StyledTablePaginationButton
            key={`${pathname}-table-${page}`}
            onClick={onClickPage}
            className="contained-ripple"
            selected
          >
            {page}
          </StyledTablePaginationButton>
        ))}
      </div>
    </StyledTablePagination>
  );
};
