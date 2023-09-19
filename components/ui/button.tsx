//we r creating our own btnComponent to be free of shadcn a little bit
import { forwardRef } from "react";

import { cn } from "@/lib/util";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, disabled, type = "button", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          `w-auto
           rounded-full
         bg-black 
           border-transparent
           px-5 py-3 
           disabled:cursor-not-allowed
           opacity-50 text-white
           font-semibold
           hover:opacity-75
           transition
           `,
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

// so to remove the warning error above i've just to put the element below
Button.displayName = "Button";
