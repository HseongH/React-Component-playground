import { css, Theme } from "@emotion/react";
import styled from "@emotion/styled";
import { ReactNode } from "react";

interface StyledButtonProps {
  variant: "filled" | "outlined" | "icon";
  color: "primary" | "success" | "error";
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  isLoading?: boolean;
}

const setBtnStyleWithProps = (
  variant: StyledButtonProps["variant"],
  color: StyledButtonProps["color"],
  theme: Theme
) => {
  const selectedColor = theme.color.palette[color];

  switch (variant) {
    case "filled":
      return {
        color: selectedColor.text,
        backgroundColor: selectedColor.main,

        "&:hover": {
          backgroundColor: selectedColor.dark,
        },
      };

    case "outlined":
      return {
        color: selectedColor.main,
        border: `1px solid ${selectedColor.main}`,
      };

    default:
      return {
        color: selectedColor.main,
        borderRadius: "50%",
        width: "36px",
        height: "36px",
      };
  }
};

const StyledButton = styled.button(
  ({
    variant,
    color,
    startIcon,
    endIcon,
    isLoading,
    theme,
  }: StyledButtonProps & { theme: Theme }) => css`
    font-size: 1rem;
    padding: ${variant === "icon" ? 0 : "10px 1rem"};
    box-sizing: border-box;
    cursor: pointer;
    border-radius: ${`${theme.radius}px`};
    font-weight: 700;

    &:hover {
      background-color: ${theme.action.hover};
    }

    &:disabled {
      background-color: ${theme.action.hover};
      cursor: auto;

      &:hover {
        background-color: ${theme.action.hover};
      }
    }

    ${setBtnStyleWithProps(variant, color, theme)};

    & :first-of-type {
      margin-right: ${startIcon || isLoading ? "0.5rem" : null};
      margin-left: ${endIcon ? "0.5rem" : null};
    }
  `
);

export default StyledButton;
