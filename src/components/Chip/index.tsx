import { ReactNode } from "react";
import StyledChip from "./Chip.style";

import { AiOutlineCheck, AiOutlineCheckCircle } from "react-icons/ai";
import { GiCancel } from "react-icons/gi";

interface ChipProps {
  withIcon?: boolean;
  status?: "primary" | "success" | "error";
  children: ReactNode;
}

/**
 * @typedef Props
 * @prop {"primary" | "success" | "error"} status
 * @prop {ReactNode} children
 */

/**
 * @param {Props} props
 * @return {FunctionComponent}
 */
function Chip({ withIcon, status, children }: ChipProps) {
  const defaultStatus = status || "primary";
  const icon: { [key: string]: ReactNode } = {
    primary: <AiOutlineCheck size={20} />,
    success: <AiOutlineCheckCircle size={20} />,
    error: <GiCancel size={20} />,
  };

  return (
    <StyledChip status={defaultStatus}>
      {withIcon ? icon[defaultStatus] : null}
      {children}
    </StyledChip>
  );
}

export default Chip;
