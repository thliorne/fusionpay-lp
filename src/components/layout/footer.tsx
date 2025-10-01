import { RetroGrid } from "@/components/ui/retro-grid";
import { cn } from "@/lib/utils";

export function Footer({ className }: { className?: string }) {
  return (
    <footer className={cn("relative flex h-96 w-full flex-col items-center justify-center overflow-hidden border-t border-border/40", className)}>
       <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-primary via-accent to-primary bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent">
         Fusion Pay
       </span>
       <RetroGrid />
    </footer>
  );
}
