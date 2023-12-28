import { ComponentProps, ReactNode } from "react";

export type AccordionProps = ComponentProps<"details">;

export const Accordion = (props: AccordionProps) => {
  const { children, className, ...rest } = props;
  return (
    <details className={`group ${className ?? ""}`} {...rest}>
      {children}
    </details>
  );
};

export const AccordionDefaultIcon = () => {
  return (
    <svg
      aria-hidden={true}
      className="pointer-events-none transition-all duration-200 group-open:rotate-180"
      fill="none"
      height="48"
      viewBox="0 0 48 48"
      width="48"
    >
      <path
        d="M24 31.7219L12 19.5886L13.3333 18.2552L24 28.9219L34.6667 18.2552L36 19.5886L24 31.7219Z"
        fill="#1A1A1C"
      />
    </svg>
  );
};

export type AccordionSummaryProps = ComponentProps<"summary"> & {
  icon?: ReactNode;
};

export const AccordionSummary = (props: AccordionSummaryProps) => {
  const { children, className, ...rest } = props;
  return (
    <summary
      className={`${
        className ?? ""
      } focus:outline-focused flex list-none items-center justify-between gap-4 outline-2 focus:rounded-[4px] focus:outline [&::-webkit-details-marker]:hidden`}
      {...rest}
    >
      {children}
    </summary>
  );
};

export type AccordionContentProps = ComponentProps<"div">;

export const AccordionContent = (props: AccordionContentProps) => {
  const { children, className, ...rest } = props;
  return (
    <div className={`${className ?? ""} p-4`} {...rest}>
      {children}
    </div>
  );
};
