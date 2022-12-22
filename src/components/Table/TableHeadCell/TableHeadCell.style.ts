import styled from "@emotion/styled";
import { grey } from "@mui/material/colors";

export const StyledTableHeadCell = styled("th")({
  padding: "0.8rem 1rem",
  boxSizing: "border-box",
  borderBottom: `1px solid ${grey[200]}`,
  display: "table-cell",
  minWidth: "70px",
  maxWidth: "500px",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  verticalAlign: "inherit",
  textAlign: "left",
  fontSize: "14px",
  fontWeight: 500,
});
