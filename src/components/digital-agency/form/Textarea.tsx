import { ComponentProps, forwardRef } from "react";

export type TextareaProps = ComponentProps<"textarea"> & {
  isError?: boolean;
};

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>((props, ref) => {
  const { className, isError, ...rest } = props;

  return (
    <div className="flex flex-col gap-2">
      <textarea
        className={`
          rounded-8 text-std-16N-7 text-body focus:outline-focused disabled:border-disabled disabled:bg-secondary box-border
          w-full
          bg-white
          p-3
          focus:outline-2
          ${isError ? "border-error border-2" : "border-field border"}
          ${className ?? ""}
        `}
        ref={ref}
        {...rest}
      />
    </div>
  );
});

export type TextareaCounterProps = {
  count: number;
  maxCount: number;
  className?: string;
};

export const TextareaCounter = (props: TextareaCounterProps) => {
  const { count, maxCount, className } = props;

  return (
    <p aria-live="polite" className={`text-caption-lg text-description ${className}`}>
      <span className="sr-only">{`${maxCount}文字中、${count}文字入力済み`}</span>
      <span aria-hidden={true} className={`text-caption-lg ${count > maxCount ? "text-alert" : "text-description"}`}>
        {count}
      </span>
      <span aria-hidden={true} className="px-2">
        /
      </span>
      <span aria-hidden={true}>{maxCount}</span>
    </p>
  );
};
