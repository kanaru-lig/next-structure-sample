import { ComponentProps } from "react";

export type LegendlProps = ComponentProps<"legend"> & {
  isError?: boolean;
  isDisabled?: boolean;
};

export const Legend = (props: LegendlProps) => {
  const { children, className, isError, isDisabled, ...rest } = props;

  return (
    <legend
      className={`${isError ? "text-alert" : ""} ${
        isDisabled ? "text-disabled" : ""
      } ${
        className ?? ""
      } flex w-fit items-center gap-2 text-label-lg text-body`}
      {...rest}
    >
      {children}
    </legend>
  );
};
