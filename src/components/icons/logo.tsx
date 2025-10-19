import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2 text-2xl font-bold", className)}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-primary"
      >
        <circle cx="20" cy="20" r="20" fill="currentColor" />
        <path
          d="M14.5 14.5C14.5 18.366 17.634 21.5 21.5 21.5C25.366 21.5 28.5 18.366 28.5 14.5C28.5 10.634 25.366 7.5 21.5 7.5C19.8422 7.5 18.3153 8.08171 17.0711 9.07107M12.9289 22.9289C11.9183 21.6847 11.5 20.1578 11.5 18.5C11.5 14.634 14.634 11.5 18.5 11.5C22.366 11.5 25.5 14.634 25.5 18.5C25.5 22.366 22.366 25.5 18.5 25.5C16.8422 25.5 15.3153 24.9183 14.0711 23.9289"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="font-headline text-white">Fusion Pay</span>
    </div>
  )
}
