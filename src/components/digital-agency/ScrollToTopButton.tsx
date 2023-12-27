import { ComponentProps } from "react";

export const scrollToTopButtonStyle = `
  flex
  h-14
  w-14
  items-center
  justify-center
  rounded-full
  border
  cursor-pointer
  bg-white
  border-blue-900
  hover:border-blue-1000
  hover:bg-blue-200
  focus:outline-2
  focus:outline-focused
  focus:outline-offset-4
  active:border-blue-1200
  active:bg-blue-300
`;

export type ScrollToTopButtonProps = ComponentProps<"a">;

export const ScrollToTopButton = (props: ScrollToTopButtonProps) => {
  const { className, ...rest } = props;

  return (
    <a
      aria-label={rest["aria-label"] ?? "ページ上部に戻る"}
      className={`
        group
        ${scrollToTopButtonStyle}
        ${className ?? ""}
      `}
      {...rest}
    >
      <svg aria-hidden={true} className="group-hover:fill-blue-1000 group-active:fill-blue-1200 fill-blue-900" fill="none" height="16" viewBox="0 0 15 16" width="15">
        <path d="M6.75 15.5L6.75 3.37303L1.05383 9.06918L0 7.99998L7.49997 0.5L15 7.99998L13.9461 9.06918L8.24995 3.37303L8.24995 15.5H6.75Z" />
      </svg>
    </a>
  );
};
