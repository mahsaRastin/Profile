import { useCallback, useState } from "react"
import { Navigation } from "@/components/Navigation"
import { Hero } from "@/components/Hero"
import { ScrollyStory } from "@/components/ScrollyStory"
import { ScrollProgress } from "@/components/ScrollProgress"
import { ContactSection, Footer } from "@/components/ContactSection"
import { navItems, type SectionId } from "@/data/profile"
import { useActiveSection } from "@/hooks/useScrollReveal"

const sectionIds = navItems.map((item) => item.id)

function App() {
  const active = useActiveSection(sectionIds)
  const [storyStep, setStoryStep] = useState(0)

  const scrollTo = (id: SectionId) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  const handleStepChange = useCallback((index: number) => {
    setStoryStep(index)
  }, [])

  return (
    <div className="grain">
      <ScrollProgress />
      <Navigation active={active} onNavigate={scrollTo} />
      <main>
        <Hero />
        <ScrollyStory activeStep={storyStep} onStepChange={handleStepChange} />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
