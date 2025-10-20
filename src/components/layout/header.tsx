'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { KeyRound, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Logo } from '../icons/logo';

const navLinks = [
  { label: 'Quem Somos', href: '#diferenciais' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Integrações', href: '#integrations' },
  { label: 'Suporte', href: '#faq' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        'bg-black/50 backdrop-blur-md border-b border-white/10'
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
        {/* Logo */}
        <a href="#hero" aria-label="Página inicial da Fusion Pay" className="flex items-center">
          <Logo />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
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
            Login
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
                      key={link.href}
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
                    Login
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
