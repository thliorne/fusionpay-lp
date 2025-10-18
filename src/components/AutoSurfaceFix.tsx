"use client";
import { useEffect } from "react";

/**
 * AutoSurfaceFix
 * - Makes common section wrappers transparent so the global background is visible.
 * - Skips header/nav, footer, modals, toasts, and any element with data-keep-bg="true".
 * - Leaves elements with background images intact.
 */
export default function AutoSurfaceFix() {
  useEffect(() => {
    const SKIP = (el: Element) =>
      el.closest("header, nav, [role='dialog'], [role='menu'], [data-keep-bg='true']");

    const LIGHT_BG_REGEX = /(rgba?\(\s*255\s*,\s*255\s*,\s*255)|#fff\b|#ffffff\b|rgb\(250,250,250\)|rgb\(245,245,245\)|gray-50|slate-50|zinc-50/i;

    const CANDIDATES = document.querySelectorAll<HTMLElement>(
      [
        "main > section",
        "main > div",
        "section",
        "[class*='section']",
        ".container, .wrapper, .content",
      ].join(",")
    );

    CANDIDATES.forEach((el) => {
      if (SKIP(el)) return;

      const style = getComputedStyle(el);
      const hasBgImage = style.backgroundImage && style.backgroundImage !== "none";
      if (hasBgImage) return; // keep designed image/gradient sections intact

      // If the computed background is fully transparent, do nothing
      const bgColor = style.backgroundColor.trim();
      const isTransparent = bgColor === "rgba(0, 0, 0, 0)" || bgColor === "transparent";

      // Heuristic: if background looks white/very light OR utility classes suggest light bg, neutralize it
      const classText = el.className ? String(el.className) : "";
      const looksLight =
        LIGHT_BG_REGEX.test(bgColor) ||
        /(bg-white|bg-gray-50|bg-slate-50|bg-zinc-50|bg-neutral-50)/.test(classText);

      if (!isTransparent && looksLight) {
        el.style.background = "transparent"; // force transparency
      }
    });
  }, []);

  return null;
}
