import styled from "@emotion/styled";
import { MUIStyledCommonProps } from "@mui/system";

export const StyledTableRow = styled("tr")(
  ({ theme }: MUIStyledCommonProps) => ({
    display: "table-row",
    verticalAlign: "middle",
    width: "100%",
    backgroundColor: theme?.palette.background.paper,
    borderRadius: "var(--default-radius)",
  })
);
