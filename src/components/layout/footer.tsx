"use client";
import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Smartphone,
  FileText,
} from "lucide-react";
import { FooterBackgroundGradient } from "@/components/ui/hover-footer";
import { Logo } from "../icons/logo";
import { TextHoverEffect } from "../ui/text-hover-effect";
import Link from "next/link";

function HoverFooter() {
  const footerLinks = [
    {
      title: "Recursos",
      links: [
        { label: "Comece aqui", href: "#" },
        { label: "Preços", href: "#" },
        {
          label: "Suporte 24h",
          href: "https://api.whatsapp.com/send/?phone=79644350321&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20o%20FusionPay&type=phone_number&app_absent=0",
          pulse: true,
        },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Termos de Uso", href: "/termos-de-uso" },
        { label: "Política de Privacidade", href: "/politica-de-privacidade" },
        { label: "Política de Cookies", href: "/politica-de-cookies" },
        { label: "Política de Segurança", href: "/politica-de-seguranca" },
      ],
    },
  ];

  const contactInfo = [
    {
      icon: <Phone size={18} className="text-primary" />,
      text: "+7 964 435-03-21",
      href: "tel:+79644350321",
    },
    {
      icon: <Smartphone size={18} className="text-primary" />,
      text: "+55 51 99670-5759",
      href: "tel:+5551996705759",
    },
  ];

  const socialLinks = [
    { icon: <Instagram size={20} />, label: "Instagram", href: "https://www.instagram.com/fusionpaybr?igsh=MTR3cmxscGhjMHB0ZA%3D%3D" },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#0A0A0A] to-[#1A1A1A] relative h-fit rounded-3xl overflow-hidden m-8 border border-white/10 shadow-lg transition-colors duration-300">
      <div className="max-w-7xl mx-auto p-14 z-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 lg:gap-16 pb-12">
          {/* Brand section */}
          <div className="flex flex-col space-y-4">
            <Logo />
            <p className="text-sm leading-relaxed text-neutral-300">
              O gateway de pagamentos para escalar o seu negócio.
            </p>
          </div>

          {/* Footer link sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-white text-lg font-semibold mb-6">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label} className="relative">
                    <Link
                      href={link.href}
                      className="text-white/90 hover:text-primary transition-colors underline-offset-4 hover:underline"
                    >
                      {link.label}
                    </Link>
                    {link.pulse && (
                      <span className="absolute top-1/2 -translate-y-1/2 right-full mr-2 w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact section */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">
              Fale Conosco
            </h4>
            <ul className="space-y-4">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-center space-x-3">
                  {item.icon}
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-white/90 hover:text-primary transition-colors underline-offset-4 hover:underline"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-neutral-300">
                      {item.text}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="border-t border-white/10 my-8" />

        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0">
          {/* Social icons */}
          <div className="flex space-x-6 text-primary">
            {socialLinks.map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex items-center gap-2 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {icon}
                <span>Siga-nos no Instagram!</span>
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-center md:text-left text-neutral-400">
            &copy; {new Date().getFullYear()} Fusion Pay. Todos os direitos reservados.
          </p>
        </div>
      </div>

      {/* Text hover effect - now with z-0 */}
      <div className="absolute bottom-0 left-0 right-0 lg:flex hidden h-[30rem] -mb-36 z-0">
        <TextHoverEffect text="Fusion" className="opacity-30 w-full" />
      </div>

      <FooterBackgroundGradient />
    </footer>
  );
}


export function Footer() {
  return (
    <HoverFooter />
  );
}
