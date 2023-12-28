import { ComponentProps } from "react";

export type LabelProps = ComponentProps<"label"> & {
  isDisabled?: boolean;
};

export const Label = (props: LabelProps) => {
  const { children, className, isDisabled, ...rest } = props;

  return (
    <label
      className={`${isDisabled ? "!text-disabled" : "text-body"} ${
        className ?? ""
      } flex w-fit items-center gap-2 text-label-lg`}
      {...rest}
    >
      {children}
    </label>
  );
};
