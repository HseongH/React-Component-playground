import styled from "@emotion/styled";
import { grey } from "@mui/material/colors";

export const StyledTableHead = styled("thead")({
  width: "100%",
  verticalAlign: "middle",
  display: "table-header-group",
  position: "sticky",
  top: 0,
  left: 0,
  zIndex: 1100,
  borderTopLeftRadius: "var(--default-radius)",
  borderTopRightRadius: "var(--default-radius)",
  backgroundColor: grey[50],
});
