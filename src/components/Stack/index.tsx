import { ReactNode } from "react";
import StyledStack from "./Stack.style";

export interface StackProps {
  direction?: "row" | "row-reverse" | "column" | "column-reverse";
  alignItems?: "flex-start" | "flex-end" | "center" | "stretch" | "baseline";
  justifyContent?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly";
  spacing?: 0 | 1 | 2 | 3;
}

/**
 * @typedef Props
 * @prop {"row" | "row-reverse" | "column" | "column-reverse"} direction
 * @prop {"flex-start" | "flex-end" | "center" | "stretch" | "baseline"} alignItems
 * @prop {"flex-start" | "center" | "flex-end" | "space-between" | "space-around" | "space-evenly"} justifyContent
 * @prop {0 | 1 | 2} spacing
 * @prop {ReactNode} children
 */

/**
 * @param {Props} props
 * @return {FunctionComponent}
 */
function Stack({
  direction,
  alignItems,
  justifyContent,
  spacing,
  children,
}: StackProps & { children: ReactNode }) {
  return (
    <StyledStack
      direction={direction}
      alignItems={alignItems}
      justifyContent={justifyContent}
      spacing={spacing}
    >
      {children}
    </StyledStack>
  );
}

export default Stack;
