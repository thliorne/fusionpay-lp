import { cn } from "@/lib/utils";
import Image from "next/image";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("relative", className)}>
      <Image 
        src="https://i.imgur.com/BZIfwPF.png"
        alt="Fusion Pay Logo"
        width={160}
        height={40}
        className="w-32 md:w-40 h-auto filter invert brightness-0"
      />
    </div>
  )
}
