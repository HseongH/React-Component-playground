import { useTypedDispatch, useTypedSelector } from "@/hooks/typedReduxHook";
import { close } from "@/redux/alertSlice";
import { ReactNode, useEffect, useRef } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { GiCancel } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import StyledAlert from "./Alert.style";

interface AlertProps {
  autoHideDuration?: number;
}

/**
 * @return {FunctionComponent}
 */
function Alert({ autoHideDuration }: AlertProps) {
  const dispatch = useTypedDispatch();
  const { open, status, message } = useTypedSelector(
    (state) => state.alertSlice
  );
  const alertRef = useRef<HTMLDivElement | null>(null);

  const icon: { [key: string]: ReactNode } = {
    success: <AiOutlineCheckCircle size={20} />,
    error: <GiCancel size={20} />,
  };

  const onClose = (): void => {
    if (alertRef.current) {
      alertRef.current.style.opacity = "0";
    }

    setTimeout(() => dispatch(close()), 500);
  };

  useEffect(() => {
    if (open) {
      const autoHide = setTimeout(() => onClose(), autoHideDuration || 3000);

      return () => {
        clearTimeout(autoHide);
        onClose();
      };
    }
  }, [open]);

  return (
    <>
      {open ? (
        <StyledAlert status={status} ref={alertRef}>
          {icon[status]}
          <p>{message}</p>
          <button onClick={onClose}>
            <GrClose />
          </button>
        </StyledAlert>
      ) : null}
    </>
  );
}

export default Alert;
