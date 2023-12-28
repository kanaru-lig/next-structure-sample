import { ComponentProps, forwardRef } from "react";

export type TextareaProps = ComponentProps<"textarea"> & {
  isError?: boolean;
};

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  function Textarea(props, ref) {
    const { className, isError, ...rest } = props;

    return (
      <div className="flex flex-col gap-2">
        <textarea
          className={`${
            isError ? "border-2 border-error" : "border border-field"
          } ${
            className ?? ""
          } focus:outline-focused box-border w-full rounded-8 bg-white p-3 text-std-16N-7 text-body focus:outline-2 disabled:border-disabled disabled:bg-secondary`}
          ref={ref}
          {...rest}
        />
      </div>
    );
  },
);

export type TextareaCounterProps = {
  count: number;
  maxCount: number;
  className?: string;
};

export const TextareaCounter = (props: TextareaCounterProps) => {
  const { count, maxCount, className } = props;

  return (
    <p
      aria-live="polite"
      className={`${className ?? ""} text-caption-lg text-description`}
    >
      <span className="sr-only">{`${maxCount}文字中、${count}文字入力済み`}</span>
      <span
        aria-hidden={true}
        className={`${
          count > maxCount ? "text-alert" : "text-description"
        } text-caption-lg`}
      >
        {count}
      </span>
      <span aria-hidden={true} className="px-2">
        /
      </span>
      <span aria-hidden={true}>{maxCount}</span>
    </p>
  );
};
