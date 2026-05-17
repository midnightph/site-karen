import type { Metadata } from 'next'
import { Playfair_Display, Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
})

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Karen Beauty Academy | Cursos de Extensao de Cilios',
  description: 'Aprenda extensao de cilios com a maior referencia do Brasil. Cursos online e presenciais que ja transformaram a vida de mais de 17.500 alunas. Comece sua jornada de sucesso hoje!',
  keywords: 'extensao de cilios, curso de cilios, lash designer, volume russo, fio a fio, curso de beleza, Karen Beauty Academy',
  authors: [{ name: 'Karen Beauty Academy' }],
  openGraph: {
    title: 'Karen Beauty Academy',
    description: 'Transforme sua paixao por beleza em uma carreira de sucesso',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${montserrat.variable}`} data-scroll-behavior="smooth" style={{ backgroundColor: "var(--background)" }}>
      <body style={{ fontFamily: "var(--font-sans)", WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale" }}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
