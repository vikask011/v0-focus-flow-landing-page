"use client"

import { useEffect, useRef } from "react"

const features = [
  {
    title: "Smart Task Automation",
    description: "Let AI organize your entire workflow automatically. Prioritize what matters.",
    icon: "⚡",
    gradient: "from-purple-600 to-blue-600",
  },
  {
    title: "AI Habit Coach",
    description: "Personalized habit suggestions based on your unique goals and patterns.",
    icon: "🎯",
    gradient: "from-cyan-600 to-teal-600",
  },
  {
    title: "Intelligent Daily Planner",
    description: "Auto-built schedules dynamically optimized for maximum productivity.",
    icon: "📅",
    gradient: "from-emerald-600 to-cyan-600",
  },
  {
    title: "Insightful Analytics Dashboard",
    description: "Visual insights to track your growth, habits, and productivity trends.",
    icon: "📊",
    gradient: "from-pink-600 to-purple-600",
  },
]

interface FeatureCardProps {
  feature: (typeof features)[number]
  index: number
}

function FeatureCard({ feature, index }: FeatureCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      const rotateX = (y - rect.height / 2) * 0.1
      const rotateY = (x - rect.width / 2) * -0.1

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`
    }

    const handleMouseLeave = () => {
      card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)"
    }

    card.addEventListener("mousemove", handleMouseMove)
    card.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      card.removeEventListener("mousemove", handleMouseMove)
      card.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <div
      ref={cardRef}
      className="group relative"
      style={{
        transitionProperty: "transform",
        transitionDuration: "0.1s",
        transitionTimingFunction: "ease-out",
      }}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-3xl blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-300" />

      {/* Card */}
      <div className="relative glass-effect-strong rounded-3xl p-8 space-y-6 h-full group-hover:glass-effect transition-all duration-300">
        {/* Icon circle */}
        <div
          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-3xl group-hover:animate-glow transition-all duration-300`}
        >
          {feature.icon}
        </div>

        {/* Content */}
        <div className="space-y-3">
          <h3 className="text-xl font-bold text-foreground group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 dark:group-hover:from-purple-300 group-hover:to-cyan-600 dark:group-hover:to-cyan-300 group-hover:bg-clip-text transition-all duration-300">
            {feature.title}
          </h3>
          <p className="text-muted-foreground leading-relaxed text-balance">{feature.description}</p>
        </div>

        {/* Learn more link */}
        <div className="inline-flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-semibold text-sm group-hover:gap-3 transition-all duration-300 cursor-pointer">
          Learn more
          <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
        </div>

        {/* Animated border gradient on hover */}
        <div
          className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            borderRadius: "1.5rem",
            background: `linear-gradient(135deg, rgba(139, 92, 246, 0.5), rgba(6, 182, 212, 0.5))`,
            padding: "2px",
            pointerEvents: "none",
          }}
        />
      </div>
    </div>
  )
}

export default function FeaturesSection() {
  return (
    <section className="relative w-full py-24 lg:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 gradient-mesh opacity-50" />
      <div className="absolute top-20 left-0 w-96 h-96 bg-purple-500 dark:bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 dark:opacity-10 transition-all duration-300" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-cyan-500 dark:bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 dark:opacity-10 transition-all duration-300" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            <span className="gradient-text">Powerful Features</span>
            <br />
            <span className="text-muted-foreground">Designed for Success</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Everything you need to transform your productivity with cutting-edge AI technology
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
