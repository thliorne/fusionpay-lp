"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function WhatsAppButton() {
  return (
    <Link
      href="https://api.whatsapp.com/send/?phone=79644350321&text=Ol%C3%A1!%20Tenho%20uma%20d%C3%BAvida%20sobre%20o%20FusionPay&type=phone_number&app_absent=0"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      <Button
        size="icon"
        className="rounded-full w-14 h-14 bg-green-500 hover:bg-green-600 text-white shadow-lg transition-transform hover:scale-110"
      >
        <Image
          src="https://i.imgur.com/ZOF9KMD.png"
          alt="WhatsApp Icon"
          width={28}
          height={28}
        />
        <span className="sr-only">Fale conosco no WhatsApp</span>
      </Button>
    </Link>
  );
}
