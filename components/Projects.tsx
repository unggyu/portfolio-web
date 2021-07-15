import { useState } from 'react'
import { ProjectItemsProps, ProjectsProps, Project } from 'portfolio-web'
import ProjectDetailsModal from './ProjectDetailsModal'
import ProjectComponent from './Project'

const Projects = ({
  resume_projects: resumeProjects,
  resume_basic_info: {
    section_name: { projects }
  }
}: ProjectsProps) => {
  const [deps, setDeps] = useState<Project>(new Project())
  const [isModalOpen, setIsModalOpen] = useState(false)
  const sectionName = projects

  const detailsModalShow = (project: Project) => {
    setDeps(project)
    setIsModalOpen(true)
  }

  const detailsModalClose = () => setIsModalOpen(false)

  return (
    <section id="portfolio">
      <div className="col-md-12">
        <h1 className="section-title" style={{ color: 'black' }}>
          <span>{sectionName}</span>
        </h1>
        <div className="col-md-12 mx-auto">
          <div className="row mx-auto">
            <Items projects={resumeProjects} onItemClick={detailsModalShow} />
          </div>
        </div>
        <ProjectDetailsModal
          show={isModalOpen}
          onHide={detailsModalClose}
          data={deps}
        />
      </div>
    </section>
  )
}

const Items = ({ projects, onItemClick }: ProjectItemsProps) => (
  <>
    {projects.map((project, i) => (
      <ProjectComponent
        key={i}
        project={project}
        onClick={onItemClick}
      />
    ))}
  </>
)

export default Projects