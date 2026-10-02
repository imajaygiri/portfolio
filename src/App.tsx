import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/home/Hero'
import AboutSection from '@/components/home/AboutSection'
import ProjectsSection from '@/components/home/ProjectsSection'
import EngineeringSection from '@/components/home/EngineeringSection'
import FocusSection from '@/components/home/FocusSection'
import GithubSection from '@/components/home/GithubSection'
import WritingSection from '@/components/home/WritingSection'
import ContactSection from '@/components/home/ContactSection'
import Footer from '@/components/layout/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <ProjectsSection />
        <EngineeringSection />
        <FocusSection />
        <GithubSection />
        <WritingSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
