import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";
import { ReactNode } from "react";

export interface ButtonProps {
  children: ReactNode;
  asChild?: boolean;
  handleOnClick?: () => void;
}

export const Button = ({ children, asChild, handleOnClick }: ButtonProps) => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={clsx(
        "py-4 px-3 bg-cyan-500 rounded font-semibold text-black text-sm w-full transition-colors focus:ring-2 ring-white hover:bg-cyan-300"
      )}
      onClick={handleOnClick}
    >
      {children}
    </Comp>
  );
};
