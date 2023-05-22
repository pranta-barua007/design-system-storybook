import { ButtonHTMLAttributes, forwardRef } from "react";

export type TailwindButtonProps = {
  /** If button is in disabled state */
  disabled?: boolean;
  /** Loading state */
  loading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const ButtonTailwind = forwardRef<HTMLButtonElement, TailwindButtonProps>(
  ({ disabled, loading, ...rest }, ref) => {
    return (
      <button
        className="newline-bg-primary-500 hover:newline-bg-primary-700
        active:newline-bg-primary-800 newline-text-neutral-white
          newline-py-8 newline-px-[20px]
          newline-rounded-large"
        {...rest}
        ref={ref}
        disabled={disabled || loading}
      />
    );
  }
);

ButtonTailwind.displayName = "ButtonTailwind";

export default ButtonTailwind;
