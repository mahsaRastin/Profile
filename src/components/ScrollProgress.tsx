import { usePageScrollProgress } from "@/hooks/useScrolly"

export function ScrollProgress() {
  const progress = usePageScrollProgress()

  return (
    <div
      className="fixed left-0 top-0 z-[60] h-[2px] w-full bg-ink/5"
      aria-hidden
    >
      <div
        className="h-full origin-left bg-gradient-to-r from-olive to-gold transition-transform duration-150 ease-out"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  )
}
