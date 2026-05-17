"use client"

import { motion } from "framer-motion"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Mariana Silva",
    role: "Lash Designer",
    location: "São Paulo, SP",
    image: "MS",
    rating: 5,
    text: "Antes de conhecer a Karen, eu ganhava R$ 1.500 por mês como auxiliar administrativa. Hoje, após 6 meses do curso, fecho mês com mais de R$ 8.000 só com extensão de cílios. Minha vida mudou completamente!",
    result: "De R$ 1.500 para R$ 8.000/mês",
  },
  {
    id: 2,
    name: "Juliana Santos",
    role: "Proprietária de Estúdio",
    location: "Rio de Janeiro, RJ",
    image: "JS",
    rating: 5,
    text: "A metodologia da Karen é diferente de tudo que eu já tinha visto. Ela ensina não só a técnica, mas também como empreender. Abri meu próprio estúdio e hoje emprego mais 3 profissionais.",
    result: "Abriu seu próprio estúdio",
  },
  {
    id: 3,
    name: "Camila Oliveira",
    role: "Lash Designer Premium",
    location: "Belo Horizonte, MG",
    image: "CO",
    rating: 5,
    text: "Eu já tinha feito outros cursos de cílios, mas nenhum me deu confiança para cobrar bem. Com a Karen, aprendi Volume Russo em nível avançado e dobrei o valor dos meus atendimentos.",
    result: "Dobrou o valor dos atendimentos",
  },
  {
    id: 4,
    name: "Ana Paula Costa",
    role: "Lash Artist",
    location: "Curitiba, PR",
    image: "AC",
    rating: 5,
    text: "Saí do zero absoluto. Nunca tinha feito nada relacionado a beleza e a Karen me transformou em uma profissional completa. O suporte dela é incrível, sempre presente no grupo.",
    result: "Do zero à profissional",
  },
  {
    id: 5,
    name: "Fernanda Lima",
    role: "Especialista em Mega Volume",
    location: "Salvador, BA",
    image: "FL",
    rating: 5,
    text: "O curso de Marketing para Lash Designers foi um divisor de águas. Aprendi a usar o Instagram de forma estratégica e hoje tenho lista de espera de 2 semanas. Gratidão eterna!",
    result: "Lista de espera de 2 semanas",
  },
  {
    id: 6,
    name: "Beatriz Almeida",
    role: "Empreendedora",
    location: "Brasília, DF",
    image: "BA",
    rating: 5,
    text: "A mentoria VIP mudou minha mentalidade. Hoje penso como empresária, não como funcionária. Minha renda triplicou e finalmente conquistei minha independência financeira.",
    result: "Renda triplicada",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  // Get visible testimonials (3 on desktop, 1 on mobile)
  const getVisibleTestimonials = () => {
    const visible = []
    for (let i = 0; i < 3; i++) {
      visible.push(testimonials[(currentIndex + i) % testimonials.length])
    }
    return visible
  }

  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/30 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-primary font-medium text-sm uppercase tracking-wider mb-4">
            <Star className="w-4 h-4 fill-primary" />
            Depoimentos
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Histórias de{" "}
            <span className="text-primary">transformação</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Veja o que nossas alunas têm a dizer sobre a experiência de aprender com a Karen
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {getVisibleTestimonials().map((testimonial, index) => (
              <motion.div
                key={`${testimonial.id}-${currentIndex}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 shadow-lg border border-border relative"
              >
                <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10" />
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-foreground/80 text-sm leading-relaxed mb-6">
                  &quot;{testimonial.text}&quot;
                </p>

                {/* Result Badge */}
                <div className="bg-primary/10 rounded-lg px-3 py-2 mb-6">
                  <span className="text-primary text-sm font-semibold">
                    ✨ {testimonial.result}
                  </span>
                </div>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-rose-dark flex items-center justify-center text-primary-foreground font-semibold">
                    {testimonial.image}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                    <p className="text-xs text-primary">{testimonial.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Single Card */}
          <div className="md:hidden">
            <motion.div
              key={testimonials[currentIndex].id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-card rounded-2xl p-6 shadow-lg border border-border relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground/80 leading-relaxed mb-6">
                &quot;{testimonials[currentIndex].text}&quot;
              </p>

              {/* Result Badge */}
              <div className="bg-primary/10 rounded-lg px-3 py-2 mb-6 inline-block">
                <span className="text-primary text-sm font-semibold">
                  ✨ {testimonials[currentIndex].result}
                </span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-rose-dark flex items-center justify-center text-primary-foreground font-semibold">
                  {testimonials[currentIndex].image}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonials[currentIndex].name}</p>
                  <p className="text-xs text-muted-foreground">{testimonials[currentIndex].role}</p>
                  <p className="text-xs text-primary">{testimonials[currentIndex].location}</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex 
                      ? "bg-primary w-6" 
                      : "bg-primary/30 hover:bg-primary/50"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
