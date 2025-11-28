"use client"

import { useEffect, useState } from "react"

export default function DashboardPreview() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div
      className={`relative transform transition-all duration-1000 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
    >
      {/* Floating glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-3xl blur-2xl opacity-20 dark:opacity-20 animate-pulse-glow" />

      {/* Main dashboard card */}
      <div className="relative glass-effect-strong rounded-3xl p-6 lg:p-8 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-foreground font-bold text-lg">Today's Dashboard</h3>
            <p className="text-muted-foreground text-sm">AI Optimized</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-cyan-500 animate-glow" />
        </div>

        {/* Task list with AI suggestions */}
        <div className="space-y-3">
          <h4 className="text-muted-foreground text-sm font-semibold">Smart Tasks</h4>
          <div className="space-y-2">
            {[
              { title: "Review Q1 strategy", ai: "AI suggests morning" },
              { title: "Team standup", ai: "AI scheduled 10 AM" },
              { title: "Client presentation", ai: "AI prioritized high" },
            ].map((task, i) => (
              <div
                key={i}
                className="p-3 rounded-xl glass-effect hover:glass-effect-strong transition-all flex items-center gap-3"
              >
                <div className="w-4 h-4 rounded border-2 border-cyan-600 dark:border-cyan-500" />
                <div className="flex-1">
                  <p className="text-foreground text-sm font-medium">{task.title}</p>
                  <p className="text-muted-foreground text-xs">{task.ai}</p>
                </div>
                <div className="text-cyan-600 dark:text-cyan-400 text-xs font-semibold">✓</div>
              </div>
            ))}
          </div>
        </div>

        {/* Habit tracker ring */}
        <div className="space-y-3">
          <h4 className="text-muted-foreground text-sm font-semibold">Habit Streak</h4>
          <div className="flex items-center gap-4">
            <div className="relative w-20 h-20">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(148, 163, 184, 0.2)" strokeWidth="4" />
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="url(#gradient1)"
                  strokeWidth="4"
                  strokeDasharray="141.3"
                  strokeDashoffset="35.3"
                  strokeLinecap="round"
                  className="transition-all duration-1000"
                />
                <defs>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-lg font-bold text-foreground">75%</span>
              </div>
            </div>
            <div>
              <p className="text-cyan-600 dark:text-cyan-300 font-semibold">12 day streak</p>
              <p className="text-muted-foreground text-sm">Keep it up!</p>
            </div>
          </div>
        </div>

        {/* Schedule timeline */}
        <div className="space-y-3">
          <h4 className="text-muted-foreground text-sm font-semibold">Today's Schedule</h4>
          <div className="space-y-2">
            {[
              { time: "9:00 AM", event: "Deep Work", duration: "2h" },
              { time: "11:30 AM", event: "Meeting", duration: "30m" },
              { time: "1:00 PM", event: "Lunch Break", duration: "1h" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="text-xs font-mono text-cyan-600 dark:text-cyan-400 min-w-16">{item.time}</div>
                <div className="flex-1 px-3 py-2 rounded-lg bg-card border border-border">
                  <p className="text-foreground text-sm font-medium">{item.event}</p>
                  <p className="text-muted-foreground text-xs">{item.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Productivity score */}
        <div className="p-4 rounded-xl bg-gradient-to-r from-purple-600/10 to-cyan-600/10 border border-purple-600/20 dark:from-purple-500/10 dark:to-cyan-500/10 dark:border-purple-500/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-muted-foreground text-xs font-semibold uppercase">Productivity Score</p>
              <p className="text-foreground text-2xl font-bold">92/100</p>
            </div>
            <div className="text-right">
              <p className="text-emerald-600 dark:text-emerald-400 text-sm font-semibold">↑ 12% this week</p>
              <p className="text-muted-foreground text-xs">Excellent progress</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
