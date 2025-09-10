const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-black text-white hover:bg-neutral-800",
        outline: "border border-input hover:bg-accent hover:text-accent-foreground"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md",
        xs: "h-6 px-2 text-xs rounded"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
)

export function Button({ className, variant, size, color, ...props }) {
  return (
    <button className={cn(buttonVariants({ variant, size }), className)} {...props} />
  )
}
