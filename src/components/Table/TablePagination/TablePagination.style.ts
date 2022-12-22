import styled from "@emotion/styled";
import { blue, grey } from "@mui/material/colors";

interface StyledTablePaginationButtonProps {
  selected: boolean;
}

export const StyledTablePagination = styled("div")({
  width: "100%",
  display: "flex",
  justifyContent: "flex-end",
  padding: "0.5rem 0.7rem",
  boxSizing: "border-box",
  position: "sticky",
  bottom: 0,
  left: 0,
  backgroundColor: grey[50],
  borderTop: `1px solid ${grey[200]}`,

  div: {
    display: "flex",
  },
});

export const StyledTablePaginationButton = styled("button")`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  ${({ selected }: StyledTablePaginationButtonProps) => ({
    backgroundColor: selected ? blue[100] : "inherit",
    color: selected ? blue[900] : "inherit",
  })};
  display: inline-flex;
  justify-content: center;
  align-items: center;

  ${({ selected }: StyledTablePaginationButtonProps) =>
    selected
      ? null
      : {
          "&:hover": {
            backgroundColor: grey[200],
          },
        }}
`;
