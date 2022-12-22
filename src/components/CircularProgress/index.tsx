import StyledCircularProgress from "./CircularProgress.style";

export interface CircularProgressProps {
  size?: number;
  color?: "primary" | "success" | "error" | "inherit";
}

/**
 * @typedef Props
 * @prop {ReactNode} children
 */

/**
 * @param {Props} props
 * @return {FunctionComponent}
 */
function CircularProgress({ size, color }: CircularProgressProps) {
  return (
    <StyledCircularProgress size={size || 40} color={color || "inherit"}>
      <circle />
    </StyledCircularProgress>
  );
}

export default CircularProgress;
