import { ComponentProps } from "react";

export type NotificationBannerProps = ComponentProps<"div"> & {
  borderStyle: "standard" | "color-chip";
};

export const NotificationBanner = (props: NotificationBannerProps) => {
  const { children, className, borderStyle, ...rest } = props;

  if (borderStyle === "standard") {
    return (
      <div className={`${className ?? ""} border-[3px] p-6`} {...rest}>
        {children}
      </div>
    );
  } else {
    return (
      <div
        className={`${
          className ?? ""
        } border-y-[2px] border-l-[16px] border-r-[2px] py-6 pl-6 pr-[30px]`}
        {...rest}
      >
        {children}
      </div>
    );
  }
};
