import { ComponentPropsWithoutRef, forwardRef } from "react";

interface InputProps extends ComponentPropsWithoutRef<"input"> {
  id: string;
  label: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ id, label, ...props }, ref) => {
    return (
      <>
        <label htmlFor={id}>{label}</label>
        <input id={id} ref={ref} {...props} />
      </>
    );
  }
);

export default Input;
