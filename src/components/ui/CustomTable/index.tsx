import {
  HTMLAttributes,
  PropsWithChildren,
  TableHTMLAttributes,
  TdHTMLAttributes,
  ThHTMLAttributes,
} from "react";
import "./table.css";

export const Table = ({
  children,
  ...props
}: PropsWithChildren & TableHTMLAttributes<HTMLTableElement>) => {
  return <table {...props}>{children}</table>;
};

export const Thead = ({
  children,
  ...props
}: PropsWithChildren & HTMLAttributes<HTMLTableSectionElement>) => {
  return <thead {...props}>{children}</thead>;
};

export const Tbody = ({
  children,
  ...props
}: PropsWithChildren & HTMLAttributes<HTMLTableSectionElement>) => {
  return <tbody {...props}>{children}</tbody>;
};

export const Tr = ({
  children,
  ...props
}: PropsWithChildren & HTMLAttributes<HTMLTableRowElement>) => {
  return <tr {...props}>{children}</tr>;
};

export const Th = ({
  children,
  ...props
}: PropsWithChildren & ThHTMLAttributes<HTMLTableCellElement>) => {
  return (
    <th align="left" {...props}>
      {children}
    </th>
  );
};

export const Td = ({
  children,
  ...props
}: PropsWithChildren & TdHTMLAttributes<HTMLTableCellElement>) => {
  return (
    <td align="left" {...props}>
      {children}
    </td>
  );
};
