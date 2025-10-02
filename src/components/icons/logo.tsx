import { cn } from "@/lib/utils";
import Image from "next/image";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2 text-2xl font-bold text-white", className)}>
      <Image src="https://i.imgur.com/1kphUbe.png" alt="Fusion Pay Logo" width={40} height={40} />
      <span className="font-headline">Fusion Pay</span>
    </div>
  )
}
