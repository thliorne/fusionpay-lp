"use client";
import React from "react";

/**
 * Global background for Fusion Pay:
 * - Black base
 * - Orange glows (top-left and bottom-right)
 * - Floating particles (CPU-light)
 * - Fixed + behind all content (z-negative)
 * - Ignores pointer events
 */
export default function GlobalBackground() {
  return (
    <div
      aria-hidden
      className="fixed inset-0 -z-50 bg-black overflow-hidden pointer-events-none"
    >
      {/* Big orange glows */}
      <div className="absolute top-1/4 -left-1/4 w-[50vw] h-[50vw] bg-fusion-orange/20 rounded-full blur-3xl animate-glowPulse" />
      <div
        className="absolute bottom-1/4 -right-1/4 w-[50vw] h-[50vw] bg-fusion-orange/20 rounded-full blur-3xl animate-glowPulse"
        style={{ animationDelay: "1.5s" }}
      />
      {/* Floating particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 64 }).map((_, i) => (
          <span
            key={i}
            className="absolute block w-1 h-1 bg-fusion-orange/30 rounded-full"
            style={{
              left: `${(i * 173) % 100}%`,
              top: `${(i * 127) % 100}%`,
              animation: `float ${(8 + (i % 5))}s ease-in-out infinite`,
              animationDelay: `${(i % 7) * 0.25}s`,
              opacity: 0.6,
            }}
          />
        ))}
      </div>
    </div>
  );
}
