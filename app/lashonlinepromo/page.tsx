"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Crown, Check, Star, Users, Clock, Calendar, Video, MessageCircle, Target, Sparkles, ArrowRight, Diamond } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const benefits = [
  "Como escolher o tema ideal para o seu curso",
  "Como definir um nome atrativo",
  "Como estruturar as aulas sem complicação",
  "Como gravar usando apenas o celular",
  "Como organizar seu conteúdo de forma profissional",
  "Onde editar suas aulas de forma simples",
  "Como precificar seu curso de forma estratégica",
  "Como subir seu curso na plataforma",
  "Como criar sua página de vendas",
  "Como fazer seu lançamento de forma orgânica",
  "Como vender sem depender de uma equipe",
  "Como transformar seu conhecimento em uma nova fonte de renda",
]

const results = [
  { name: "Luciana", result: "Criou seu primeiro curso", time: "Em 7 dias" },
  { name: "Patricia", result: "Lançou com sucesso", time: "Em 7 dias" },
  { name: "Amanda", result: "Primeira venda fechada", time: "Em 10 dias" },
  { name: "Rafaela", result: "Já gerando renda extra", time: "Em 14 dias" },
]

const timeline = [
  { month: "Dia 1", title: "Tema do Curso", desc: "Como escolher o tema ideal e validar a demanda" },
  { month: "Dia 2", title: "Estrutura", desc: "Definir nome atrativo e estruturar as aulas" },
  { month: "Dia 3", title: "Gravação", desc: "Como gravar com apenas o celular" },
  { month: "Dia 4", title: "Edição", desc: "Editar suas aulas de forma simples e profissional" },
  { month: "Dia 5", title: "Precificação", desc: "Precificar seu curso de forma estratégica" },
  { month: "Dia 6-7", title: "Lançamento", desc: "Subir na plataforma e criar página de vendas" },
]

export default function MentoriaPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-foreground to-foreground/95 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center lg:text-left"
              >
                {/* VIP Badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring" }}
                  className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-5 py-2 mb-8"
                >
                  <Crown className="w-5 h-5 text-accent" />
                  <span className="text-accent font-semibold">Lash Online</span>
                  <Diamond className="w-4 h-4 text-accent" />
                </motion.div>

                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-background mb-6 leading-tight">
                  Crie seu primeiro{" "}
                  <span className="text-primary">curso online</span>{" "}
                  em apenas 7 dias
                </h1>

                <p className="text-background/80 text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 mb-10">
                  Transforme o que você já sabe em uma nova fonte de renda. Mesmo que você
                  não tenha muitos seguidores, não tenha equipe, nunca tenha criado um
                  curso antes e grave apenas com o celular.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button
                    asChild
                    size="lg"
                    className="bg-primary hover:bg-rose-dark text-primary-foreground rounded-full px-10 py-6 text-lg font-semibold shadow-2xl"
                  >
                    <Link href="https://pay.kiwify.com.br/nyvcBvp">
                      Quero Criar Meu Curso
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </Button>
                </div>

                {/* Trust */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mt-10 text-background/60">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="text-sm">Aprenda em apenas 7 dias</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 fill-accent text-accent" />
                    <span className="text-sm">5.0 de avaliação</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-primary" />
                    <span className="text-sm">Sem experiência anterior necessária</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex justify-center"
              >
                <img
                  src="/images/course-lashonline.jpeg"
                  alt="Lash Online"
                  className="w-full max-w-md h-150  lg:max-w-lg rounded-3xl shadow-2xl border border-white/10 object-cover"
                />
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* What is */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 text-primary font-medium text-sm uppercase tracking-wider mb-4">
                <Sparkles className="w-4 h-4" />
                O que é Lash Online
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Transforme seu conhecimento{" "}
                <span className="text-primary">em renda.</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Você não precisa ser famosa para vender um curso. Você só precisa saber algo que outras pessoas gostariam de aprender.
                </p>
                <p>
                  Se você já ajuda clientes, alunas ou pessoas ao seu redor com um conhecimento que domina, você já tem o que precisa para começar. <span className="text-foreground font-medium">No Lash Online, eu vou te mostrar o passo a passo</span> para transformar seu conhecimento em um curso digital do zero.
                </p>
                <p>
                  Você não vai sair apenas com uma ideia. <span className="text-primary font-semibold">Vai sair com um curso estruturado, gravado, precificado e pronto para ser vendido</span>.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-secondary/50 rounded-3xl p-8 border border-border"
            >
              <h3 className="font-serif text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Check className="w-6 h-6 text-primary" />
                O que você vai aprender
              </h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Sua jornada de{" "}
              <span className="text-primary">7 dias</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Um plano estruturado para levar você da ideia ao curso pronto para vender
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={item.month}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 border border-border relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full -mr-10 -mt-10" />
                <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-3 py-1 rounded-full mb-4">
                  {item.month}
                </span>
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Format */}
      <section className="py-20 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-background mb-4">
              Como funciona na prática
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Video, title: "Módulos em Vídeo", desc: "Conteúdo estruturado e didático em 7 dias de aprendizado prático" },
              { icon: MessageCircle, title: "Comunidade de Suporte", desc: "Acesso a um grupo exclusivo para tirar dúvidas e trocar experiências" },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/20 flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-bold text-background mb-2">{item.title}</h3>
                <p className="text-background/70 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-gradient-to-br from-foreground to-foreground/95 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full -mr-20 -mt-20" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/10 rounded-full -ml-16 -mb-16" />

              <div className="relative z-10">
                <Crown className="w-12 h-12 text-accent mx-auto mb-4" />
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-background mb-2">
                  Lash Online
                </h2>
                <p className="text-background/70 mb-6">Transforme conhecimento em renda em 7 dias</p>

                <div className="mb-8">
                  <div className="text-background/50 text-lg line-through mb-1">
                    De R$127,00
                  </div>
                  <div className="font-serif text-4xl md:text-5xl font-bold text-primary mb-2">
                    Por apenas R$97,00
                  </div>
                  <span className="text-background/70 text-sm">
                    Promoção por tempo limitado! Garanta seu acesso agora.
                  </span>
                </div>

                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-rose-dark text-primary-foreground rounded-full px-10 py-6 text-lg font-semibold w-full sm:w-auto"
                >
                  <Link href="https://pay.kiwify.com.br/sRQMoRH">
                    Quero Garantir Minha Vaga
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
