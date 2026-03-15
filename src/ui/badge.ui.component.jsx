import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

/** ErikaM-branding - Portfolio version 1.05 - Features: 
 * 
 *    --> Building 'Badge' ui component
 * 
 * Note: 'TailwindTest' is a component to test 
 * tailwind 
 */

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-brand-teal focus:ring-offset-2 uppercase tracking-tighter",
  {
    variants: {
      variant: {
        // High visibility for her current role
        default: "border-transparent bg-brand-teal text-white shadow hover:opacity-80",
        // Subdued for secondary skills
        secondary: "border-transparent bg-brand-silver text-brand-navy hover:bg-brand-silver/80",
        // Professional/Clinical look
        outline: "text-brand-navy border-brand-navy dark:text-brand-silver dark:border-brand-silver",
        // For urgent or safety-related highlights
        destructive: "border-transparent bg-red-500 text-white shadow hover:bg-red-500/80",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({ className, variant, ...props }) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }