"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function DashboardSection() {
  const dashboardImage = PlaceHolderImages.find(p => p.id === 'hero-dashboard');

  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-foreground">
              Tudo em um só{" "}
              <span className="relative inline-block text-primary">
                dashboard
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary/70 rounded-full blur-[6px]"></span>
              </span>
            </h2>
            <p className="max-w-2xl mx-auto mt-4 text-lg text-muted-foreground">
              Gerencie suas vendas, acompanhe seus recebimentos e tenha total controle sobre seu negócio em tempo real.
            </p>
          </>
        }
      >
        <Image
          src={dashboardImage?.imageUrl || "https://i.imgur.com/xkAaF4R.png"}
          alt="Fusion Pay Dashboard"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
          data-ai-hint={dashboardImage?.imageHint || "dashboard fintech"}
        />
      </ContainerScroll>
    </div>
  );
}