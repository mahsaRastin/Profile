import { useRef } from "react"
import { profile } from "@/data/profile"
import { useScrollProgress } from "@/hooks/useScrolly"

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const scrollProgress = useScrollProgress(sectionRef)

  const textShift = scrollProgress * 48
  const imageScale = 1 - scrollProgress * 0.08
  const imageY = scrollProgress * -60
  const imageOpacity = 1 - scrollProgress * 0.35

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden px-5 pb-20 pt-28 sm:px-8 lg:px-12"
    >
      <div
        className="pointer-events-none absolute -right-24 top-20 h-[480px] w-[480px] rounded-full bg-gold/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-32 bottom-0 h-[360px] w-[360px] rounded-full bg-olive/10 blur-3xl"
        aria-hidden
      />

      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div
          className="order-2 lg:order-1"
          style={{ transform: `translateY(${textShift}px)`, opacity: 1 - scrollProgress * 0.5 }}
        >
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.28em] text-olive-light">
            Portfolio · {profile.location}
          </p>

          <h1 className="font-serif text-[clamp(3rem,9vw,5.5rem)] leading-[0.92] tracking-tight text-ink">
            {profile.name.split(" ")[0]}
            <br />
            <span className="italic text-olive">{profile.name.split(" ")[1]}</span>
          </h1>

          <p className="mt-6 text-lg font-light tracking-wide text-slate sm:text-xl">
            {profile.title}
          </p>

          <p className="mt-6 max-w-md text-base leading-relaxed text-ink-muted">
            {profile.tagline}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={profile.cvUrl}
              download="Mahsa-Rastegh-CV.pdf"
              className="rounded-full bg-ink px-7 py-3 text-sm font-medium tracking-wide text-cream transition hover:bg-olive"
            >
              Download CV
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full border border-ink/15 px-7 py-3 text-sm font-medium tracking-wide text-ink transition hover:border-olive hover:text-olive"
            >
              Get in touch
            </a>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div
            className="relative mx-auto max-w-md lg:max-w-none"
            style={{
              transform: `translateY(${imageY}px) scale(${imageScale})`,
              opacity: imageOpacity,
            }}
          >
            <div
              className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-gold/20 via-transparent to-olive/15"
              aria-hidden
            />
            <img
              src="/mahsa2.jpg"
              alt={`Portrait of ${profile.fullName}`}
              className="relative aspect-[4/5] w-full rounded-[1.75rem] object-cover shadow-2xl shadow-ink/10"
            />
            <div className="absolute -bottom-4 -left-4 rounded-2xl bg-white/70 px-5 py-4 backdrop-blur-md sm:-bottom-6 sm:-left-6">
              <p className="font-serif text-2xl text-ink">{profile.university}</p>
              <p className="text-sm text-ink-muted">
                {profile.degree} · {profile.year}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
