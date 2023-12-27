import { ComponentProps } from "react";

export const olStyle = `list-decimal pl-8 [&_&]:list-lower-latin`;

export type OlProps = ComponentProps<"ol">;

export const Ol = (props: OlProps) => {
  const { children, className, ...rest } = props;

  return (
    <ol className={`${olStyle} ${className ?? ""}`} {...rest}>
      {children}
    </ol>
  );
};
