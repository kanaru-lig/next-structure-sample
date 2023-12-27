import { ComponentProps, forwardRef } from "react";

export type DialogProps = ComponentProps<"dialog">;

export const Dialog = forwardRef<HTMLDialogElement, DialogProps>(
  function Dialog(props, ref) {
    const { children, className, ...rest } = props;

    return (
      <dialog
        className={`fixed left-0 top-0 z-50 m-0 h-full !max-h-full w-full !max-w-full bg-black/70 p-0 backdrop:bg-transparent ${
          className ?? ""
        }`}
        onClick={(e) => {
          e.currentTarget.close();
        }}
        ref={ref}
        {...rest}
      >
        <div
          className={`absolute left-1/2 top-1/2 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 p-6`}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="border-solid-grey-200 flex w-full flex-col items-center gap-4 rounded-[12px] border bg-white p-6">
            {children}
          </div>
        </div>
      </dialog>
    );
  }
);
