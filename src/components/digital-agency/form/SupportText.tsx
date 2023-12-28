import { ComponentProps } from "react";

export type SupportTextProps = ComponentProps<"p">;

export const SupportText = (props: SupportTextProps) => {
  const { children, className, ...rest } = props;

  return (
    <p
      className={`${className ?? ""} text-caption-lg text-description`}
      {...rest}
    >
      {children}
    </p>
  );
};
