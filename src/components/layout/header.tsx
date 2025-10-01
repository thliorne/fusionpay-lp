import Link from 'next/link';
import { Logo } from '@/components/icons/logo';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';

export function Header({ className }: { className?: string }) {
  const navLinks = [
    { href: '#open-account', label: 'Abrir conta agora', isPrimary: true },
  ];

  return (
    <header className={cn("sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60", className)}>
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Link href="/">
          <Logo />
        </Link>
        
        <nav className="hidden md:flex items-center space-x-2">
          <Button asChild>
            <Link href="#open-account">Abrir conta agora</Link>
          </Button>
        </nav>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col space-y-4 mt-8">
                <Link href="/">
                  <Logo />
                </Link>
                {navLinks.map(link => (
                  <Button key={link.href} variant={link.isPrimary ? "default" : "ghost"} asChild>
                    <Link href={link.href}>{link.label}</Link>
                  </Button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
