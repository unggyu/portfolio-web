import { ProjectProps } from 'portfolio-web'

const Project = ({ project, onClick }: ProjectProps) => (
  <div
    className="col-sm-12 col-md-6 col-lg-4 mx-auto"
    key={project.title}
    style={{ cursor: 'pointer' }}
  >
    <span className="portfolio-item d-block">
      <div className="foto" onClick={() => onClick(project)}>
        <div>
          <img
            src={project.images[0]}
            alt="projectImages"
            height={230}
            style={{
              marginBottom: 0,
              paddingBottom: 0,
              position: 'relative'
            }}
          />
          <span className="project-date">{project.startDate}</span>
          <br />
          <p className="project-title-settings mt-3">
            {project.title}
          </p>
        </div>
      </div>
    </span>
  </div>
)

export default Project