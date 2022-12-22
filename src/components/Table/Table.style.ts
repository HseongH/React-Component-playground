import styled from "@emotion/styled";
import { grey } from "@mui/material/colors";

import { StyledTableProps } from ".";

export const StyledTableContainer = styled("div")(
  ({ width, height }: StyledTableProps) => ({
    width,
    height,
    overflow: "auto",
    backgroundColor: grey[100],
    border: `1px solid ${grey[200]}`,
    borderRadius: "var(--default-radius)",
    boxSizing: "border-box",
  })
);

export const StyledTable = styled("table")({
  position: "relative",
  display: "table",
  width: "100%",
  borderCollapse: "separate",
  borderSpacing: 0,
  minWidth: "650px",
});
