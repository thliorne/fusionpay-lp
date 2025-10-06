import { Logo } from '@/components/icons/logo';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-30 bg-transparent py-6">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Logo />
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-white hover:text-primary transition-colors">Quem Somos</a>
          <a href="#" className="text-white hover:text-primary transition-colors">Diferenciais</a>
          <a href="#" className="text-white hover:text-primary transition-colors">Integrações</a>
          <a href="#" className="text-white hover:text-primary transition-colors">Suporte</a>
        </nav>
        <Button variant="outline" className="hidden md:flex bg-white/10 text-white border-white/20 hover:bg-white/20">
          Login
        </Button>
      </div>
    </header>
  );
}
