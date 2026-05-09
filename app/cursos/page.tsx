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
    title: "Extensão de Cílios do Zero",
    description: "Curso completo para iniciantes que desejam dominar todas as técnicas básicas de extensão de cílios. Aprenda desde a preparação até a aplicação perfeita.",
    price: "R$ 497",
    originalPrice: "R$ 997",
    duration: "20 horas",
    students: "2.500+",
    rating: 4.9,
    badge: "Mais Vendido",
    type: "Online",
    modules: ["Biossegurança", "Anatomia do olho", "Fio a fio clássico", "Mapeamento", "Prática guiada"],
    color: "from-primary/20 to-primary/5",
    spots: 15,
  },
  {
    id: 2,
    title: "Volume Russo Profissional",
    description: "Domine a técnica mais requisitada do mercado. Aprenda a criar leques perfeitos e oferecer um serviço premium para suas clientes.",
    price: "R$ 697",
    originalPrice: "R$ 1.297",
    duration: "25 horas",
    students: "1.800+",
    rating: 4.9,
    badge: "Premium",
    type: "Online",
    modules: ["Técnica de leques", "Volume 2D a 6D", "Mega Volume", "Looks personalizados", "Precificação premium"],
    color: "from-accent/20 to-accent/5",
    spots: 12,
  },
  {
    id: 3,
    title: "Marketing para Lash Designers",
    description: "Estratégias comprovadas para atrair clientes todos os dias pelo Instagram. Aprenda a vender seus serviços e lotar sua agenda.",
    price: "R$ 397",
    originalPrice: "R$ 697",
    duration: "15 horas",
    students: "3.200+",
    rating: 4.8,
    badge: "Novo",
    type: "Online",
    modules: ["Perfil magnético", "Conteúdo que vende", "Stories estratégicos", "Reels virais", "Fechamento de vendas"],
    color: "from-rose-dark/20 to-rose-dark/5",
    spots: 20,
  },
  {
    id: 4,
    title: "Lifting e Design de Sobrancelhas",
    description: "Amplie seus serviços e aumente seu ticket médio oferecendo lifting de cílios e design de sobrancelhas profissional.",
    price: "R$ 347",
    originalPrice: "R$ 597",
    duration: "12 horas",
    students: "950+",
    rating: 4.8,
    badge: null,
    type: "Online",
    modules: ["Lash lifting", "Brow lamination", "Design de sobrancelhas", "Colorimetria", "Combo perfeito"],
    color: "from-primary/15 to-accent/10",
    spots: 25,
  },
  {
    id: 5,
    title: "Mega Volume Avançado",
    description: "Para profissionais que querem se destacar. Técnicas exclusivas de mega volume para criar olhares impactantes e únicos.",
    price: "R$ 897",
    originalPrice: "R$ 1.497",
    duration: "30 horas",
    students: "720+",
    rating: 5.0,
    badge: "Avançado",
    type: "Online",
    modules: ["Volume 8D a 16D", "Técnicas exclusivas", "Wispy Volume", "Híbrido premium", "Correção de erros"],
    color: "from-foreground/10 to-foreground/5",
    spots: 8,
  },
  {
    id: 6,
    title: "Gestão de Estúdio de Beleza",
    description: "Transforme seu negócio em uma empresa lucrativa. Aprenda a gerenciar equipe, finanças e processos do seu estúdio.",
    price: "R$ 597",
    originalPrice: "R$ 997",
    duration: "18 horas",
    students: "450+",
    rating: 4.9,
    badge: null,
    type: "Online",
    modules: ["Gestão financeira", "Contratação de equipe", "Processos operacionais", "Expansão do negócio", "Múltiplas unidades"],
    color: "from-accent/15 to-primary/10",
    spots: 15,
  },
  {
    id: 7,
    title: "Curso Presencial Intensivo",
    description: "Imersão completa de 2 dias em São Paulo. Aprenda na prática com a Isabella e saia certificada e pronta para atender.",
    price: "R$ 1.997",
    originalPrice: "R$ 2.997",
    duration: "2 dias",
    students: "300+",
    rating: 5.0,
    badge: "Presencial",
    type: "Presencial",
    modules: ["Teoria completa", "Prática em modelo", "Kit profissional incluso", "Certificado presencial", "Networking exclusivo"],
    color: "from-primary/25 to-rose-dark/15",
    spots: 6,
  },
  {
    id: 8,
    title: "Combo Completo Lash Artist",
    description: "Pacote com todos os cursos online por um preço especial. Torne-se uma profissional completa e versátil no mercado.",
    price: "R$ 1.497",
    originalPrice: "R$ 3.497",
    duration: "100+ horas",
    students: "1.100+",
    rating: 4.9,
    badge: "Melhor Custo",
    type: "Online",
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
                <Card className="group h-full flex flex-col overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-card">
                  {/* Badge */}
                  {course.badge && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        course.badge === "Mais Vendido" 
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
                  <div className={`relative h-40 bg-gradient-to-br ${course.color}`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-card/80 backdrop-blur flex items-center justify-center">
                        <span className="font-serif text-xl font-bold text-primary">{course.id}</span>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-card to-transparent" />
                    
                    {/* Spots indicator */}
                    <div className="absolute bottom-3 left-3 bg-foreground/90 text-background px-2 py-1 rounded text-xs font-medium">
                      {course.spots} vagas restantes
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-grow p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        course.type === "Presencial" 
                          ? "bg-rose-dark/10 text-rose-dark" 
                          : "bg-primary/10 text-primary"
                      }`}>
                        {course.type}
                      </span>
                    </div>

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

                    {/* Modules Preview */}
                    <div className="space-y-1 mb-4">
                      {course.modules.slice(0, 3).map((module, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Check className="w-3 h-3 text-primary" />
                          {module}
                        </div>
                      ))}
                      {course.modules.length > 3 && (
                        <span className="text-xs text-primary">+{course.modules.length - 3} módulos</span>
                      )}
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
