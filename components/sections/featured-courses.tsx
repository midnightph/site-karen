"use client"

import { motion } from "framer-motion"
import { ArrowRight, Clock, Users, Star, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"

const featuredCourses = [
  {
    id: 1,
    title: "Têndencias",
    description: "Domine todas as têndencias do mercado e empulsione sua carreira como lash designer profissional.",
    price: "R$ 67",
    originalPrice: "R$ 99",
    duration: "2 horas",
    students: "1.500+",
    rating: 4.9,
    badge: "Mais Vendido",
    color: "from-primary/20 to-primary/5",
    image: "./images/course-tendencia.png",
    link: "https://pay.kiwify.com.br/TTOug7M"
  },
  {
    id: 2,
    title: "Master em Durabilidade",
    description: "Método MASTER EM DURABILIDADE, você vai aprender comigo a técnica de durabilidade 30+ para nunca mais precisar fazer manutenção e ainda realizando 3 técnicas com apenas um tipo de fio.",
    price: "R$ 997",
    originalPrice: "R$ 1.297",
    duration: "25 horas",
    students: "1.800+",
    rating: 4.9,
    badge: "Premium",
    color: "from-accent/20 to-accent/5",
    image: "./images/course-md.png",
    link: "https://pay.kiwify.com.br/8A3sVPu"
  },
  {
    id: 3,
    title: "Lash Pro Class DURABILIDADE",
    description: "Depois do acabamento perfeito, vem a durabilidade. O Lash Pro Class 40+ aprofunda suas técnicas para fios que duram mais, resistem melhor e valorizam seu trabalho em cada aplicação.",
    price: "R$ 197",
    originalPrice: "R$ 299",
    duration: "15 horas",
    students: "3.200+",
    rating: 4.8,
    badge: "Novo",
    color: "from-rose-dark/20 to-rose-dark/5",
    image: "./images/course-produrabilidade.png",
    link: "https://pay.kiwify.com.br/S42tiMp"
  },
]

export function FeaturedCourses() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-primary font-medium text-sm uppercase tracking-wider mb-4">
            <Sparkles className="w-4 h-4" />
            Cursos em Destaque
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Comece sua jornada de{" "}
            <span className="text-primary">transformação</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Escolha o curso ideal para você e dê o primeiro passo rumo à sua independência financeira.
          </p>
        </motion.div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-card">
                {/* Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${course.badge === "Mais Vendido"
                      ? "bg-primary text-primary-foreground"
                      : course.badge === "Premium"
                        ? "bg-accent text-accent-foreground"
                        : "bg-foreground text-background"
                    }`}>
                    {course.badge}
                  </span>
                </div>

                {/* Image/Visual Area */}
                <div className="w-full h-full overflow-hidden bg-muted">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {course.description}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {course.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {course.students}
                    </span>
                    <span className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-accent text-accent" />
                      {course.rating}
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div>
                      <span className="text-muted-foreground text-sm line-through">{course.originalPrice}</span>
                      <span className="block font-serif text-2xl font-bold text-primary">{course.price}</span>
                    </div>
                    <Button
                      asChild
                      className="bg-primary hover:bg-rose-dark text-primary-foreground rounded-full"
                    >
                      <Link href={course.link} target="_blank">
                        Comprar
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-full px-8 border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
          >
            <Link href="/cursos">
              Ver Todos os Cursos
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
