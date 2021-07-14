import { Modal } from 'react-bootstrap'
import AwesomeSlider from 'react-awesome-slider'
import AwesomeSliderStyles from '../styles/light-slider.module.scss'
import AwesomeSliderStyles2 from '../styles/dark-slider.module.scss'
import { ProjectDetailsModalProps, ProjectDetailsModalTechProps } from 'portfolio-web'
import { MacButtons } from './index'

const ProjectDetailsModal = ({
  show,
  onHide,
  data,
  data: {
    images,
    title,
    url,
    description,
    technologies
  }
}: ProjectDetailsModalProps) => (
  <Modal
    show={show}
    onHide={onHide}
    data={data}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
    className="modal-inside"
  >
    <span onClick={onHide} className="modal-close">
      <i className="fas fa-times fa-3x close-icon"></i>
    </span>
    <div className="col-md-12">
      <div className="col-md-10 mx-auto" style={{ paddingBottom: '50px' }}>
        <div className="slider-tab">
          <MacButtons />
        </div>
        <AwesomeSlider
          cssModule={[AwesomeSliderStyles, AwesomeSliderStyles2]}
          animation="scaleOutAnimation"
          className="slider-image"
        >
          {images ? images.map((elem, i) => (
            <div key={i} data-src={elem} />
          )) : null}
        </AwesomeSlider>
      </div>
      <div className="col-md-10 mx-auto">
        <h3 style={{ padding: '5px 5px 0 5px' }}>
          {title}
          {url ? (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="link-href"
            >
              <i
                className="fas fa-external-link-alt"
                style={{ marginLeft: '10px' }}
              />
            </a>
          ) : null}
        </h3>
        <p className="modal-description">{description}</p>
        <div className="col-md-12 text-center">
          <ul className="list-inline mx-auto">
            {technologies ? <Tech technologies={technologies} /> : null}
          </ul>
        </div>
      </div>
    </div>
  </Modal>
)

const Tech = ({ technologies }: ProjectDetailsModalTechProps) => (
  <>
    {technologies.map((icons, i) => (
      <li className="list-inline-item mx-3" key={i}>
        <span>
          <div className="text-center">
            <i className={icons.class} style={{ fontSize: '300%' }}>
              <p className="text-center" style={{ fontSize: '30%' }}>
                {icons.name}
              </p>
            </i>
          </div>
        </span>
      </li>
    ))}
  </>
)

export default ProjectDetailsModal