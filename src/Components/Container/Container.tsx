import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

interface ContainerProps extends ComponentPropsWithoutRef<ElementType> {
  as: ElementType;
  children?: ReactNode;
}

const Container = ({ as: Component, children, ...others }: ContainerProps) => {
  return <Component {...others}>{children}</Component>;
};

export default Container;
