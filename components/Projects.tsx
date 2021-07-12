import { useState } from 'react'
import { ProjectData, ProjectsProps } from 'portfolio-web'
import { ProjectDetailsModal, Project } from './index'

const Projects = ({ resumeProjects, resumeBasicInfo }: ProjectsProps) => {
  const [deps, setDeps] = useState<ProjectData>()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const detailsModalShow = (project: ProjectData) => {
    setDeps(project)
    setIsModalOpen(true)
  }

  const detailsModalClose = () => setIsModalOpen(false)

  let sectionName: string;
  let projects: JSX.Element[]
  if (resumeProjects && resumeBasicInfo) {
    sectionName = resumeBasicInfo.section_name.projects
    projects = resumeProjects.map((project, i) => (
      <Project
        key={i}
        project={project}
        onClick={detailsModalShow}
      />
    ))
  }

  return (
    <section id="portfolio">
      <div className="col-md-12">
        <h1 className="section-title" style={{ color: 'black' }}>
          <span>{sectionName}</span>
        </h1>
        <div className="col-md-12 mx-auto">
          <div className="row mx-auto">{projects}</div>
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

export default Projects