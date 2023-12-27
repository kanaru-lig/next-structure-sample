import { ComponentProps, forwardRef } from "react";

export type CheckboxProps = ComponentProps<"input"> & {
  isError?: boolean;
};

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  function Checkbox(props, ref) {
    const { children, id, isError, ...rest } = props;

    return (
      <label className={`flex w-fit items-center gap-4 p-1`} htmlFor={id}>
        <input
          className={`peer sr-only`}
          id={id}
          ref={ref}
          type="checkbox"
          {...rest}
        />

        <svg
          aria-hidden={true}
          className={`
          peer-checked:fill-sea-800
          peer-focus:outline-focused
          hidden
          flex-none
          peer-checked:inline-block
          peer-focus:rounded-[4px]
          peer-focus:outline
          peer-focus:outline-2
          peer-focus:-outline-offset-1
        `}
          fill="none"
          height="24"
          viewBox="0 0 24 24"
          width="24"
        >
          <g>
            <rect fill="white" height="17" rx="2" width="17" x="3.5" y="3.5" />
            <path d="M10.6 15.85L17.325 9.125L16.275 8.075L10.6 13.75L7.75 10.9L6.7 11.95L10.6 15.85ZM5.3 20.5C4.8 20.5 4.375 20.325 4.025 19.975C3.675 19.625 3.5 19.2 3.5 18.7V5.3C3.5 4.8 3.675 4.375 4.025 4.025C4.375 3.675 4.8 3.5 5.3 3.5H18.7C19.2 3.5 19.625 3.675 19.975 4.025C20.325 4.375 20.5 4.8 20.5 5.3V18.7C20.5 19.2 20.325 19.625 19.975 19.975C19.625 20.325 19.2 20.5 18.7 20.5H5.3Z" />
          </g>
        </svg>

        <svg
          aria-hidden={true}
          className={`
          flex-none
          ${isError ? "fill-sun-800" : "fill-sumi-900"}
          peer-focus:outline-focused
          peer-disabled:fill-sumi-500
          peer-checked:hidden
          peer-focus:rounded-[4px]
          peer-focus:outline
          peer-focus:outline-2
          peer-focus:-outline-offset-1
        `}
          fill="none"
          height="24"
          viewBox="0 0 24 24"
          width="24"
        >
          <g>
            <rect fill="white" height="17" rx="2" width="17" x="3.5" y="3.5" />
            <path d="M5.3 20.5C4.8 20.5 4.375 20.325 4.025 19.975C3.675 19.625 3.5 19.2 3.5 18.7V5.3C3.5 4.8 3.675 4.375 4.025 4.025C4.375 3.675 4.8 3.5 5.3 3.5H18.7C19.2 3.5 19.625 3.675 19.975 4.025C20.325 4.375 20.5 4.8 20.5 5.3V18.7C20.5 19.2 20.325 19.625 19.975 19.975C19.625 20.325 19.2 20.5 18.7 20.5H5.3ZM5.3 19H18.7C18.7667 19 18.8333 18.9667 18.9 18.9C18.9667 18.8333 19 18.7667 19 18.7V5.3C19 5.23333 18.9667 5.16667 18.9 5.1C18.8333 5.03333 18.7667 5 18.7 5H5.3C5.23333 5 5.16667 5.03333 5.1 5.1C5.03333 5.16667 5 5.23333 5 5.3V18.7C5 18.7667 5.03333 18.8333 5.1 18.9C5.16667 18.9667 5.23333 19 5.3 19Z" />
          </g>
        </svg>

        <span
          className={`
          text-std-16N-7
          ${isError ? "text-alert" : "text-body"}
          peer-disabled:text-disabled
        `}
        >
          {children}
        </span>
      </label>
    );
  }
);
