import { ComponentProps, forwardRef } from "react";

export type TextFieldProps = ComponentProps<"input"> & {
  isError?: boolean;
};

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  function TextField(props, ref) {
    const { className, isError, ...rest } = props;

    return (
      <input
        className={`${
          isError ? "border-2 border-error" : "border border-field"
        } ${
          className ?? ""
        } focus:outline-focused h-14 w-full rounded-8 bg-white px-4 py-[14.5px] text-std-16N-7 text-body focus:border-2 disabled:border-disabled disabled:bg-secondary`}
        ref={ref}
        {...rest}
      />
    );
  },
);
