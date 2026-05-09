"use client"

import { motion } from "framer-motion"
import { HelpCircle, Plus, Minus } from "lucide-react"
import { useState } from "react"

const faqs = [
  {
    question: "Preciso ter experiência prévia para fazer os cursos?",
    answer: "Não! Nossos cursos são desenvolvidos para todos os níveis. Se você é iniciante, recomendamos começar pelo curso 'Extensão de Cílios do Zero', que ensina desde os fundamentos básicos até técnicas intermediárias. Se já tem experiência, temos cursos avançados como Volume Russo e Mega Volume.",
  },
  {
    question: "Como funciona o acesso aos cursos online?",
    answer: "Após a confirmação do pagamento, você recebe imediatamente um e-mail com os dados de acesso à nossa plataforma exclusiva. O acesso é vitalício, ou seja, você pode assistir às aulas quantas vezes quiser, para sempre. Além disso, todas as atualizações futuras do curso são liberadas gratuitamente.",
  },
  {
    question: "Os cursos possuem certificado?",
    answer: "Sim! Todos os nossos cursos emitem certificado de conclusão com carga horária especificada. O certificado é digital, pode ser impresso e é válido em todo o território nacional. É um diferencial importante para sua carreira profissional.",
  },
  {
    question: "Quanto tempo tenho para concluir o curso?",
    answer: "Você tem acesso vitalício aos cursos! Isso significa que pode estudar no seu próprio ritmo, sem pressa. Porém, recomendamos que dedique ao menos 1-2 horas por dia para absorver melhor o conteúdo e começar a praticar o quanto antes.",
  },
  {
    question: "Vocês oferecem suporte durante o curso?",
    answer: "Sim! Oferecemos suporte através de grupo exclusivo no WhatsApp/Telegram onde você pode tirar dúvidas diretamente com nossa equipe e com outras alunas. Além disso, a Isabella faz lives semanais para responder perguntas e dar dicas extras.",
  },
  {
    question: "Posso parcelar o pagamento?",
    answer: "Sim! Aceitamos pagamento à vista (com desconto especial) ou parcelado em até 12x no cartão de crédito. Também aceitamos PIX, boleto bancário e outros métodos de pagamento. Para condições especiais, entre em contato pelo WhatsApp.",
  },
  {
    question: "Os cursos presenciais incluem material?",
    answer: "Sim! Nos cursos presenciais, todo o material necessário está incluso: kit de prática com cílios, colas, pinças profissionais, modelo para prática e apostila completa. Você sai pronta para atender suas primeiras clientes.",
  },
  {
    question: "Qual a política de reembolso?",
    answer: "Oferecemos garantia incondicional de 7 dias. Se por qualquer motivo você não ficar satisfeita com o curso, basta solicitar o reembolso dentro desse período e devolvemos 100% do seu investimento, sem burocracia.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 text-primary font-medium text-sm uppercase tracking-wider mb-4">
              <HelpCircle className="w-4 h-4" />
              Dúvidas Frequentes
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Tire suas{" "}
              <span className="text-primary">dúvidas</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Encontre respostas para as perguntas mais comuns sobre nossos cursos
            </p>
          </motion.div>

          {/* FAQ List */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="border border-border rounded-xl overflow-hidden bg-card"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-secondary/50 transition-colors"
                >
                  <span className="font-medium text-foreground pr-4">
                    {faq.question}
                  </span>
                  <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                    openIndex === index ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground"
                  }`}>
                    {openIndex === index ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </span>
                </button>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-5 pt-0 text-muted-foreground leading-relaxed border-t border-border">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12 p-8 bg-secondary/50 rounded-2xl"
          >
            <p className="text-foreground mb-4">
              Ainda tem dúvidas? Fale diretamente com nossa equipe!
            </p>
            <a
              href="https://wa.me/5511999999999?text=Olá! Tenho uma dúvida sobre os cursos."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:bg-rose-dark transition-colors"
            >
              Falar no WhatsApp
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
