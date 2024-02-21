import { Children, PropsWithChildren } from "react";

export const Show = (props: any) => {
  let when: any = null;
  let otherwise = null;

  Children.forEach(props.children, (children) => {
    if (children.type.isTrue === undefined) {
      otherwise = children;
    } else if (!when && children.type.isTrue) {
      when = children;
    }
  });

  return when || otherwise;
};

Show.When = ({ isTrue, children }: PropsWithChildren<{ isTrue: boolean }>) =>
  isTrue && children;
Show.Else = ({ render, children }: any) => render || children;
