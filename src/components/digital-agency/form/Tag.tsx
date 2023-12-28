import { ComponentProps } from "react";

export type TagProps = ComponentProps<"span"> & {
  isRequired?: boolean;
};

export const Tag = (props: TagProps) => {
  const { children, className, isRequired, ...rest } = props;

  return (
    <span
      className={`${isRequired ? "text-red-800" : "text-description"} ${
        className ?? ""
      } text-caption-lg`}
      {...rest}
    >
      {children}
    </span>
  );
};
