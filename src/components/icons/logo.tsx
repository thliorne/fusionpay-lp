"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Logo({ className }: { className?: string }) {
  const logoImage = PlaceHolderImages.find(p => p.id === 'header-logo');

  return (
    <div className={cn("w-auto object-contain h-[26px] md:h-[28px] lg:h-[32px]", className)}>
      <Image
        src={logoImage?.imageUrl || "https://i.imgur.com/j0I0NJz.png"}
        alt="Fusion Pay — Confiança para Vender"
        width={160}
        height={40}
        decoding="async"
        fetchPriority="high"
        loading="eager"
        style={{ imageRendering: 'auto' }}
        data-ai-hint={logoImage?.imageHint || 'logo'}
      />
    </div>
  );
}
