import { css } from "@emotion/react";
import styled from "@emotion/styled";

const StyledInput = styled.input(
  ({ theme }) => css`
    width: 300px;
    height: 36px;
    border: 1px solid ${theme.color.border};
    border-radius: ${theme.radius}px;
    padding: 0 ${theme.spacing[1]}px;
    box-sizing: border-box;
  `
);

export default StyledInput;
