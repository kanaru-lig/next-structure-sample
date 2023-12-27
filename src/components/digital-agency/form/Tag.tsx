import { ComponentProps } from "react";

export type TagProps = ComponentProps<"span"> & {
  isRequired?: boolean;
};

export const Tag = (props: TagProps) => {
  const { children, className, isRequired, ...rest } = props;

  return (
    <span
      className={`
      text-caption-lg
      ${isRequired ? "text-red-800" : "text-description"}
      ${className ?? ""}
    `}
      {...rest}
    >
      {children}
    </span>
  );
};
