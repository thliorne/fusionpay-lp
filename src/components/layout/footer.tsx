import { Logo } from '@/components/icons/logo';
import { cn } from '@/lib/utils';

export function Footer({ className }: { className?: string }) {
  return (
    <footer className={cn("border-t border-border/40", className)}>
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Logo />
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Fusion Pay. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
