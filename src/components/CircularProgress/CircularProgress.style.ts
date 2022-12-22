import { css, Theme } from "@emotion/react";
import styled from "@emotion/styled";

interface StyledCircularProgressProps {
  size: number;
  color: "primary" | "success" | "error" | "inherit";
}

const StyledCircularProgress = styled.svg`
  animation: rotate 1s linear infinite;

  ${({
    size,
    color,
    theme,
  }: StyledCircularProgressProps & { theme: Theme }) => css`
    width: ${size}px;
    height: ${size}px;
    color: ${color === "inherit" ? "inherit" : theme.color.palette[color].main};

    & circle {
      cx: ${size / 2};
      cy: ${size / 2};
      r: ${size / 3};
      stroke-width: ${size / 10};
    }
  `};

  & circle {
    stroke: currentColor;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
    fill: none;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;

export default StyledCircularProgress;
