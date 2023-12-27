import { ComponentProps } from "react";

export type TableProps = ComponentProps<"table">;

export const Table = (props: TableProps) => {
  const { children, className, ...rest } = props;

  return (
    <div className="w-full overflow-x-auto">
      <table className={`whitespace-nowrap ${className ?? ""}`} {...rest}>
        {children}
      </table>
    </div>
  );
};

export type TheadProps = ComponentProps<"thead">;

export const Thead = (props: TheadProps) => {
  const { children, ...rest } = props;

  return <thead {...rest}>{children}</thead>;
};

export type TbodyProps = ComponentProps<"tbody">;

export const Tbody = (props: TbodyProps) => {
  const { children, ...rest } = props;

  return <tbody {...rest}>{children}</tbody>;
};

export type TrProps = ComponentProps<"tr">;

export const Tr = (props: TrProps) => {
  const { children, ...rest } = props;

  return <tr {...rest}>{children}</tr>;
};

export const thStyle = `border border-solid-grey-200 bg-tertiary px-4 py-6 text-left text-std-16N-7 text-body`;

export type ThProps = ComponentProps<"th">;

export const Th = (props: ThProps) => {
  const { children, className, ...rest } = props;

  return (
    <th className={`${thStyle} ${className ?? ""}`} {...rest}>
      {children}
    </th>
  );
};

export const tdStyle = `border border-solid-grey-200 px-4 py-6 text-left text-std-16N-7 text-body`;

export type TdProps = ComponentProps<"td">;

export const Td = (props: TdProps) => {
  const { children, className, ...rest } = props;

  return (
    <th className={`${tdStyle} ${className ?? ""}`} {...rest}>
      {children}
    </th>
  );
};
