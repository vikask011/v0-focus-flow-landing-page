"use client"

import { useState } from "react"

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for getting started",
    features: ["Basic task management", "Limited AI suggestions", "1 habit tracker", "Core dashboard"],
    cta: "Get Started",
  },
  {
    name: "Pro",
    price: "$29",
    description: "For serious productivity enthusiasts",
    features: [
      "Unlimited task automation",
      "Advanced AI insights",
      "Unlimited habits",
      "Smart scheduling",
      "Priority support",
      "Custom integrations",
      "Team collaboration",
    ],
    cta: "Start Free Trial",
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations",
    features: [
      "Everything in Pro",
      "Advanced security",
      "Dedicated support",
      "Custom integrations",
      "Admin dashboard",
      "SSO & compliance",
      "SLA guarantee",
    ],
    cta: "Contact Sales",
  },
]

interface PricingCardProps {
  plan: (typeof plans)[number]
  index: number
}

function PricingCard({ plan, index }: PricingCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      {isHovered && (
        <>
          <div className="absolute inset-0 rounded-3xl bg-cyan-500/10 blur-xl transition-all duration-300 -z-10" />
          <div className="absolute inset-0 rounded-3xl bg-cyan-500/5 blur-2xl transition-all duration-300 -z-20" />
        </>
      )}

      {/* Card */}
      <div
        className={`relative glass-effect rounded-3xl p-8 space-y-8 h-full transform transition-all duration-300 ${
          isHovered
            ? "border-2 border-cyan-500/60 shadow-2xl shadow-cyan-500/40 scale-105"
            : "border-2 border-transparent shadow-lg"
        }`}
      >
        {/* Header */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-foreground">{plan.name}</h3>
          <p className="text-muted-foreground text-sm">{plan.description}</p>
          <div className="flex items-baseline gap-1">
            <span className="text-5xl font-bold text-foreground">{plan.price}</span>
            {plan.name !== "Enterprise" && <span className="text-muted-foreground">/month</span>}
          </div>
        </div>

        <button
          className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 glass-effect-strong text-muted-foreground border-2 border-border hover:text-foreground`}
        >
          {plan.cta}
        </button>

        {/* Features list */}
        <div className="space-y-4">
          {plan.features.map((feature, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 bg-border">
                <span className="text-xs font-bold text-muted-foreground">✓</span>
              </div>
              <span className="text-muted-foreground text-sm leading-relaxed">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function PricingSection() {
  return (
    <section className="relative w-full py-24 lg:py-32 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            <span className="gradient-text">Simple,</span>
            <br />
            <span className="text-muted-foreground">Transparent Pricing</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Choose the perfect plan for your productivity journey
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6">
          {plans.map((plan, index) => (
            <PricingCard key={index} plan={plan} index={index} />
          ))}
        </div>

        {/* Money-back guarantee */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-effect">
            <span className="text-xl">💰</span>
            <p className="text-muted-foreground">30-day money-back guarantee. No questions asked.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
