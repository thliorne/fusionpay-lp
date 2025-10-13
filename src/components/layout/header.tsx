import { Logo } from '@/components/icons/logo';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-30 bg-transparent py-6">
      <div className="container mx-auto px-4 pr-20 flex justify-between items-center">
        <div className="flex items-center gap-8">
          <Logo />
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors">Quem Somos</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Diferenciais</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Integrações</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Suporte</a>
          </nav>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <Button asChild>
            <Link href="https://app.fusionpaybr.com.br/auth/register">Criar conta</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="https://app.fusionpaybr.com.br/auth/login">Login</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
