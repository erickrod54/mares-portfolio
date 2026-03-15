import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

/** ErikaM-branding - Portfolio version 1.05 - Features: 
 * 
 *    --> Building 'Button' ui component
 * 
 * Note: 'TailwindTest' is a component to test 
 * tailwind 
 */

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-brand text-sm font-bold uppercase tracking-widest ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal disabled:pointer-events-none disabled:opacity-50 active:scale-95",
  {
    variants: {
      variant: {
        // Uses our brand colors from index.css
        default: "bg-brand-navy text-brand-silver hover:bg-brand-teal hover:text-white shadow-md",
        destructive: "bg-red-500 text-white hover:bg-red-600",
        outline: "border-2 border-brand-teal bg-transparent text-brand-teal hover:bg-brand-teal hover:text-white",
        secondary: "bg-brand-silver text-brand-navy hover:bg-brand-navy/10",
        ghost: "hover:bg-brand-teal/10 text-brand-teal",
        link: "text-brand-navy underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-3",
        lg: "h-14 px-10 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  )
})
Button.displayName = "Button"

export { Button, buttonVariants }