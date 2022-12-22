import StyledCardTitle from "./CardTitle.style";

interface CardTitleProps {
  title: string;
}

/**
 * @typedef Props
 * @prop {string} title
 */

/**
 * @param {Props} props
 * @return {FunctionComponent}
 */
function CardTitle({ title }: CardTitleProps) {
  return <StyledCardTitle>{title}</StyledCardTitle>;
}

export default CardTitle;
