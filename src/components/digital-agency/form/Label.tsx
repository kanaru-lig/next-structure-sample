import { ComponentProps } from "react";

export type LabelProps = ComponentProps<"label"> & {
  isDisabled?: boolean;
};

export const Label = (props: LabelProps) => {
  const { children, className, isDisabled, ...rest } = props;

  return (
    <label
      className={`
        text-label-lg flex w-fit items-center
        gap-2
        ${isDisabled ? "!text-disabled" : "text-body"}
        ${className ?? ""}
      `}
      {...rest}
    >
      {children}
    </label>
  );
};
