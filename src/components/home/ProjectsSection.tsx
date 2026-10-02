import { projects } from '@/data/projects'
import ProjectCard from '@/components/projects/ProjectCard'
import Section from '@/components/layout/Section'

export default function ProjectsSection() {
  const gridProjects = projects.filter((p) => !p.featured)
  const featuredProject = projects.find((p) => p.featured)

  return (
    <Section
      id="work"
      eyebrow="§ 02. SELECTED PROJECTS"
      title="Systems, Compilers & Networking Implementations"
      description="Independent implementations built from RFCs and source code to understand parser algorithms, compiler frontends, protocol lifecycles, and concurrent backend services."
      accent="red"
    >
      <div className="space-y-8">
        {/* Grid Projects (2x2) */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {gridProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Full-width Featured Project */}
        {featuredProject && (
          <ProjectCard
            project={featuredProject}
            className="md:p-9"
          />
        )}
      </div>
    </Section>
  )
}
