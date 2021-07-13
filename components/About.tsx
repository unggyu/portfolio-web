import { AboutProps } from 'portfolio-web'
import { Polaroid, MacButtons } from './index'

const About = ({ resumeBasicInfo, sharedBasicInfo, representativeSkills }: AboutProps) => {
  const profilePic = '/images/' + sharedBasicInfo.image
  const sectionName = resumeBasicInfo.section_name.about
  const hello = resumeBasicInfo.description_header
  const about = resumeBasicInfo.description

  return (
    <section id="about">
      <div className="col-md-12">
        <h1 style={{ color: 'black' }}>
          <span>{sectionName}</span>
        </h1>
        <div className="row center mx-auto mb-5">
          <div className="col-md-4 mb-5 center">
            <Polaroid
              imagePath={profilePic}
              representativeSkills={representativeSkills}
              style={{ margin: '55px auto' }}
            />
          </div>
          <div className="col-md-8 center">
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
                  <span className="wave">{hello} :) </span>
                  <br />
                  <br />
                  {about}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About