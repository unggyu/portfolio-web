import { AboutProps } from 'portfolio-web'
import Polaroid from './Polaroid'
import MacButtons from './MacButtons'

const About = ({
  resumeBasicInfo: {
    section_name: {
      about
    },
    description_header,
    description
  },
  sharedBasicInfo: {
    image
  },
  representative_skills: representativeSkills
}: AboutProps) => (
  <section id="about">
    <div className="col-md-12">
      <h1 style={{ color: 'black' }}>
        <span>{about}</span>
      </h1>
      <div className="row center mx-auto mb-5">
        <div className="col-md-4 col-xl-3 mb-5 center">
          <Polaroid
            image_path={image}
            representative_skills={representativeSkills}
            style={{ margin: 'auto 10%'}}
          />
        </div>
        <div className="col-md-8 col-xl-9 center">
          <div className="col-md-10">
            <div className="card">
              <div className="card-header">
                <MacButtons />
              </div>
              <div
                className="card-body font-trebuchet text-justify ml-3 mr-3"
                style={{
                  height: 'auto',
                  fontSize: '132%',
                  lineHeight: '200%'
                }}
              >
                <br />
                <span className="wave">{description_header}</span>
                <br />
                <br />
                {description}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default About