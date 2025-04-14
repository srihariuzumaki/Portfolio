import React from "react";
import { cn } from "../../lib/utils";

interface RainbowButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function RainbowButton({
  children,
  className,
  ...props
}: RainbowButtonProps) {
  return (
    <button
      className={cn(
        "group relative inline-flex h-11 animate-rainbow cursor-pointer items-center justify-center rounded-xl bg-[length:200%] px-8 py-2 font-medium text-white transition-all",
        
        // Rainbow border effect with glow
        "border-[3px] border-transparent bg-clip-padding",
        "before:absolute before:inset-[-2px] before:-z-10 before:rounded-xl before:bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] before:bg-[length:200%] before:animate-rainbow before:blur-sm",
        
        // Background with transparency
        "after:absolute after:inset-[3px] after:-z-10 after:rounded-lg after:bg-black",

        // Focus and disabled states
        "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",

        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
