"use client"

import { motion } from "framer-motion"
import { Heart, Target, Sparkles, Quote } from "lucide-react"
import Image from "next/image"

export function AboutSection() {
  return (
    <section id="sobre" className="py-24 bg-gradient-to-b from-secondary/30 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative aspect-[8.7/10] mx-auto lg:mx-0 rounded-[2rem] overflow-hidden shadow-2xl">
                <Image
                  src="/images/about-karen.jpg"
                  alt="Karen Santos - Especialista em Extensão de Cílios"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="font-serif text-2xl text-white font-semibold">Karen Santos</p>
                  <p className="text-white/80">Lash Designer & Educadora</p>
                </div>
              </div>

              {/* Experience Badge */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: "spring" }}
                className="absolute -right-4 lg:right-10 top-8 bg-card rounded-2xl p-5 shadow-xl border border-primary/10"
              >
                <div className="text-center">
                  <span className="font-serif text-4xl font-bold text-primary">6+</span>
                  <p className="text-xs text-muted-foreground mt-1">Anos de<br/>Experiência</p>
                </div>
              </motion.div>

              {/* Students Badge */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, type: "spring" }}
                className="absolute -left-4 lg:left-10 bottom-30 bg-primary text-primary-foreground rounded-2xl p-4 shadow-xl"
              >
                <div className="text-center">
                  <span className="font-serif text-4xl font-bold">17K+</span>
                  <p className="text-xs mt-1 opacity-90">Alunas<br/>Formadas</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 text-primary font-medium text-sm uppercase tracking-wider mb-4">
              <Heart className="w-4 h-4 fill-primary" />
              Minha História
            </span>

            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              De sonhadora a{" "}
              <span className="text-primary">referência nacional</span>
            </h2>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                <span className="text-foreground font-medium">Há mais de 6 anos no mercado lash, venho construindo minha trajetória com foco em excelência, durabilidade e constante atualização nas tendências da extensão de cílios.</span> Como palestrante e educadora lash, meu propósito é compartilhar conhecimento de forma prática, moderna e estratégica, ajudando profissionais a elevarem seu nível técnico e se destacarem no mercado.
              </p>

              <p>
                Ao longo dessa jornada, já formei mais de 17 mil alunas através dos meus cursos presenciais e online, ensinando as maiores tendências, retenção, acabamento e posicionamento profissional para <span className="text-foreground font-medium">resultados cada vez mais sofisticados e duradouros</span>.
              </p>

              <p>
                Hoje, após formar <span className="text-primary font-semibold">mais de 5.000 alunas</span> Acredito que o mercado lash está em constante evolução, e por isso busco sempre unir técnica <span className="text-foreground font-medium">inovação e experiência para entregar formações que realmente transformam carreiras e elevam o padrão das profissionais da área</span>.
              </p>

              {/* Quote */}
              <div className="relative bg-secondary/50 rounded-2xl p-6 mt-8 border-l-4 border-primary">
                <Quote className="w-8 h-8 text-primary/30 absolute top-4 right-4" />
                <p className="font-serif text-lg text-foreground italic">
                  &quot;Minha missão é provar que você também pode. Eu vou te dar as ferramentas, o conhecimento e o suporte. A transformação é sua.&quot;
                </p>
                <p className="text-primary font-medium mt-3">— Karen Santos</p>
              </div>
            </div>

            {/* Mission Cards */}
            <div className="grid grid-cols-2 gap-4 mt-10">
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-card rounded-xl p-5 border border-border shadow-sm"
              >
                <Target className="w-8 h-8 text-primary mb-3" />
                <h4 className="font-semibold text-foreground mb-1">Missão</h4>
                <p className="text-sm text-muted-foreground">
                  Transformar vidas através da educação em beleza
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="bg-card rounded-xl p-5 border border-border shadow-sm"
              >
                <Sparkles className="w-8 h-8 text-accent mb-3" />
                <h4 className="font-semibold text-foreground mb-1">Visão</h4>
                <p className="text-sm text-muted-foreground">
                  Ser a maior escola de lash do Brasil
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
