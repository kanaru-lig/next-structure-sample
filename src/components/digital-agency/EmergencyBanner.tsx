import { ComponentProps, ElementType } from "react";

export type EmergencyBannerProps<T extends ElementType> = Omit<ComponentProps<T>, keyof { as?: T }> & {
  as?: T;
};

export const EmergencyBanner = <T extends ElementType>(props: EmergencyBannerProps<T>) => {
  const { as, className, children, ...rest } = props;

  const Tag = as ?? "div";

  return (
    <Tag className={`border-sun-800 border-[6px] p-8 ${className}`} {...rest}>
      {children}
    </Tag>
  );
};
