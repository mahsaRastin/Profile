import { useEffect, type ReactNode } from "react"
import {
  aboutText,
  courses,
  educationText,
  languages,
  profile,
  projects,
  skillGroups,
} from "@/data/profile"
import { useScrollyStep } from "@/hooks/useScrolly"
import { cn } from "@/lib/utils"

type StoryStepProps = {
  id: string
  index: number
  chapter: string
  title: string
  children: ReactNode
  onActive?: (index: number) => void
}

function StoryStep({ id, index, chapter, title, children, onActive }: StoryStepProps) {
  const { ref, active, progress } = useScrollyStep<HTMLElement>()

  useEffect(() => {
    if (active) onActive?.(index)
  }, [active, index, onActive])

  return (
    <article
      id={id}
      ref={ref}
      data-active={active}
      className="story-step flex min-h-[85vh] items-center py-16 sm:min-h-[90vh] sm:py-20"
      style={{ "--step-progress": progress } as React.CSSProperties}
    >
      <div
        className={cn(
          "story-step-inner w-full transition-[opacity,transform] duration-300 ease-out",
          active ? "translate-y-0 opacity-100" : "translate-y-4 opacity-[0.25]"
        )}
      >
        <p
          className={cn(
            "text-xs font-medium uppercase tracking-[0.28em] transition-colors duration-200",
            active ? "text-gold" : "text-ink-muted/50"
          )}
        >
          {chapter}
        </p>
        <h2
          className={cn(
            "mt-4 font-serif text-4xl leading-tight transition-all duration-300 sm:text-5xl",
            active ? "text-ink" : "text-ink/40"
          )}
        >
          {title}
        </h2>
        <div
          className={cn(
            "mt-8 space-y-6 transition-all duration-300",
            active ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
          )}
        >
          {children}
        </div>
      </div>
    </article>
  )
}

type ScrollyStoryProps = {
  activeStep: number
  onStepChange: (index: number) => void
}

const chapters = [
  { id: "about", label: "About", caption: "Building with intention" },
  { id: "education", label: "Education", caption: "Learning the craft" },
  { id: "projects", label: "Projects", caption: "Creating with code" },
  { id: "skills", label: "Skills", caption: "Tools of the trade" },
] as const

export function ScrollyStory({ activeStep, onStepChange }: ScrollyStoryProps) {
  return (
    <section className="relative px-5 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[auto_1fr] lg:gap-16">
        {/* Chapter rail — no duplicate photo */}
        <div className="hidden lg:block">
          <div className="sticky top-28 flex h-[calc(100vh-8rem)] flex-col justify-center">
            <div className="flex flex-col gap-3 pl-1">
              {chapters.map(({ id, label }, i) => (
                <button
                  key={id}
                  type="button"
                  aria-label={`Go to ${label}`}
                  onClick={() => {
                    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
                  }}
                  className={cn(
                    "rounded-full transition-all duration-200",
                    activeStep === i
                      ? "h-8 w-2 bg-olive"
                      : "size-2 bg-ink/15 hover:bg-ink/30"
                  )}
                />
              ))}
            </div>
            <p className="mt-8 max-w-[10rem] font-serif text-lg italic leading-snug text-ink-muted/70 transition-opacity duration-300">
              {chapters[activeStep]?.caption}
            </p>
          </div>
        </div>

        {/* Scrolling story */}
        <div className="story-track">
          <StoryStep
            id="about"
            index={0}
            chapter="01 — About"
            title="Building with intention"
            onActive={onStepChange}
          >
            <p className="text-lg leading-relaxed text-ink-muted">{aboutText}</p>
            <p className="text-base leading-relaxed text-ink-muted/80">
              Currently seeking an internship where I can apply my academic foundation to
              real-world software challenges.
            </p>
            <div className="grid grid-cols-2 gap-3 pt-2 sm:grid-cols-4">
              {languages.map(({ name, level }, i) => (
                <div
                  key={name}
                  className="story-card rounded-2xl border border-ink/8 bg-white/40 px-4 py-4 backdrop-blur-sm"
                  style={{ transitionDelay: `${40 + i * 30}ms` }}
                >
                  <p className="text-sm font-medium text-ink">{name}</p>
                  <p className="mt-1 text-xs leading-snug text-ink-muted">{level}</p>
                </div>
              ))}
            </div>
          </StoryStep>

          <StoryStep
            id="education"
            index={1}
            chapter="02 — Education"
            title={profile.university}
            onActive={onStepChange}
          >
            <p className="text-lg text-olive">
              {profile.degree} · {profile.year}
            </p>
            <p className="text-base leading-relaxed text-ink-muted">{educationText}</p>
            <div className="story-card rounded-3xl border border-white/60 bg-white/50 p-8 backdrop-blur-sm">
              <h3 className="text-sm font-medium uppercase tracking-[0.2em] text-ink-muted">
                Core courses
              </h3>
              <ul className="mt-5 space-y-3">
                {courses.map((course) => (
                  <li
                    key={course}
                    className="flex items-center gap-3 text-sm text-ink before:block before:h-px before:w-4 before:bg-gold/60"
                  >
                    {course}
                  </li>
                ))}
              </ul>
            </div>
          </StoryStep>

          <StoryStep
            id="projects"
            index={2}
            chapter="03 — Projects"
            title="Selected work"
            onActive={onStepChange}
          >
            <div className="grid gap-5">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="story-card rounded-3xl border border-ink/8 bg-white/45 p-7 backdrop-blur-sm"
                >
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-olive-light">
                    {project.type}
                  </p>
                  <h3 className="mt-2 font-serif text-2xl text-ink sm:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-ink-muted">
                    {project.description}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full bg-cream px-3 py-1 text-xs font-medium text-ink-muted"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <p className="text-sm italic text-ink-muted">
              No formal work experience yet — open to internship opportunities.
            </p>
          </StoryStep>

          <StoryStep
            id="skills"
            index={3}
            chapter="04 — Skills"
            title="Tools & languages"
            onActive={onStepChange}
          >
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-3">
              {skillGroups.map((group) => (
                <div
                  key={group.label}
                  className="story-card rounded-3xl border border-white/60 bg-white/45 p-7 backdrop-blur-sm"
                >
                  <h3 className="text-sm font-medium uppercase tracking-[0.2em] text-olive">
                    {group.label}
                  </h3>
                  <ul className="mt-5 space-y-2">
                    {group.items.map((skill) => (
                      <li key={skill} className="font-serif text-xl text-ink sm:text-2xl">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </StoryStep>
        </div>
      </div>
    </section>
  )
}
