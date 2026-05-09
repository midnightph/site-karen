"use client"

import { motion } from "framer-motion"
import { ArrowRight, Play, Star, Users, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 via-background to-rose-light/30" />
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6"
            >
              <Star className="w-4 h-4 text-primary fill-primary" />
              <span className="text-sm font-medium text-primary">+5.000 Alunas Certificadas</span>
            </motion.div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight mb-6">
              Transforme sua{" "}
              <span className="text-primary relative">
                paixão
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <path d="M2 10C50 4 150 4 198 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-accent"/>
                </svg>
              </span>{" "}
              em uma carreira de{" "}
              <span className="text-primary">sucesso</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              Aprenda as técnicas mais avançadas de extensão de cílios com quem já formou milhares de profissionais de sucesso em todo o Brasil.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-rose-dark text-primary-foreground rounded-full px-8 py-6 text-lg font-medium shadow-xl shadow-primary/25 hover:shadow-primary/40 transition-all"
              >
                <Link href="/cursos">
                  Começar Agora
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-8 py-6 text-lg font-medium border-2 hover:bg-secondary"
              >
                <Link href="/#sobre">
                  <Play className="w-5 h-5 mr-2" />
                  Conhecer a Karen
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start">
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <Users className="w-5 h-5 text-primary" />
                  <span className="font-serif text-3xl font-bold text-foreground">17.5K+</span>
                </div>
                <span className="text-sm text-muted-foreground">Alunas Formadas</span>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <Award className="w-5 h-5 text-primary" />
                  <span className="font-serif text-3xl font-bold text-foreground">6+</span>
                </div>
                <span className="text-sm text-muted-foreground">Anos de Experiência</span>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <Star className="w-5 h-5 text-primary fill-primary" />
                  <span className="font-serif text-3xl font-bold text-foreground">4.9</span>
                </div>
                <span className="text-sm text-muted-foreground">Avaliação Média</span>
              </div>
            </div>
          </motion.div>

          {/* Image/Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
                <Image
                  src="/images/hero-isabella.jpg"
                  alt="Isabella Monteiro - Lash Designer e Educadora"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent" />
              </div>

              {/* Floating Card 1 */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-8 top-1/4 bg-card rounded-2xl p-4 shadow-xl border border-border"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">Certificado</p>
                    <p className="text-xs text-muted-foreground">Reconhecido</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Card 2 */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-4 bottom-1/3 bg-card rounded-2xl p-4 shadow-xl border border-border"
              >
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-primary/20 border-2 border-card flex items-center justify-center"
                      >
                        <span className="text-xs text-primary font-medium">{i}</span>
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">+500</p>
                    <p className="text-xs text-muted-foreground">Este mês</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
