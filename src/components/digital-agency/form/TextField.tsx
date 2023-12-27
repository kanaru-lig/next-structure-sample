import { ComponentProps, forwardRef } from "react";

export type TextFieldProps = ComponentProps<"input"> & {
  isError?: boolean;
};

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
  const { className, isError, ...rest } = props;

  return (
    <input
      className={`
        rounded-8 text-std-16N-7 text-body focus:outline-focused disabled:border-disabled disabled:bg-secondary h-14 w-full
        bg-white px-4 py-[14.5px] focus:border-2
        ${isError ? "border-error border-2" : "border-field border"}
        ${className ?? ""}
      `}
      ref={ref}
      {...rest}
    />
  );
});
