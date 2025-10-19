"use client";

export const FooterBackgroundGradient = () => {
  return (
    <div
      className="absolute inset-0 z-0"
      style={{
        background:
          "radial-gradient(125% 125% at 50% 10%, hsl(0 0% 5% / 0.4), hsl(var(--primary) / 0.1) 100%)",
      }}
    />
  );
};
