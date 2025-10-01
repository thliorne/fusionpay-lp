import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2 text-xl font-bold text-white", className)}>
    <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
      <path d="M14 0L24.3923 7V21L14 28L3.6077 21V7L14 0Z" fill="currentColor"/>
      <path d="M14 9.33333L20.1244 13.0667V20.5333L14 24.2667L7.87563 20.5333V13.0667L14 9.33333Z" fill="hsl(var(--background))"/>
    </svg>
    <span className="font-headline">Fusion Pay</span>
  </div>
  )
}
