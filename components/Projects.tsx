import { useState } from 'react'
import { ResumeBasicInfo, ProjectData } from '../interfaces'
import ProjectDetailsModal from './ProjectDetailsModal'

type Props = {
  resumeProjects?: ProjectData[]
  resumeBasicInfo?: ResumeBasicInfo
}

const Projects = ({ resumeProjects, resumeBasicInfo }: Props) => {
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
    projects = resumeProjects.map((project) => (
      <div
        className="col-sm-12 col-md-6 col-lg-4"
        key={project.title}
        style={{ cursor: 'pointer' }}
      >
        <span className="portfolio-item d-block">
          <div className="foto" onClick={() => detailsModalShow(project)}>
            <div>
              <img
                src={project.images[0]}
                alt="projectImages"
                height={230}
                style={{ marginBottom: 0, paddingBottom: 0, position: 'relative' }}
              />
              <span className="project-data">{project.startDate}</span>
              <br />
              <p className="project-title-settings mt-3">
                {project.title}
              </p>
            </div>
          </div>
        </span>
      </div>
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