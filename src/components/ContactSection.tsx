import { profile } from "@/data/profile"
import { useScrollReveal } from "@/hooks/useScrollReveal"
import { cn } from "@/lib/utils"

function formatPhone(phone: string) {
  if (phone.startsWith("+90")) {
    const digits = phone.slice(3)
    if (digits.startsWith("919")) {
      return `+90 ${digits.slice(0, 3)} ${digits.slice(3, 6)} ${digits.slice(6)}`
    }
    return `+90 ${digits.slice(0, 3)} ${digits.slice(3, 6)} ${digits.slice(6, 8)} ${digits.slice(8)}`
  }
  return phone
}

export function ContactSection() {
  const { ref, visible } = useScrollReveal()

  return (
    <section
      id="contact"
      ref={ref}
      className={cn("fade-in-up px-5 py-24 sm:px-8 lg:px-12", visible && "visible")}
    >
      <div className="mx-auto max-w-6xl">
        <div className="rounded-[2.5rem] border border-ink/8 bg-gradient-to-br from-olive/90 to-olive px-8 py-16 text-cream sm:px-14 sm:py-20">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-gold-soft">
            05 — Contact
          </p>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl">Let&apos;s connect</h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-cream/80">
            Open to internship opportunities and collaborations. Recommendation letter available
            upon request from academic supervisor.
          </p>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <a
              href={`mailto:${profile.email}`}
              className="group rounded-2xl border border-cream/15 bg-white/5 p-6 transition hover:bg-white/10"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-gold-soft">Email</p>
              <p className="mt-2 break-all text-lg group-hover:underline">{profile.email}</p>
            </a>

            {profile.phones.map((phone) => (
              <a
                key={phone}
                href={`tel:${phone}`}
                className="group rounded-2xl border border-cream/15 bg-white/5 p-6 transition hover:bg-white/10"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-gold-soft">Phone</p>
                <p className="mt-2 text-lg group-hover:underline">{formatPhone(phone)}</p>
              </a>
            ))}

            <div className="rounded-2xl border border-cream/15 bg-white/5 p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-gold-soft">Location</p>
              <p className="mt-2 text-lg">{profile.location}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="px-5 pb-10 pt-4 text-center sm:px-8">
      <p className="text-sm text-ink-muted">
        © {new Date().getFullYear()} {profile.fullName}
      </p>
    </footer>
  )
}
