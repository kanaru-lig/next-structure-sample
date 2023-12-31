import { ComponentProps, ElementType } from "react";

export type EmergencyBannerProps<T extends ElementType> = Omit<
  ComponentProps<T>,
  keyof { as?: T }
> & {
  as?: T;
};

export const EmergencyBanner = <T extends ElementType>(
  props: EmergencyBannerProps<T>,
) => {
  const { as, className, children, ...rest } = props;

  const Tag = as ?? "div";

  return (
    <Tag
      className={`${className ?? ""} border-[6px] border-sun-800 p-8`}
      {...rest}
    >
      {children}
    </Tag>
  );
};
