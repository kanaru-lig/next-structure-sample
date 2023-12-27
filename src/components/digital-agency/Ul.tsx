import { ComponentProps } from "react";

export const ulStyle = `list-disc pl-8 [&_&]:list-circle [&_&_&]:list-square`;

export type UlProps = ComponentProps<"ul">;

export const Ul = (props: UlProps) => {
  const { children, className, ...rest } = props;

  return (
    <ul className={`${ulStyle} ${className ?? ""}`} {...rest}>
      {children}
    </ul>
  );
};
