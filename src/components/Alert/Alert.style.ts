import { css, Theme } from "@emotion/react";
import styled from "@emotion/styled";

interface StyledAlertProps {
  status: "success" | "error";
}

const StyledAlert = styled.div(
  ({ theme, status }: StyledAlertProps & { theme: Theme }) => css`
    width: 500px;
    display: flex;
    align-items: center;
    padding: ${theme.spacing[1]}px ${theme.spacing[3]}px;
    box-sizing: border-box;
    position: fixed;
    top: calc(${theme.spacing[3]}px * 2);
    left: 50%;
    z-index: 1100;
    transform: translateX(-50%);
    background-color: ${theme.color.palette[status].main};
    color: ${theme.color.palette[status].text};
    border-radius: ${theme.radius}px;
    opacity: 1;
    transition: opacity 0.5s ease;

    & > svg {
      margin-top: -3px;
    }

    & > :nth-of-type(n) {
      margin-right: ${theme.spacing[3]}px;
    }

    & > :last-child {
      margin-right: 0;
    }

    & > button {
      position: absolute;
      top: ${theme.spacing[1]}px;
      right: ${theme.spacing[3]}px;

      & > svg > path {
        stroke: ${theme.color.palette[status].text};
      }
    }

    & > p {
      max-width: calc(100% - 2rem - 48px);
    }
  `
);

export default StyledAlert;
