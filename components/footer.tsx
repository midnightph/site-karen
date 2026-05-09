"use client"

import Link from "next/link"
import { Instagram, Mail, Phone, MapPin, Heart, InstagramIcon } from "lucide-react"
import { motion } from "framer-motion"

const footerLinks = {
  academy: [
    { label: "Cursos Online", href: "/cursos" },
    { label: "Cursos Presenciais", href: "/cursos" },
    { label: "Mentoria VIP", href: "/mentoria" },
    { label: "Certificados", href: "/cursos" },
  ],
  support: [
    { label: "Contato", href: "/contato" },
    { label: "FAQ", href: "/#faq" },
    { label: "Política de Privacidade", href: "#" },
    { label: "Termos de Uso", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="font-serif text-2xl font-bold text-background">
                Karen Santos
              </span>
              <span className="block text-xs tracking-[0.3em] text-primary uppercase">
                Beauty Academy
              </span>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed mb-6">
              Transformando sonhos em carreiras de sucesso no mercado da beleza há mais de 6 anos.
            </p>
            <div className="flex items-center gap-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://instagram.com/karenbeautyofficial/"
                target="_blank"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Academy Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-background">
              Academy
            </h4>
            <ul className="space-y-3">
              {footerLinks.academy.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-background">
              Suporte
            </h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-background">
              Contato
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3" onClick={() => {
                window.open("https://instagram.com/karenbeautyofficial/", "_blank")
              }}>
                <InstagramIcon className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-background/70 text-sm">Instagram</p>
                  <p className="text-background text-sm underline">@karenbeautyofficial</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-background/70 text-sm">Estúdio</p>
                  <p className="text-background text-sm">Campo Largo - PR</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-background/50 text-sm text-center md:text-left">
              © 2026 Karen Santos Beauty Academy. Todos os direitos reservados.
            </p>
            <p className="text-background/50 text-sm flex items-center gap-1">
              Feito com <Heart className="w-4 h-4 text-primary fill-primary" /> para mulheres que sonham alto
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
