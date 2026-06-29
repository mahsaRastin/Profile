import { useEffect, useState } from "react"
import { navItems, profile, type SectionId } from "@/data/profile"
import { cn } from "@/lib/utils"

type NavigationProps = {
  active: string
  onNavigate: (id: SectionId) => void
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      aria-hidden
    >
      {open ? (
        <>
          <path d="M6 6l12 12" />
          <path d="M18 6L6 18" />
        </>
      ) : (
        <>
          <path d="M4 7h16" />
          <path d="M4 12h16" />
          <path d="M4 17h16" />
        </>
      )}
    </svg>
  )
}

export function Navigation({ active, onNavigate }: NavigationProps) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  const handleNavigate = (id: SectionId) => {
    onNavigate(id)
    setOpen(false)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-8">
      <nav
        className={cn(
          "mx-auto flex max-w-5xl items-center justify-between",
          "rounded-full border border-white/60 bg-white/40 px-4 py-2.5 shadow-sm backdrop-blur-xl sm:px-7 sm:py-3"
        )}
        aria-label="Main navigation"
      >
        <button
          type="button"
          onClick={() => handleNavigate("about")}
          className="group flex shrink-0 items-center gap-2.5 sm:gap-3"
        >
          <img
            src="/mahsa2.jpg"
            alt={profile.fullName}
            className="size-9 rounded-full object-cover ring-2 ring-white/80 transition group-hover:ring-gold/60 sm:size-11"
          />
          <span className="hidden text-sm font-medium tracking-wide text-ink sm:block">
            {profile.name}
          </span>
        </button>

        {/* Desktop links */}
        <ul className="hidden list-none items-center gap-1 md:flex lg:gap-2">
          {navItems.map(({ id, label }) => (
            <li key={id}>
              <button
                type="button"
                onClick={() => handleNavigate(id)}
                className={cn(
                  "rounded-full px-3 py-1.5 text-sm font-medium tracking-wide transition lg:px-4",
                  active === id
                    ? "bg-olive text-cream"
                    : "text-ink-muted hover:bg-white/50 hover:text-ink"
                )}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="flex size-10 items-center justify-center rounded-full text-ink transition hover:bg-white/50 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((prev) => !prev)}
        >
          <MenuIcon open={open} />
        </button>
      </nav>

      {/* Mobile menu panel */}
      <div
        id="mobile-nav"
        className={cn(
          "mx-auto mt-2 max-w-5xl overflow-hidden transition-all duration-300 ease-out md:hidden",
          open ? "max-h-80 opacity-100" : "pointer-events-none max-h-0 opacity-0"
        )}
      >
        <ul className="list-none rounded-3xl border border-white/60 bg-white/90 p-2 shadow-lg backdrop-blur-xl">
          {navItems.map(({ id, label }) => (
            <li key={id}>
              <button
                type="button"
                onClick={() => handleNavigate(id)}
                className={cn(
                  "flex w-full rounded-2xl px-4 py-3.5 text-left text-sm font-medium tracking-wide transition",
                  active === id
                    ? "bg-olive text-cream"
                    : "text-ink-muted hover:bg-cream/80 hover:text-ink"
                )}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
