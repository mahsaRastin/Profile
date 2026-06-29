import { navItems, profile, type SectionId } from "@/data/profile"
import { cn } from "@/lib/utils"

type NavigationProps = {
  active: string
  onNavigate: (id: SectionId) => void
}

export function Navigation({ active, onNavigate }: NavigationProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-5 pt-5 sm:px-8">
      <nav
        className={cn(
          "mx-auto flex max-w-5xl items-center justify-between",
          "rounded-full border border-white/60 bg-white/40 px-5 py-3 shadow-sm backdrop-blur-xl sm:px-7"
        )}
        aria-label="Main navigation"
      >
        <button
          type="button"
          onClick={() => onNavigate("about")}
          className="group flex items-center gap-3"
        >
          <img
            src="/mahsa2.jpg"
            alt={profile.fullName}
            className="size-10 rounded-full object-cover ring-2 ring-white/80 transition group-hover:ring-gold/60 sm:size-11"
          />
          <span className="hidden text-sm font-medium tracking-wide text-ink sm:block">
            {profile.name}
          </span>
        </button>

        <ul className="flex list-none items-center gap-1 sm:gap-2">
          {navItems.map(({ id, label }) => (
            <li key={id}>
              <button
                type="button"
                onClick={() => onNavigate(id)}
                className={cn(
                  "rounded-full px-3 py-1.5 text-xs font-medium tracking-wide transition sm:px-4 sm:text-sm",
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
      </nav>
    </header>
  )
}
