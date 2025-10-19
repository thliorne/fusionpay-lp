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
      className={cn("w-auto object-contain h-[26px] md:h-[28px] lg:h-[32px]", className)}
      style={{ imageRendering: 'auto' }}
    />
  );
}
