import { ComponentProps, forwardRef } from "react";

export type SelectProps = ComponentProps<"select"> & {
  isError?: boolean;
};

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  function Select(props, ref) {
    const { children, className, isError, ...rest } = props;

    return (
      <div className="relative h-14">
        <select
          className={`${
            isError ? "border-error border-2" : "border-field border"
          } ${
            className ?? ""
          } rounded-8 text-std-16N-7 text-body focus:outline-focused disabled:border-disabled disabled:bg-secondary h-full w-full appearance-none bg-white px-4 py-[14.5px] focus:outline-2`}
          ref={ref}
          {...rest}
        >
          {children}
        </select>
        <svg
          aria-hidden={true}
          className="pointer-events-none absolute right-4 top-1/2"
          height="8"
          viewBox="0 0 12 8"
          width="12"
        >
          <path
            className={`${rest.disabled ? "fill-solid-grey-417" : ""}`}
            d="M6.0001 7.05001L0.350098 1.37501L1.4001 0.325012L6.0001 4.92501L10.6001 0.325012L11.6501 1.37501L6.0001 7.05001Z"
            fill="#1A1A1C"
          />
        </svg>
      </div>
    );
  }
);
