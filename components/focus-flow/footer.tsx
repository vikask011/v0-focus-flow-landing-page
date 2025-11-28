"use client"

export default function Footer() {
  return (
    <footer className="relative w-full border-t border-border bg-gradient-to-b from-card to-background dark:from-slate-900 dark:to-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-bold gradient-text">FocusFlow</div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Your AI productivity OS. Automate, optimize, and achieve more.
            </p>
            {/* Social icons */}
            <div className="flex gap-3 pt-4">
              {["Twitter", "LinkedIn", "GitHub", "Discord"].map((social, i) => (
                <button
                  key={i}
                  className="w-10 h-10 rounded-lg glass-effect hover:glass-effect-strong hover-glow transition-all duration-300 flex items-center justify-center text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 dark:hover:text-cyan-300"
                  aria-label={social}
                >
                  {["𝕏", "in", "<>", "◇"][i]}
                </button>
              ))}
            </div>
          </div>

          {/* Product links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground text-sm uppercase tracking-wide">Product</h4>
            <ul className="space-y-3">
              {["Features", "Pricing", "Security", "Enterprise"].map((link, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground text-sm uppercase tracking-wide">Company</h4>
            <ul className="space-y-3">
              {["About", "Blog", "Careers", "Contact"].map((link, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground text-sm uppercase tracking-wide">Legal</h4>
            <ul className="space-y-3">
              {["Privacy", "Terms", "Cookies", "License"].map((link, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          {/* Footer bottom */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-muted-foreground text-sm text-center md:text-left">
              © 2025 FocusFlow. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-muted-foreground text-sm">Made with</span>
              <span className="text-cyan-600 dark:text-cyan-400 text-lg animate-pulse">💜</span>
              <span className="text-muted-foreground text-sm">by the FocusFlow team</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
