"use client"

import { useEffect, useRef, useState } from "react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Product Manager at TechCorp",
    content: "FocusFlow transformed how I manage my tasks. My productivity increased by 40% in just two weeks.",
    avatar: "👩‍💼",
  },
  {
    name: "Marcus Johnson",
    role: "Founder & CEO",
    content: "The AI insights are incredible. I finally understand my productivity patterns and how to optimize them.",
    avatar: "👨‍💼",
  },
  {
    name: "Emma Rodriguez",
    role: "Creative Director",
    content: "Managing habits and tasks was overwhelming before. Now it's seamless and actually fun!",
    avatar: "👩‍🎨",
  },
  {
    name: "David Kim",
    role: "Software Engineer",
    content: "Best investment for my productivity. The automation alone saves me 10+ hours per week.",
    avatar: "👨‍💻",
  },
]

export default function TestimonialsSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let scrollPosition = 0
    let animationId: NodeJS.Timeout

    const autoScroll = () => {
      scrollPosition += 1
      if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
        scrollPosition = 0
        container.scrollLeft = 0
      } else {
        container.scrollLeft = scrollPosition
      }
      animationId = setTimeout(autoScroll, 50)
    }

    const startScroll = () => {
      animationId = setTimeout(autoScroll, 50)
    }

    const stopScroll = () => {
      clearTimeout(animationId)
    }

    container.addEventListener("mouseenter", stopScroll)
    container.addEventListener("mouseleave", startScroll)

    startScroll()

    return () => {
      clearTimeout(animationId)
      container.removeEventListener("mouseenter", stopScroll)
      container.removeEventListener("mouseleave", startScroll)
    }
  }, [])

  return (
    <section className="relative w-full py-24 lg:py-32 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            <span className="gradient-text">Loved by</span>
            <br />
            <span className="text-muted-foreground">Thousands Worldwide</span>
          </h2>
        </div>

        {/* Testimonials carousel */}
        <div
          ref={containerRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
          style={{ scrollBehavior: "smooth" }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full sm:w-96 snap-start relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {hoveredIndex === index && (
                <>
                  <div className="absolute inset-0 rounded-3xl bg-purple-500/15 blur-xl transition-all duration-300 -z-10" />
                  <div className="absolute inset-0 rounded-3xl bg-purple-500/8 blur-2xl transition-all duration-300 -z-20" />
                </>
              )}

              <div
                className={`h-full glass-effect rounded-3xl p-8 space-y-6 border-2 transition-all duration-300 transform ${
                  hoveredIndex === index
                    ? "border-purple-500/70 shadow-2xl shadow-purple-500/50 scale-105"
                    : "border-border shadow-lg"
                }`}
              >
                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-500">
                      ★
                    </span>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-lg text-foreground leading-relaxed text-balance">"{testimonial.content}"</p>

                {/* Avatar and name */}
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <div className="w-12 h-12 rounded-full bg-border flex items-center justify-center text-2xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll hint for mobile */}
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">← Swipe to see more testimonials →</p>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  )
}
