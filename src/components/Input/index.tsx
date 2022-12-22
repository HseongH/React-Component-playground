import { ChangeEvent, useState } from "react";
import StyledInput from "./Input.style";

interface InputProps {
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
}

/**
 * @typedef Props
 * @prop {string} placeholder
 * @prop {string} url
 */

/**
 * @param {Props} props
 * @return {FunctionComponent}
 */
function Input({ value, placeholder, onChange }: InputProps) {
  const [text, setText] = useState(value || "");
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
    onChange && onChange(event.target.value);
  };

  return (
    <StyledInput
      placeholder={placeholder}
      value={text}
      onChange={handleChange}
    />
  );
}

export default Input;
