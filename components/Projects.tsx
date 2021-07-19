import {
  ProjectItemsProps,
  ProjectsProps,
  Project as ProjectData,
} from 'portfolio-web'
import { Project } from 'components'
import { ProjectDetailsModal } from 'containers'

const Projects = ({
  resume_projects: resumeProjects,
  resume_basic_info: {
    section_name: { projects },
  },
  onClickProject,
}: ProjectsProps) => {
  const sectionName = projects

  return (
    <section id="portfolio">
      <div className="col-md-12">
        <h1 className="section-title" style={{ color: 'black' }}>
          <span>{sectionName}</span>
        </h1>
        <div className="col-md-12 mx-auto">
          <div className="row mx-auto">
            <Items projects={resumeProjects} onItemClick={onClickProject} />
          </div>
        </div>
        <ProjectDetailsModal />
      </div>
    </section>
  )
}

const Items = ({ projects, onItemClick }: ProjectItemsProps) => (
  <>
    {projects.map((project, i) => (
      <Project key={i} project={project} onClick={onItemClick} />
    ))}
  </>
)

export default Projects
