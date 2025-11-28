import HeroSection from "@/components/focus-flow/hero-section"
import FeaturesSection from "@/components/focus-flow/features-section"
import TestimonialsSection from "@/components/focus-flow/testimonials-section"
import PricingSection from "@/components/focus-flow/pricing-section"
import Footer from "@/components/focus-flow/footer"
import { ThemeToggle } from "@/components/theme-toggle"

export const metadata = {
  title: "FocusFlow — Your AI Productivity OS",
  description: "Automate tasks, optimize your day, and build habits effortlessly with AI-driven routines.",
  keywords: "AI, Productivity, Task Automation, Habit Tracking, Scheduling",
  openGraph: {
    title: "FocusFlow — Your AI Productivity OS",
    description: "Automate tasks, optimize your day, and build habits effortlessly with AI-driven routines.",
  },
}

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-background via-background to-background dark:from-slate-950 dark:via-purple-950 dark:to-slate-950 overflow-hidden transition-colors duration-300">
      <ThemeToggle />

      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <PricingSection />
      <Footer />
    </main>
  )
}
