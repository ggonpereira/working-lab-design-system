import clsx from "clsx";
import { InputHTMLAttributes, ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";

export interface TextInputRootProps {
  children: ReactNode;
}

export interface TextInputIconProps {
  children: ReactNode;
}

export interface TextInputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

export const TextInputRoot = ({ children }: TextInputRootProps) => (
  <div
    className={clsx(
      "flex items-center gap-3 h-12 bg-gray-800 py-4 px-3 focus-within:ring-2 ring-cyan-300 rounded"
    )}
  >
    {children}
  </div>
);
TextInputRoot.displayName = "TextInput.Root";

export const TextInputIcon = ({ children }: TextInputIconProps) => (
  <Slot className="w-6 h-6 text-gray-400">{children}</Slot>
);
TextInputIcon.displayName = "TextInput.Icon";

export const TextInputInput = ({ ...props }: TextInputInputProps) => (
  <input
    className="bg-transparent outline-none flex-1 text-gray-100 text-xs placeholder:text-gray-400"
    {...props}
  />
);
TextInputInput.displayName = "TextInput.Input";

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
};
