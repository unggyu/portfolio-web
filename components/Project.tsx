import Image from 'next/image'
import { ProjectProps } from 'portfolio-web'

const Project = ({
  project,
  project: {
    title,
    images,
    startDate
  },
  onClick
}: ProjectProps) => (
  <div
    className="col-sm-12 col-md-6 col-lg-4 mx-auto"
    key={title}
    style={{ cursor: 'pointer' }}
  >
    <span className="portfolio-item d-block">
      <div className="foto" onClick={() => onClick(project)}>
        <div>
          <div className="unset-img">
            <Image
              className="custom-img"
              src={images[0]}
              alt="Project image"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <span className="project-date">{startDate}</span>
          <br />
          <p className="project-title-settings mt-3">
            {title}
          </p>
        </div>
      </div>
    </span>
  </div>
)

export default Project