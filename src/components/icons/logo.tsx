"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="https://i.imgur.com/j0I0NJz.png"
      alt="Fusion Pay — Confiança para Vender"
      width={160}
      height={40}
      decoding="async"
      fetchPriority="high"
      loading="eager"
      className={cn("w-auto object-contain h-[22px] md:h-[24px] lg:h-[28px]", className)}
      style={{ imageRendering: 'auto' }}
    />
  );
}
