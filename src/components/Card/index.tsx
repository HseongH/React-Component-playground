import { ReactNode } from "react";
import StyledCard from "./Card.style";

interface CardProps {
  outlined?: boolean;
  children: ReactNode;
}

/**
 * @typedef Props
 * @prop {boolean} outlined
 * @prop {ReactNode} children
 */

/**
 * @param {Props} props
 * @return {FunctionComponent}
 */
function Card({ outlined, children }: CardProps) {
  return <StyledCard outlined={outlined || true}>{children}</StyledCard>;
}

export default Card;
