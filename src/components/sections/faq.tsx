"use client";

import { FAQ1 } from "@/components/ui/faq-monocrhome";

export function FaqSection({ id }: { id?: string }) {
  return (
    <div id={id} className="section-surface">
      <FAQ1 />
    </div>
  );
}
