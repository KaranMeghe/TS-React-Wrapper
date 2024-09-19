import { ComponentPropsWithoutRef } from "react";

interface AnchorTypeProps extends ComponentPropsWithoutRef<"a"> {
  children: React.ReactNode;
}

interface ButtonTypeProps extends ComponentPropsWithoutRef<"button"> {
  children: React.ReactNode;
}

function isAnchorProps(
  props: ButtonTypeProps | AnchorTypeProps
): props is AnchorTypeProps {
  return "href" in props;
} // Providing extra information to type script by Type Predicates

const Button = (props: ButtonTypeProps | AnchorTypeProps) => {
  if (isAnchorProps(props)) {
    return <a {...props}>{props.children}</a>;
  }

  return <button {...props}>{props.children}</button>;
};

export default Button;
