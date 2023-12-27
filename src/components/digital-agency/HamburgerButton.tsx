import { ComponentProps } from "react";

type HamburgerButtonProps = ComponentProps<"button"> & {
  label: string;
  isOpen: boolean;
  align: "row" | "col";
};

export const HamburgerButton = (props: HamburgerButtonProps) => {
  const { label, isOpen, align, className, ...rest } = props;

  return (
    <button
      aria-label={rest["aria-label"] ?? isOpen ? "メニューを閉じる" : "メニューを開く"}
      className={`
        focus:outline-focused flex w-fit items-center rounded-[4px] focus:outline focus:outline-2 focus:outline-offset-2
        ${align === "row" ? "flex-row gap-1" : "flex-col gap-[1px]"}
        ${className ?? ""}
      `}
      {...rest}
    >
      {isOpen ? (
        <svg aria-hidden={true} fill="none" height="24" viewBox="0 0 24 24" width="24">
          <path d="M6.39961 18.6496L5.34961 17.5996L10.9496 11.9996L5.34961 6.39961L6.39961 5.34961L11.9996 10.9496L17.5996 5.34961L18.6496 6.39961L13.0496 11.9996L18.6496 17.5996L17.5996 18.6496L11.9996 13.0496L6.39961 18.6496Z" fill="#1A1A1C" />
        </svg>
      ) : (
        <svg aria-hidden={true} height="24" viewBox="0 0 24 24" width="24">
          <path clipRule="evenodd" d="M21 5.5H3V7H21V5.5ZM21 11.2998H3V12.7998H21V11.2998ZM3 17H21V18.5H3V17Z" fill="#1A1A1C" fillRule="evenodd" />
        </svg>
      )}
      <span className={align === "row" ? "text-label-md" : "text-caption-md"}>{label}</span>
    </button>
  );
};
