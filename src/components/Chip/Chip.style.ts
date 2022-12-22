import { css, Theme } from "@emotion/react";
import styled from "@emotion/styled";

interface StyledChipProps {
  status: "primary" | "success" | "error";
}

const StyledChip = styled.span(
  ({ status, theme }: StyledChipProps & { theme: Theme }) => css`
    display: inline-flex;
    align-items: center;
    padding: 0.5rem 0.8rem;
    font-weight: 700;
    color: ${status === "primary" ? "inherit" : theme.typography[status]};

    & svg {
      margin-right: 0.5rem;
      margin-top: -3px;
    }
  `
);

export default StyledChip;
