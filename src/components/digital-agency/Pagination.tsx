import { ReactNode } from "react";

export const paginationItemStyle =
  "flex h-12 w-12 items-center justify-center rounded-full text-blue-1000 text-oln-16N-1 border border-solid-grey-200 hover:border-blue-900 hover:bg-blue-50 active:border-blue-900 active:bg-blue-50 focus:outline-2 focus:outline-focused";

type PaginationMode = "default" | "simple";

export type PaginationProps = {
  onItemClicked: (page: number) => void;
  mode: PaginationMode;
  currentPage: number;
  lastPage: number;
};

export const Pagination = (props: PaginationProps) => {
  const getLeftSideItems = (mode: PaginationMode, current: number) => {
    if (mode === "simple" || current < 2) {
      return [];
    }

    const items: ReactNode[] = [];
    for (let i = current - 1; i > 0; i--) {
      items.unshift(
        <button
          aria-label={`${i}ページ目に移動する`}
          className={paginationItemStyle}
          key={i}
          onClick={() => props.onItemClicked(i)}
        >
          {i}
        </button>,
      );
      if (items.length >= 3) {
        break;
      }
    }
    return items;
  };

  const getRightSideItems = (
    mode: PaginationMode,
    current: number,
    last: number,
  ) => {
    if (mode === "simple" || current >= last) {
      return [];
    }

    const items: ReactNode[] = [];
    for (let i = current + 1; i <= last; i++) {
      items.push(
        <button
          aria-label={`${i}ページ目に移動する`}
          className={paginationItemStyle}
          key={i}
          onClick={() => props.onItemClicked(i)}
        >
          {i}
        </button>,
      );
      if (items.length >= 3) {
        break;
      }
    }
    return items;
  };

  const leftSideItems = getLeftSideItems(props.mode, props.currentPage);
  const rightSideItems = getRightSideItems(
    props.mode,
    props.currentPage,
    props.lastPage,
  );

  return (
    <nav aria-label="ページナビゲーション" className="flex items-center gap-3">
      {props.currentPage >= 2 && (
        <>
          <button
            aria-label="最初のページに移動する"
            className={paginationItemStyle}
            onClick={() => props.onItemClicked(1)}
          >
            <svg
              aria-hidden
              fill="none"
              height="24"
              viewBox="0 0 24 24"
              width="24"
            >
              <path
                d="M18.33 19L19 18.33L12.67 12L19 5.67L18.33 5L11.33 12L18.33 19Z"
                fill="#1A3EE8"
              />
              <rect
                fill="#1A3EE8"
                height="14"
                transform="matrix(1, 8.74228e-08, 8.74228e-08, -1, 6, 19)"
                width="1"
              />
            </svg>
          </button>
          <button
            aria-label="前のページへ戻る"
            className={paginationItemStyle}
            onClick={() => props.onItemClicked(props.currentPage - 1)}
          >
            <svg
              aria-hidden
              fill="none"
              height="24"
              viewBox="0 0 24 24"
              width="24"
            >
              <path
                d="M15.33 19L16 18.33L9.67 12L16 5.67L15.33 5L8.33 12L15.33 19Z"
                fill="#1A3EE8"
              />
            </svg>
          </button>
        </>
      )}

      {props.mode === "default" && props.currentPage - 3 > 1 && (
        <svg aria-hidden fill="none" height="24" viewBox="0 0 24 24" width="24">
          <circle className="fill-blue-900" cx="6" cy="12" r="1" />
          <circle className="fill-blue-900" cx="12" cy="12" r="1" />
          <circle className="fill-blue-900" cx="18" cy="12" r="1" />
        </svg>
      )}
      {leftSideItems}
      <span className="text-caption-lg">
        <span aria-current="page">{props.currentPage}</span> / {props.lastPage}
      </span>
      {rightSideItems}
      {props.mode === "default" && props.lastPage - 3 > props.currentPage && (
        <svg aria-hidden fill="none" height="24" viewBox="0 0 24 24" width="24">
          <circle className="fill-blue-900" cx="6" cy="12" r="1" />
          <circle className="fill-blue-900" cx="12" cy="12" r="1" />
          <circle className="fill-blue-900" cx="18" cy="12" r="1" />
        </svg>
      )}
      {props.currentPage < props.lastPage && (
        <>
          <button
            aria-label="次のページへ進む"
            className={paginationItemStyle}
            onClick={() => props.onItemClicked(props.currentPage + 1)}
          >
            <svg
              aria-hidden
              fill="none"
              height="24"
              viewBox="0 0 24 24"
              width="24"
            >
              <path
                className="fill-blue-900"
                d="M8.67 19L8 18.33L14.33 12L8 5.67L8.67 5L15.67 12L8.67 19Z"
              />
            </svg>
          </button>
          <button
            aria-label="最後のページに移動する"
            className={paginationItemStyle}
            onClick={() => props.onItemClicked(props.lastPage)}
          >
            <svg
              aria-hidden
              className="-scale-x-100"
              fill="none"
              height="24"
              viewBox="0 0 24 24"
              width="24"
            >
              <path
                className="fill-blue-900"
                d="M18.33 19L19 18.33L12.67 12L19 5.67L18.33 5L11.33 12L18.33 19Z"
              />
              <rect
                className="fill-blue-900"
                height="14"
                transform="matrix(1, 8.74228e-08, 8.74228e-08, -1, 6, 19)"
                width="1"
              />
            </svg>
          </button>
        </>
      )}
    </nav>
  );
};
