import { useEffect, useRef, useState, type RefObject } from "react"

export function useScrollyStep<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  const [active, setActive] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const update = () => {
      const rect = el.getBoundingClientRect()
      const viewport = window.innerHeight
      const stepCenter = rect.top + rect.height * 0.4
      const focusLine = viewport * 0.42
      const distance = Math.abs(stepCenter - focusLine)
      const range = viewport * 0.38
      const nextProgress = Math.max(0, 1 - distance / range)

      setProgress(nextProgress)
      setActive(rect.top < viewport * 0.78 && rect.bottom > viewport * 0.22)
    }

    update()
    window.addEventListener("scroll", update, { passive: true })
    window.addEventListener("resize", update)
    return () => {
      window.removeEventListener("scroll", update)
      window.removeEventListener("resize", update)
    }
  }, [])

  return { ref, active, progress }
}

export function useScrollProgress(targetRef: RefObject<HTMLElement | null>) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const el = targetRef.current
    if (!el) return

    const update = () => {
      const rect = el.getBoundingClientRect()
      const total = rect.height + window.innerHeight
      const scrolled = window.innerHeight - rect.top
      setProgress(Math.min(1, Math.max(0, scrolled / total)))
    }

    update()
    window.addEventListener("scroll", update, { passive: true })
    window.addEventListener("resize", update)
    return () => {
      window.removeEventListener("scroll", update)
      window.removeEventListener("resize", update)
    }
  }, [targetRef])

  return progress
}

export function usePageScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const update = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      setProgress(scrollable > 0 ? window.scrollY / scrollable : 0)
    }

    update()
    window.addEventListener("scroll", update, { passive: true })
    window.addEventListener("resize", update)
    return () => {
      window.removeEventListener("scroll", update)
      window.removeEventListener("resize", update)
    }
  }, [])

  return progress
}
