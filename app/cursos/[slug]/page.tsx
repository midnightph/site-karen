import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Clock, Users, Star, Sparkles, BookOpen } from "lucide-react"
import Link from "next/link"
import { courses, getCourseBySlug } from "@/lib/courses"

export default async function CourseDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const course = getCourseBySlug(slug)

  if (!course) {
    return notFound()
  }

  const otherCourses = courses.filter((c) => c.slug !== course.slug).slice(0, 4)

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-secondary/50 to-background relative overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              {course.badge && (
                <div className="inline-flex items-center gap-2 mb-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${course.badge === "Mais Vendido"
                        ? "bg-primary text-primary-foreground"
                        : course.badge === "Premium" || course.badge === "Avançado"
                          ? "bg-foreground text-background"
                          : course.badge === "Novo"
                            ? "bg-accent text-accent-foreground"
                            : course.badge === "Presencial"
                              ? "bg-rose-dark text-white"
                              : "bg-accent text-accent-foreground"
                      }`}
                  >
                    {course.badge}
                  </span>
                </div>
              )}

              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
                {course.title}
              </h1>

              <p className="text-muted-foreground text-lg md:text-xl max-w-xl">
                {course.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {course.duration}
                </span>
                <span className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  {course.students}
                </span>
                <span className="flex items-center gap-2">
                  <Star className="w-4 h-4 fill-accent text-accent" />
                  {course.rating}
                </span>
              </div>

              <div className="mt-8 p-5 rounded-2xl bg-card border border-border shadow-sm">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <span className="text-muted-foreground text-xs line-through block">
                      {course.originalPrice}
                    </span>
                    <span className="block font-serif text-3xl font-bold text-primary">
                      {course.price}
                    </span>
                  </div>

                  <Button
                    asChild
                    size="lg"
                    className="bg-primary hover:bg-rose-dark text-primary-foreground rounded-full px-8"
                  >
                    <Link href={course.link} target="_blank" rel="noreferrer">
                      Comprar
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </Button>
                </div>

                {course.spots !== undefined && (
                  <div className="mt-4 text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Vagas:</span> {course.spots}
                  </div>
                )}
              </div>
            </div>

            <div>
              <Card className="overflow-hidden border-0 shadow-lg bg-card">
                <div className="relative w-full h-full">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-60 md:h-[380px] object-cover object-center -mt-6"
                  />
                </div>
                <div className="p-6">
                  {course.type && (
                    <div className="flex items-center gap-2 mb-3">
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full ${course.type === "Presencial"
                            ? "bg-rose-dark/10 text-rose-dark"
                            : "bg-primary/10 text-primary"
                          }`}
                      >
                        {course.type}
                      </span>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-3 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <BookOpen className="w-4 h-4" />
                      <span className="font-medium text-foreground">Acesso</span>
                      <span>vitalício</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Sparkles className="w-4 h-4" />
                      <span className="font-medium text-foreground">Conteúdo</span>
                      <span>atualizado</span>
                    </div>
                  </div>

                  {course.modules?.length ? (
                    <div className="mt-6">
                      <div className="text-sm font-semibold text-foreground mb-3">
                        Você vai aprender:
                      </div>
                      <ul className="grid gap-2">
                        {course.modules.map((m) => (
                          <li
                            key={m}
                            className="text-sm text-muted-foreground bg-secondary/30 rounded-xl px-4 py-2 border border-border"
                          >
                            {m}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Outro cursos */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3">
              Outros cursos
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Continue sua jornada escolhendo o próximo passo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherCourses.map((c) => (
              <Card
                key={c.id}
                className="group h-full flex flex-col overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-card"
              >
                <div className="relative w-full h-full ">
                  <img
                    src={c.image}
                    alt={c.title}
                    className="w-full h-44 object-cover object-top group-hover:scale-105 transition-transform duration-500 -mt-6"
                  />
                </div>

                <div className="flex flex-col flex-grow p-5 pt-4">
                  {c.badge ? (
                    <div className="mb-3">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${c.badge === "Mais Vendido"
                            ? "bg-primary text-primary-foreground"
                            : c.badge === "Premium" || c.badge === "Avançado"
                              ? "bg-foreground text-background"
                              : c.badge === "Novo"
                                ? "bg-accent text-accent-foreground"
                                : c.badge === "Presencial"
                                  ? "bg-rose-dark text-white"
                                  : "bg-accent text-accent-foreground"
                          }`}
                      >
                        {c.badge}
                      </span>
                    </div>
                  ) : null}

                  <h3 className="font-serif text-lg font-bold text-foreground mb-2 line-clamp-2">
                    {c.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3 flex-grow">
                    {c.description}
                  </p>

                  <div className="pt-4 border-t border-border mt-auto">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-muted-foreground text-xs line-through">
                          {c.originalPrice}
                        </span>
                        <span className="block font-serif text-lg font-bold text-primary">
                          {c.price}
                        </span>
                      </div>

                      <Button
                        asChild
                        size="sm"
                        className="bg-primary hover:bg-rose-dark text-primary-foreground rounded-full"
                      >
                        <Link href={`/cursos/${c.slug}`}>Ver detalhes</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}

