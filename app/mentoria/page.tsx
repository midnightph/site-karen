"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Crown, Check, Star, Users, Clock, Calendar, Video, MessageCircle, Target, Sparkles, ArrowRight, Diamond } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const benefits = [
  "Encontros semanais ao vivo com a Isabella",
  "Análise completa do seu negócio",
  "Estratégias personalizadas de crescimento",
  "Acesso a todos os cursos online",
  "Grupo VIP exclusivo de mentoradas",
  "Suporte direto via WhatsApp",
  "Templates e materiais exclusivos",
  "Networking com profissionais de elite",
  "Sessões de tira-dúvidas individuais",
  "Certificado de Conclusão Premium",
]

const results = [
  { name: "Luciana", result: "De R$ 3K para R$ 18K/mês", time: "Em 4 meses" },
  { name: "Patricia", result: "Abriu 2 unidades do estúdio", time: "Em 6 meses" },
  { name: "Amanda", result: "Criou sua própria marca", time: "Em 8 meses" },
  { name: "Rafaela", result: "Saiu do CLT para R$ 25K/mês", time: "Em 5 meses" },
]

const timeline = [
  { month: "Mês 1", title: "Fundação", desc: "Diagnóstico completo e plano personalizado" },
  { month: "Mês 2", title: "Estruturação", desc: "Processos, finanças e posicionamento" },
  { month: "Mês 3", title: "Crescimento", desc: "Marketing, vendas e captação de clientes" },
  { month: "Mês 4", title: "Escala", desc: "Equipe, expansão e múltiplas fontes de renda" },
  { month: "Mês 5", title: "Autoridade", desc: "Marca pessoal e reconhecimento no mercado" },
  { month: "Mês 6", title: "Consolidação", desc: "Automatização e liberdade de tempo" },
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* VIP Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
              className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-5 py-2 mb-8"
            >
              <Crown className="w-5 h-5 text-accent" />
              <span className="text-accent font-semibold">Mentoria VIP</span>
              <Diamond className="w-4 h-4 text-accent" />
            </motion.div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-background mb-6 leading-tight">
              Acompanhamento{" "}
              <span className="text-primary">individual</span>{" "}
              direto com a Isabella
            </h1>
            
            <p className="text-background/80 text-lg md:text-xl max-w-2xl mx-auto mb-10">
              6 meses de transformação intensa para você que quer ir além dos cursos e construir um negócio de alto faturamento no mercado de cílios.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-rose-dark text-primary-foreground rounded-full px-10 py-6 text-lg font-semibold shadow-2xl"
              >
                <Link href="https://wa.me/5511999999999?text=Olá! Tenho interesse na Mentoria VIP.">
                  Quero Aplicar
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>

            {/* Trust */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-background/60">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                <span className="text-sm">Apenas 10 vagas por turma</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 fill-accent text-accent" />
                <span className="text-sm">5.0 de avaliação</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" />
                <span className="text-sm">100% das mentoradas com resultados</span>
              </div>
            </div>
          </motion.div>
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
                O que é a Mentoria VIP
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Muito mais que um curso.{" "}
                <span className="text-primary">Uma parceria.</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  A Mentoria VIP é o meu programa mais exclusivo. Durante 6 meses, você terá <span className="text-foreground font-medium">acompanhamento direto comigo</span> para transformar seu negócio de cílios em uma máquina de faturamento.
                </p>
                <p>
                  Diferente dos cursos onde você aprende a técnica, na mentoria eu <span className="text-foreground font-medium">entro no seu negócio</span>, analiso cada detalhe, identifico gargalos e crio estratégias personalizadas para o seu crescimento.
                </p>
                <p>
                  Se você já tem conhecimento técnico mas sente que está estagnada, faturando menos do que deveria, ou quer dar o próximo passo rumo à liberdade financeira de verdade, <span className="text-primary font-semibold">a Mentoria VIP é para você</span>.
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
                O que está incluso
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
              <span className="text-primary">6 meses</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Um plano estruturado para levar você do ponto A ao ponto B com clareza e acompanhamento
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

      {/* Results */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Resultados das{" "}
              <span className="text-primary">mentoradas</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {results.map((result, index) => (
              <motion.div
                key={result.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-6 text-center border border-primary/20"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="font-serif text-2xl font-bold text-primary">
                    {result.name.charAt(0)}
                  </span>
                </div>
                <p className="font-semibold text-foreground mb-1">{result.name}</p>
                <p className="text-primary font-bold mb-1">{result.result}</p>
                <p className="text-xs text-muted-foreground">{result.time}</p>
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

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Video, title: "Encontros Semanais", desc: "Toda semana, um encontro ao vivo de 2h pelo Zoom com todo o grupo" },
              { icon: MessageCircle, title: "Suporte Direto", desc: "Acesso ao meu WhatsApp pessoal para dúvidas e direcionamentos rápidos" },
              { icon: Calendar, title: "Sessões 1:1", desc: "2 sessões individuais por mês para análise detalhada do seu negócio" },
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
                  Mentoria VIP
                </h2>
                <p className="text-background/70 mb-6">6 meses de acompanhamento completo</p>
                
                <div className="mb-8">
                  <span className="text-background/50 text-lg line-through">De R$ 15.000</span>
                  <div className="font-serif text-5xl md:text-6xl font-bold text-primary mt-2">
                    R$ 9.997
                  </div>
                  <span className="text-background/70 text-sm">ou 12x de R$ 997</span>
                </div>

                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-rose-dark text-primary-foreground rounded-full px-10 py-6 text-lg font-semibold w-full sm:w-auto"
                >
                  <Link href="https://wa.me/5511999999999?text=Olá! Quero me candidatar à Mentoria VIP.">
                    Aplicar para Mentoria
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>

                <p className="text-background/50 text-sm mt-6">
                  * Processo seletivo. Vagas limitadas a 10 mentoradas por turma.
                </p>
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
