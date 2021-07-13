import { useState } from 'react'
import { ProjectData, ProjectItemsProps, ProjectsProps } from 'portfolio-web'
import { ProjectDetailsModal, Project } from './index'

const Projects = ({
  resumeProjects,
  resumeBasicInfo: {
    section_name: { projects }
  }
}: ProjectsProps) => {
  const [deps, setDeps] = useState<ProjectData>({
    description: '',
    images: [],
    startDate: '',
    technologies: [],
    title: '',
    url: ''
  })
  const [isModalOpen, setIsModalOpen] = useState(false)
  const sectionName = projects

  const detailsModalShow = (project: ProjectData) => {
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
            {<Items projects={resumeProjects} onItemClick={detailsModalShow} />}
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
      <Project
        key={i}
        project={project}
        onClick={onItemClick}
      />
    ))}
  </>
)

export default Projects