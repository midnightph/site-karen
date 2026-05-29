export type Course = {
  id: number
  slug: string
  title: string
  description: string
  price: string
  originalPrice: string
  duration: string
  students: string
  rating: number
  badge: string | null
  type: string
  color: string
  image: string
  link: string
  modules?: string[]
  spots?: number
}

export const courses: Course[] = [
  {
    id: 1,
    slug: "tendencias",
    title: "Têndencias",
    description:
      "Domine todas as têndencias do mercado e empulsione sua carreira como lash designer profissional.",
    price: "R$ 67,00",
    originalPrice: "R$ 99,00",
    duration: "2 horas",
    students: "1.500+",
    rating: 4.9,
    badge: "Mais Vendido",
    type: "Online",
    color: "from-primary/20 to-primary/5",
    image: "/images/course-tendencia.png",
    link: "https://pay.kiwify.com.br/TTOug7M",
  },
  {
    id: 2,
    slug: "master-em-durabilidade",
    title: "Master em Durabilidade",
    description:
      "Método MASTER EM DURABILIDADE, você vai aprender comigo a técnica de durabilidade 30+ para nunca mais precisar fazer manutenção e ainda realizando 3 técnicas com apenas um tipo de fio.",
    price: "R$ 997,00",
    originalPrice: "R$ 1.297,00",
    duration: "12 horas",
    type: "Online",
    students: "1.800+",
    rating: 4.9,
    badge: "Premium",
    color: "from-accent/20 to-accent/5",
    image: "/images/course-md.png",
    link: "https://pay.kiwify.com.br/8A3sVPu",
  },
  {
    id: 3,
    slug: "lash-pro-class-durabilidade",
    title: "Lash Pro Class DURABILIDADE",
    description:
      "Depois do acabamento perfeito, vem a durabilidade. O Lash Pro Class 40+ aprofunda suas técnicas para fios que duram mais, resistem melhor e valorizam seu trabalho em cada aplicação.",
    price: "R$ 197,00",
    originalPrice: "R$ 299,00",
    duration: "6 horas",
    type: "Online",
    students: "3.200+",
    rating: 4.8,
    badge: "Novo",
    color: "from-rose-dark/20 to-rose-dark/5",
    image: "/images/course-produrabilidade.png",
    link: "https://pay.kiwify.com.br/S42tiMp",
  },
  {
    id: 4,
    slug: "lash-pro-class-acabamento",
    title: "Lash Pro Class ACABAMENTO",
    description:
      "Em apenas 4 dias de imersão, você vai dominar o acabamento que encanta olhares e transforma resultados. Aprimore sua técnica, fortaleça sua confiança e se torne uma profissional reconhecida pelo seu toque de perfeição.",
    price: "R$ 97,00",
    originalPrice: "R$ 167,00",
    duration: "6 horas",
    students: "950+",
    rating: 4.8,
    badge: null,
    type: "Online",
    modules: [
      "Lash lifting",
      "Brow lamination",
      "Design de sobrancelhas",
      "Colorimetria",
      "Combo perfeito",
    ],
    color: "from-primary/15 to-accent/10",
    image: "/images/course-proacabamento.png",
    link: "https://pay.kiwify.com.br/IqpcVHk",
    spots: 25,
  },
  {
    id: 5,
    slug: "apostila-editavel",
    title: "Apostila Editável",
    description:
      "Essa apostila é o que você precisa para ministrar seus cursos presenciais e até on line de forma muito completa e descritiva para suas alunas.",
    price: "R$ 59,90",
    originalPrice: "R$ 99,00",
    duration: "4 horas",
    students: "720+",
    rating: 5.0,
    badge: "Avançado",
    type: "Online",
    modules: [
      "Volume 8D a 16D",
      "Técnicas exclusivas",
      "Wispy Volume",
      "Híbrido premium",
      "Correção de erros",
    ],
    color: "from-foreground/10 to-foreground/5",
    link: "https://pay.kiwify.com.br/JzsGDfk",
    image: "/images/course-apostila.png",
    spots: 8,
  },
  {
    id: 6,
    slug: "apostila-editavel-curso",
    title: "Apostila Editável Curso",
    description:
      "Essa apostila é o que você precisa para ministrar seus cursos presenciais e até on line de forma muito completa e descritiva para suas alunas.",
    price: "R$ 29,90",
    originalPrice: "R$ 59,90",
    duration: "4 horas",
    students: "700+",
    rating: 4.9,
    badge: null,
    type: "Online",
    modules: [
      "Gestão financeira",
      "Contratação de equipe",
      "Processos operacionais",
      "Expansão do negócio",
      "Múltiplas unidades",
    ],
    color: "from-accent/15 to-primary/10",
    link: "https://pay.kiwify.com.br/floU5ZS",
    image: "/images/course-apostila-curso.png",
    spots: 15,
  },
  {
    id: 7,
    slug: "md-fast",
    title: "MD Fast",
    description:
      "O MD FAST ensina uma técnica prática para fazer extensões de cílios com alta durabilidade e rapidez, permitindo concluir todo o processo, inclusive remoção, em até 1h40 nos efeitos mais procurados.",
    price: "R$ 597,00",
    originalPrice: "R$ 997,00",
    duration: "48+ horas",
    students: "3000+",
    rating: 5.0,
    badge: "Online",
    type: "Online",
    modules: [
      "Teoria completa",
      "Prática em modelo",
      "Kit profissional incluso",
      "Certificado presencial",
      "Networking exclusivo",
    ],
    color: "from-primary/25 to-rose-dark/15",
    link: "https://pay.kiwify.com.br/EHhYBjb",
    image: "/images/course-md-fast.png",
    spots: 6,
  },
  {
    id: 8,
    slug: "codigo-beauty",
    title: "Código Beauty",
    description:
      "É a maneira mais fácil e rápida pra você aprender a produzir conteúdo nas redes sociais e começar a faturar através delas.",
    price: "R$ 197,00",
    originalPrice: "R$ 297,00",
    duration: "100+ horas",
    students: "1.100+",
    rating: 4.9,
    badge: "Melhor Custo",
    type: "Online",
    link: "https://pay.kiwify.com.br/GXzney6",
    image: "/images/course-codigo-beauty.png",
    modules: [
      "Todos os 6 cursos online",
      "Bônus exclusivos",
      "Grupo VIP vitalício",
      "Mentorias em grupo",
      "Atualizações grátis",
    ],
    color: "from-accent/25 to-primary/15",
    spots: 10,
  },
]

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug)
}

