import { AboutProps } from 'portfolio-web'
import { Polaroid, MacButtons, NewLineText } from './index'

const About = ({
  resumeBasicInfo: {
    section_name: { about },
    description_header,
    description,
  },
  sharedBasicInfo: { image },
  representative_skills,
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
            representative_skills={representative_skills}
            style={{ margin: 'auto 10%' }}
          />
        </div>
        <div className="col-md-8 col-xl-9 center">
          <div className="col-md-10">
            <div className="card">
              <div className="card-header">
                <MacButtons />
              </div>
              <div className="card-body card-content font-trebuchet text-justify ml-3 mr-3">
                <br />
                <span className="wave">{description_header}</span>
                <br />
                <br />
                <NewLineText text={description} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default About
