import { cn } from "@/lib/utils";
import Image from "next/image";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2 text-xl font-bold text-white", className)}>
      <Image src="https://i.imgur.com/ZmwtWfz.png" alt="Fusion Pay Logo" width={24} height={24} />
      <span className="font-headline">Fusion Pay</span>
    </div>
  )
}
