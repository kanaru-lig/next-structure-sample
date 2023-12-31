import { ComponentProps } from "react";

export type ErrorTextProps = ComponentProps<"p">;

export const ErrorText = (props: ErrorTextProps) => {
  const { children, className, ...rest } = props;

  return (
    <p className={`${className ?? ""} text-caption-lg text-error`} {...rest}>
      {children}
    </p>
  );
};
