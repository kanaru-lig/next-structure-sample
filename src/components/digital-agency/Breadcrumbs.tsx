import { ReactNode } from "react";

export const breadcrumbsItemStyle = `text-blue-1000 text-oln-14N-1 underline hover:bg-blue-50 hover:rounded-[4px] active:text-blue-1200 focus:outline-2 focus:outline-focused`;

export type BreadcrumbsProps = {
  items: ReactNode[];
  ariaLabel?: string;
};

export const Breadcrumbs = (props: BreadcrumbsProps) => {
  return (
    <nav aria-label={`${props.ariaLabel ?? "パンくずリスト"}`}>
      <ol className="inline">
        {props.items.map((item, index) => {
          if (props.items.length - 1 !== index) {
            return (
              <li className="inline break-all" key={`breadcrumbs-item-${index}`}>
                {item}
                <svg aria-hidden={true} className="mx-2 inline" fill="none" height="12" viewBox="0 0 12 12" width="12">
                  <path d="M4.50078 1.2998L3.80078 1.9998L7.80078 5.9998L3.80078 9.9998L4.50078 10.6998L9.20078 5.9998L4.50078 1.2998Z" fill="#1A1A1C" />
                </svg>
              </li>
            );
          } else {
            return (
              <li aria-current="page" className={`text-label-lg text-description inline break-all`} key={`breadcrumbs-item-${index}`}>
                {item}
              </li>
            );
          }
        })}
      </ol>
    </nav>
  );
};
