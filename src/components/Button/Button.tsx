import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";
import { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  asChild?: boolean;
}

export const Button = ({ children, asChild, ...props }: ButtonProps) => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={clsx(
        "py-3 px-4 bg-cyan-500 rounded leading-5 font-semibold text-black text-sm w-full transition-colors focus:ring-2 ring-white hover:bg-cyan-300"
      )}
      {...props}
    >
      {children}
    </Comp>
  );
};
