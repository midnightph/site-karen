"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Clock, Users, Star, ArrowRight, Check, Sparkles, Award, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"

const courses = [
  {
    id: 1,
    title: "Têndencias",
    description: "Domine todas as têndencias do mercado e empulsione sua carreira como lash designer profissional.",
    price: "R$ 67,00",
    originalPrice: "R$ 99,00",
    duration: "2 horas",
    students: "1.500+",
    rating: 4.9,
    badge: "Mais Vendido",
    type: "Online",
    color: "from-primary/20 to-primary/5",
    image: "./images/course-tendencia.png",
    link: "https://pay.kiwify.com.br/TTOug7M"
  },
  {
    id: 2,
    title: "Master em Durabilidade",
    description: "Método MASTER EM DURABILIDADE, você vai aprender comigo a técnica de durabilidade 30+ para nunca mais precisar fazer manutenção e ainda realizando 3 técnicas com apenas um tipo de fio.",
    price: "R$ 997,00",
    originalPrice: "R$ 1.297,00",
    duration: "12 horas",
    type: "Online",
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
    price: "R$ 197,00",
    originalPrice: "R$ 299,00",
    duration: "6 horas",
    students: "3.200+",
    type: "Online",
    rating: 4.8,
    badge: "Novo",
    color: "from-rose-dark/20 to-rose-dark/5",
    image: "./images/course-produrabilidade.png",
    link: "https://pay.kiwify.com.br/S42tiMp"
  },
  {
    id: 4,
    title: "Lash Pro Class ACABAMENTO",
    description: "Em apenas 4 dias de imersão, você vai dominar o acabamento que encanta olhares e transforma resultados. Aprimore sua técnica, fortaleça sua confiança e se torne uma profissional reconhecida pelo seu toque de perfeição.",
    price: "R$ 97,00",
    originalPrice: "R$ 167,00",
    duration: "6 horas",
    students: "950+",
    rating: 4.8,
    badge: null,
    type: "Online",
    modules: ["Lash lifting", "Brow lamination", "Design de sobrancelhas", "Colorimetria", "Combo perfeito"],
    color: "from-primary/15 to-accent/10",
    image: "./images/course-proacabamento.png",
    link: "https://pay.kiwify.com.br/IqpcVHk",
    spots: 25,
  },
  {
    id: 5,
    title: "Apostila Editável",
    description: "Essa apostila é o que você precisa para ministrar seus cursos presenciais e até on line de forma muito completa e descritiva para suas alunas.",
    price: "R$ 59,90",
    originalPrice: "R$ 99,00",
    duration: "4 horas",
    students: "720+",
    rating: 5.0,
    badge: "Avançado",
    type: "Online",
    modules: ["Volume 8D a 16D", "Técnicas exclusivas", "Wispy Volume", "Híbrido premium", "Correção de erros"],
    color: "from-foreground/10 to-foreground/5",
    link: "https://pay.kiwify.com.br/JzsGDfk",
    image: "./images/course-apostila.png",
    spots: 8,
  },
  {
    id: 6,
    title: "Apostila Editável Curso",
    description: "Essa apostila é o que você precisa para ministrar seus cursos presenciais e até on line de forma muito completa e descritiva para suas alunas.",
    price: "R$ 29,90",
    originalPrice: "R$ 59,90",
    duration: "4 horas",
    students: "700+",
    rating: 4.9,
    badge: null,
    type: "Online",
    modules: ["Gestão financeira", "Contratação de equipe", "Processos operacionais", "Expansão do negócio", "Múltiplas unidades"],
    color: "from-accent/15 to-primary/10",
    link: "https://pay.kiwify.com.br/floU5ZS",
    image: "./images/course-apostila-curso.png",
    spots: 15,
  },
  {
    id: 7,
    title: "MD Fast",
    description: "O MD FAST ensina uma técnica prática para fazer extensões de cílios com alta durabilidade e rapidez, permitindo concluir todo o processo, inclusive remoção, em até 1h40 nos efeitos mais procurados.",
    price: "R$ 597,00",
    originalPrice: "R$ 997,00",
    duration: "48+ horas",
    students: "3000+",
    rating: 5.0,
    badge: "Online",
    type: "Online",
    modules: ["Teoria completa", "Prática em modelo", "Kit profissional incluso", "Certificado presencial", "Networking exclusivo"],
    color: "from-primary/25 to-rose-dark/15",
    link: "https://pay.kiwify.com.br/EHhYBjb",
    image: "./images/course-md-fast.png",
    spots: 6,
  },
  {
    id: 8,
    title: "Código Beauty",
    description: "É a maneira mais fácil e rápida pra você aprender a produzir conteúdo nas redes sociais e começar a faturar através delas.",
    price: "R$ 197,00",
    originalPrice: "R$ 297,00",
    duration: "100+ horas",
    students: "1.100+",
    rating: 4.9,
    badge: "Melhor Custo",
    type: "Online",
    link: "https://pay.kiwify.com.br/GXzney6",
    image: "./images/course-codigo-beauty.png",
    modules: ["Todos os 6 cursos online", "Bônus exclusivos", "Grupo VIP vitalício", "Mentorias em grupo", "Atualizações grátis"],
    color: "from-accent/25 to-primary/15",
    spots: 10,
  },
]

export default function CursosPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-secondary/50 to-background relative overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 text-primary font-medium text-sm uppercase tracking-wider mb-4">
              <BookOpen className="w-4 h-4" />
              Nossos Cursos
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Escolha o curso ideal para sua{" "}
              <span className="text-primary">jornada</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl">
              Do iniciante ao avançado, temos a formação perfeita para transformar você em uma lash designer de sucesso.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                id={`curso-${course.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="group h-full flex flex-col overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-card -mt-6">
                  {/* Badge */}
                  {course.badge && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${course.badge === "Mais Vendido"
                        ? "bg-primary text-primary-foreground"
                        : course.badge === "Premium" || course.badge === "Avançado"
                          ? "bg-foreground text-background"
                          : course.badge === "Novo"
                            ? "bg-accent text-accent-foreground"
                            : course.badge === "Presencial"
                              ? "bg-rose-dark text-white"
                              : "bg-accent text-accent-foreground"
                        }`}>
                        {course.badge}
                      </span>
                    </div>
                  )}

                  {/* Visual Area */}
                  <div className="relative w-full h-full overflow-hidden -mt-6">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-grow p-5 pt-1">
                    {course.type && (
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`text-xs px-2 py-0.5 rounded-full ${course.type === "Presencial"
                          ? "bg-rose-dark/10 text-rose-dark"
                          : "bg-primary/10 text-primary"
                          }`}>
                          {course.type}
                        </span>
                      </div>
                    )}

                    <h3 className="font-serif text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {course.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2 flex-grow">
                      {course.description}
                    </p>

                    {/* Stats */}
                    <div className="flex items-center gap-3 mb-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {course.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        {course.students}
                      </span>
                      <span className="flex items-center gap-1">
                        <Star className="w-3 h-3 fill-accent text-accent" />
                        {course.rating}
                      </span>
                    </div>

                    {/* Price & CTA */}
                    <div className="pt-4 border-t border-border mt-auto">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-muted-foreground text-xs line-through">{course.originalPrice}</span>
                          <span className="block font-serif text-xl font-bold text-primary">{course.price}</span>
                        </div>
                        <Button
                          size="sm"
                          className="bg-primary hover:bg-rose-dark text-primary-foreground rounded-full"
                          onClick={() => window.open(course.link, "_blank")}
                        >
                          Comprar
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              O que você recebe em{" "}
              <span className="text-primary">todos os cursos</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Award, title: "Certificado", desc: "Reconhecido nacionalmente" },
              { icon: BookOpen, title: "Acesso Vitalício", desc: "Estude no seu ritmo" },
              { icon: Users, title: "Suporte", desc: "Grupo exclusivo de alunas" },
              { icon: Sparkles, title: "Atualizações", desc: "Conteúdo sempre atualizado" },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 text-center shadow-sm border border-border"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
              Não sabe qual curso escolher?
            </h2>
            <p className="text-white/90 mb-8">
              Fale com nossa equipe e receba uma recomendação personalizada baseada no seu momento profissional.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-white/90 rounded-full px-8"
            >
              <Link href="https://wa.me/5511999999999?text=Olá! Preciso de ajuda para escolher um curso.">
                Falar com Consultora
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
