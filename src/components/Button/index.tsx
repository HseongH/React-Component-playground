import { createRipple } from "@/styles/ripple";
import { ReactNode, useRef, MouseEvent } from "react";
import CircularProgress from "../CircularProgress";
import StyledButton from "./Button.style";

interface ButtonProps {
  type?: "button" | "reset" | "submit";
  variant?: "filled" | "outlined" | "icon";
  color?: "primary" | "success" | "error";
  isLoading?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  onClick?: () => void;
  children: ReactNode;
}

/**
 * @typedef Props
 * @prop {"filled" | "outlined" | "icon"} variant
 * @prop {"primary" | "success" | "error"} color
 * @prop {boolean} isLoading
 * @prop {ReactNode} startIcon
 * @prop {ReactNode} endIcon
 * @prop {ReactNode} children
 */

/**
 * @param {Props} props
 * @return {FunctionComponent}
 */
function Button({
  type,
  variant,
  color,
  isLoading,
  startIcon,
  endIcon,
  onClick,
  children,
}: ButtonProps) {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const handleClick = (event: MouseEvent) => {
    createRipple(buttonRef, event);
    onClick && onClick();
  };

  return (
    <StyledButton
      variant={variant || "filled"}
      color={color || "primary"}
      startIcon={startIcon}
      endIcon={endIcon}
      isLoading={isLoading}
      type={type || "button"}
      disabled={isLoading}
      ref={buttonRef}
      onClick={handleClick}
    >
      {startIcon !== null && !isLoading ? startIcon : null}
      {isLoading ? <CircularProgress size={16} /> : null}
      {children}
      {endIcon !== null && !isLoading ? endIcon : null}
    </StyledButton>
  );
}

export default Button;
