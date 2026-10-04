import { StickyNav } from "@/components/helpers/nav"
import HeroSection from "@/components/hero"
import AboutSection from "@/components/about"
import RollingTechStack from "@/components/rolling_tech_stack"
import ProjectsSection from "@/components/project"
import ExperienceSection from "@/components/exp"
import Footer from "@/components/footer"

export default function PortfolioPage() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <StickyNav />
      <main id="main" tabIndex={-1}>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <RollingTechStack />
        <ProjectsSection />
      </main>
      <Footer />
    </>
  )
}
