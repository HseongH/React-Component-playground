import { css, Theme } from "@emotion/react";
import styled from "@emotion/styled";
import { StackProps } from ".";

const getSpacingValue = (
  theme: Theme,
  direction: StackProps["direction"],
  spacing: StackProps["spacing"]
) => {
  switch (direction) {
    case "row-reverse":
      return `0px ${spacing ? `${theme.spacing[spacing]}px` : "0px"} 0px 0px`;

    case "column":
      return `${spacing ? `${theme.spacing[spacing]}px` : "0px"} 0px 0px`;

    case "column-reverse":
      return `0px 0px ${spacing ? `${theme.spacing[spacing]}px` : "0px"}`;

    default:
      return `0px 0px 0px ${spacing ? `${theme.spacing[spacing]}px` : "0px"}`;
  }
};

const StyledStack = styled.div(
  ({
    theme,
    direction,
    alignItems,
    justifyContent,
    spacing,
  }: StackProps & { theme: Theme }) => css`
    display: flex;
    flex-direction: ${direction || "row"};
    align-items: ${alignItems || "flex-start"};
    justify-content: ${justifyContent || "flex-start"};

    & > :nth-of-type(n) {
      margin: ${getSpacingValue(theme, direction, spacing)};
    }

    & > :first-child {
      margin: 0;
    }
  `
);

export default StyledStack;
