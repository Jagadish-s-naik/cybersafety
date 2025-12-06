import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const alertVariants = cva(
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default: "bg-white/20 text-white border-white/30", // Brighter default
        destructive:
          "border-red-500/50 text-red-400 dark:border-red-500 [&>svg]:text-red-400 bg-red-900/20", // Brighter destructive
        success:
          "border-green-500/50 text-green-400 dark:border-green-500 [&>svg]:text-green-400 bg-green-900/20", // Brighter success
        warning:
          "border-orange-500/50 text-orange-400 dark:border-orange-500 [&>svg]:text-orange-400 bg-orange-900/20", // Brighter warning
        info:
          "border-blue-500/50 text-blue-400 dark:border-blue-500 [&>svg]:text-blue-400 bg-blue-900/20", // Brighter info
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant, ...props }, ref) => (
    <div
      ref={ref}
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  )
)
Alert.displayName = "Alert"

const AlertTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h5
      ref={ref}
      className={cn("mb-1 font-medium leading-none tracking-tight", className)}
      {...props}
    />
  )
)
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("text-sm [&_p]:leading-relaxed", className)}
      {...props}
    />
  )
)
AlertDescription.displayName = "AlertDescription"

export {
  Alert,
  AlertTitle,
  AlertDescription
}
