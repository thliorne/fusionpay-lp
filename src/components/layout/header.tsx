'use client';

import React, { useState, useEffect } from 'react';
import { Logo } from '@/components/icons/logo';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { KeyRound, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const navLinks = [
  { label: 'Quem Somos', href: '#diferenciais' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Integrações', href: '#integrations' },
  { label: 'Suporte', href: '#faq' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);

      if (currentScrollY > lastScrollY && currentScrollY > 72) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={cn(
        'fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl transition-all duration-300 ease-out',
        scrolled ? 'h-16' : 'h-[72px]',
        visible ? 'translate-y-0' : '-translate-y-[200%]'
      )}
    >
      <div
        className={cn(
          'absolute inset-0 rounded-[24px] border border-primary/40 bg-gradient-to-t from-black to-neutral-900 shadow-[0_0_15px_rgba(255,87,34,0.2),inset_0_1px_1px_rgba(255,255,255,0.05)] transition-all duration-300',
        )}
      />

      <nav className="relative z-10 flex h-full items-center justify-between px-6">
        {/* Logo */}
        <a href="#hero" aria-label="Página inicial da Fusion Pay" className="pl-[14px] -translate-y-px">
          <div className="w-auto object-contain h-[32px] md:h-[34px] lg:h-[36px]">
            <Image
              src="https://i.imgur.com/j0I0NJz.png"
              alt="Fusion Pay — Confiança para Vender"
              width={160}
              height={40}
              decoding="async"
              fetchPriority="high"
              loading="eager"
              style={{ imageRendering: 'auto' }}
            />
          </div>
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
            className="rounded-full bg-white text-black h-10 px-6 font-semibold hover:bg-neutral-200 hover:scale-105 transition-transform shadow-sm hover:shadow-md hover:shadow-primary/20"
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
                  <a href="#hero" aria-label="Página inicial da Fusion Pay" onClick={() => setMobileMenuOpen(false)}>
                    <Logo />
                  </a>
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
