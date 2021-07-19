import Image from 'next/image'
import { ProjectProps } from 'portfolio-web'

const Project = ({
  project,
  project: { title, images, start_date: startDate },
  onClick,
}: ProjectProps) => (
  <div
    className="col-sm-12 col-md-6 col-lg-4 mx-auto"
    key={title}
    style={{ cursor: 'pointer' }}
  >
    <span className="portfolio-item d-block">
      <div className="foto" onClick={() => (onClick ? onClick(project) : null)}>
        <div>
          <div className="unset-img">
            {images ? (
              <Image
                className="custom-img"
                src={images[0]}
                alt="Project image"
                layout="fill"
                objectFit="cover"
              />
            ) : null}
          </div>
          <span className="project-date">{startDate}</span>
          <br />
          <p className="project-title-settings mt-3">{title}</p>
        </div>
      </div>
    </span>
  </div>
)

export default Project
