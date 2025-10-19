'use client';

import React, { useState, useEffect } from 'react';
import { Logo } from '@/components/icons/logo';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { KeyRound, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { label: 'Quem Somos', href: '#diferenciais' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Integrações', href: '#integrations' },
  { label: 'Suporte', href: '#faq' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl transition-all duration-300 ease-out',
        scrolled ? 'h-16' : 'h-[72px]'
      )}
    >
      <div
        className={cn(
          'absolute inset-0 rounded-full bg-gradient-to-b from-[#FF6A2E] to-[#FF4B1F] shadow-[0_8px_32px_rgba(255,87,34,0.3)] transition-all duration-300',
          'before:absolute before:inset-0 before:rounded-full before:border before:border-white/20 before:p-px before:content-[""]',
          'after:absolute after:inset-0 after:rounded-full after:bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.25),transparent_60%)] after:content-[""]'
        )}
      />

      <nav className="relative z-10 flex h-full items-center justify-between px-6">
        {/* Logo */}
        <a href="#hero" aria-label="Página inicial da Fusion Pay">
          <Logo className="h-8 w-auto text-white" />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-white/90 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Button
            size="sm"
            className="rounded-full bg-white text-black h-10 px-6 font-semibold hover:bg-neutral-200 hover:scale-105 transition-transform"
          >
            <KeyRound className="mr-2 h-4 w-4" />
            Entrar
          </Button>
        </div>

        {/* Mobile Navigation Trigger */}
        <div className="lg:hidden">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full text-white hover:bg-white/10"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-[#0A0A0A] border-r-white/10 w-[80%] max-w-sm p-0">
              <div className="flex h-full flex-col p-6">
                <div className="mb-8">
                  <Logo className="h-8 w-auto" />
                </div>
                <div className="flex flex-col gap-4 text-lg">
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="text-white/90 transition-colors hover:text-white"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
                <div className="mt-auto">
                  <Button
                    size="lg"
                    className="w-full rounded-full bg-white text-black h-12 font-semibold"
                  >
                    <KeyRound className="mr-2 h-4 w-4" />
                    Entrar
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
