import { css } from "@emotion/react";
import styled from "@emotion/styled";

const StyledCardTitle = styled.h3(
  ({ theme }) => css`
    width: 100%;
    background-color: #f6f6f6;
    padding: ${theme.spacing[0]}px ${theme.spacing[3]}px;
    box-sizing: border-box;
  `
);

export default StyledCardTitle;
