"use client"

import { motion } from "framer-motion"
import { Users, Award, Star, BookOpen, Instagram, Heart } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: "5.000+",
    label: "Alunas Formadas",
    description: "Em todo o Brasil",
  },
  {
    icon: Award,
    value: "8",
    label: "Anos de Experiência",
    description: "No mercado de beleza",
  },
  {
    icon: Instagram,
    value: "350K+",
    label: "Seguidores",
    description: "Nas redes sociais",
  },
  {
    icon: BookOpen,
    value: "12",
    label: "Cursos Disponíveis",
    description: "Online e presenciais",
  },
  {
    icon: Star,
    value: "4.9",
    label: "Avaliação Média",
    description: "De satisfação",
  },
  {
    icon: Heart,
    value: "98%",
    label: "Taxa de Aprovação",
    description: "Das alunas",
  },
]

export function StatsSection() {
  return (
    <section className="py-20 bg-foreground text-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-background mb-4">
            Números que falam por si
          </h2>
          <p className="text-background/70 max-w-2xl mx-auto">
            Resultados reais de uma metodologia que transforma vidas todos os dias
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-background/10 flex items-center justify-center group-hover:bg-primary transition-colors"
              >
                <stat.icon className="w-7 h-7 text-primary group-hover:text-background transition-colors" />
              </motion.div>
              <span className="block font-serif text-3xl md:text-4xl font-bold text-background mb-1">
                {stat.value}
              </span>
              <span className="block text-sm font-medium text-background/90 mb-1">
                {stat.label}
              </span>
              <span className="block text-xs text-background/60">
                {stat.description}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
