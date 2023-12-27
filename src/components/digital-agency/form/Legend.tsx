import { ComponentProps } from "react";

export type LegendlProps = ComponentProps<"legend"> & {
  isError?: boolean;
  isDisabled?: boolean;
};

export const Legend = (props: LegendlProps) => {
  const { children, className, isError, isDisabled, ...rest } = props;

  return (
    <legend
      className={`
        text-label-lg text-body flex w-fit
        items-center
        gap-2
        ${isError ? "text-alert" : ""}
        ${isDisabled ? "text-disabled" : ""}
        ${className ?? ""}
      `}
      {...rest}
    >
      {children}
    </legend>
  );
};
