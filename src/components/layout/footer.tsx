import { Logo } from "@/components/icons/logo";

export function Footer() {
  return (
    <footer className="bg-secondary border-t border-border/40">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <Logo />
        <div className="text-center text-sm text-muted-foreground md:text-left">
          © 2025 Fusion Pay. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
