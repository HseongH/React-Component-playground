import styled from "@emotion/styled";
import { blue, grey } from "@mui/material/colors";

export const StyledTableBody = styled("tbody")({
  display: "table-row-group",
  verticalAlign: "middle",

  "& tr:hover": {
    backgroundColor: grey[50],
  },

  "& tr:focus": {
    backgroundColor: blue[50],
  },
});
