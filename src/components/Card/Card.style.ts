import { css, Theme } from "@emotion/react";
import styled from "@emotion/styled";

interface StyledCardProps {
  outlined: boolean;
}

const StyledCard = styled.div(
  ({ theme, outlined }: StyledCardProps & { theme: Theme }) => css`
    background-color: ${theme.color.background.light};
    border-radius: ${theme.radius}px;
    border: ${outlined ? `1px solid ${theme.color.border}` : null};
  `
);

export default StyledCard;
