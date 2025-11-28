"use client"

import { useEffect, useRef } from "react"
import DashboardPreview from "./dashboard-preview"

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Particle effect
    const container = containerRef.current
    if (!container) return

    const createParticle = () => {
      const particle = document.createElement("div")
      const size = Math.random() * 3 + 1
      const x = Math.random() * window.innerWidth
      const y = Math.random() * window.innerHeight

      particle.style.cssText = `
        position: fixed;
        width: ${size}px;
        height: ${size}px;
        background: rgba(139, 92, 246, ${Math.random() * 0.5 + 0.1});
        border-radius: 50%;
        pointer-events: none;
        top: ${y}px;
        left: ${x}px;
        --tx: ${(Math.random() - 0.5) * 200}px;
        --ty: ${(Math.random() - 0.5) * 200}px;
        animation: particles 8s ease-out forwards;
      `
      container.appendChild(particle)
      setTimeout(() => particle.remove(), 8000)
    }

    const interval = setInterval(createParticle, 200)
    return () => clearInterval(interval)
  }, [])

  return (
    <div ref={containerRef} className="relative w-full min-h-screen overflow-hidden">
      {/* Background gradient mesh */}
      <div className="absolute inset-0 gradient-mesh" />

      {/* Animated blurred circles */}
      <div className="absolute top-0 left-10 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-20 dark:bg-purple-500 animate-float" />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-20 dark:bg-cyan-500 animate-float transition-all duration-300"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute top-1/2 left-1/2 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-5 dark:opacity-10 dark:bg-purple-900 animate-float transition-all duration-300"
        style={{ animationDelay: "4s" }}
      />

      {/* Light streaks */}
      <div className="absolute top-0 left-1/4 w-1 h-96 bg-gradient-to-b from-cyan-400 to-transparent opacity-20 dark:opacity-30 blur-xl" />
      <div className="absolute bottom-0 right-1/3 w-1 h-96 bg-gradient-to-t from-purple-400 to-transparent opacity-20 dark:opacity-30 blur-xl" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex">
              <div className="px-4 py-2 rounded-full glass-effect hover-glow cursor-pointer">
                <span className="text-sm font-medium bg-gradient-to-r from-purple-600 dark:from-purple-300 to-cyan-600 dark:to-cyan-300 bg-clip-text text-transparent">
                  ✨ The Future of Productivity is Here
                </span>
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-balance">
              <span className="gradient-text">Your Personal AI</span>
              <br />
              <span className="text-foreground">Productivity OS</span>
            </h1>

            {/* Subtext */}
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-lg text-balance">
              Automate tasks, optimize your day, and build habits effortlessly with AI-driven routines. Work smarter,
              not harder.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {/* Glowing neon pill button */}
              <button className="px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 dark:hover:from-purple-500 dark:hover:to-cyan-400 transition-all duration-300 animate-glow shadow-lg hover:shadow-2xl transform hover:scale-105">
                Get Started Free
              </button>

              {/* Glass border button */}
              <button className="px-8 py-4 rounded-full font-semibold text-cyan-600 dark:text-cyan-300 glass-effect-strong hover-glow transition-all duration-300 border-2 border-cyan-500 dark:border-cyan-500 hover:border-cyan-400 dark:hover:border-cyan-400 flex items-center gap-2">
                <span>▶</span> Watch Demo
              </button>
            </div>

            {/* Trust badges */}
            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-2xl font-bold text-foreground">50K+</div>
                <div className="text-sm text-muted-foreground">Users Worldwide</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <div className="text-2xl font-bold text-foreground">98%</div>
                <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
              </div>
            </div>
          </div>

          {/* Right - Dashboard preview */}
          <DashboardPreview />
        </div>
      </div>
    </div>
  )
}
