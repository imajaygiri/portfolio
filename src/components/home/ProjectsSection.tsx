import { projects } from '@/data/projects'
import ProjectCard from '@/components/projects/ProjectCard'
import Section from '@/components/layout/Section'

export default function ProjectsSection() {
  const topProjects = projects.slice(0, 2)
  const featuredProject = projects[2]

  return (
    <Section
      id="work"
      eyebrow="§ 02. SELECTED PROJECTS"
      title="Systems & Networking Implementations"
      description="Independent implementations built from RFCs and first principles to understand connection lifecycles, kernel socket multiplexing, and concurrent service backends."
      accent="red"
    >
      <div className="space-y-8">
        {/* Top 2 Projects in Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {topProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Full-width Featured Card */}
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
