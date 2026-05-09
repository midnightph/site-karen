import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { HeroSection } from "@/components/sections/hero"
import { FeaturedCourses } from "@/components/sections/featured-courses"
import { AboutSection } from "@/components/sections/about"
import { StatsSection } from "@/components/sections/stats"
import { TestimonialsSection } from "@/components/sections/testimonials"
import { FAQSection } from "@/components/sections/faq"
import { CTASection } from "@/components/sections/cta"
import { InstagramFeed } from "@/components/sections/instagram-feed"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturedCourses />
      <AboutSection />
      <StatsSection />
      <TestimonialsSection />
      <InstagramFeed />
      <FAQSection />
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
