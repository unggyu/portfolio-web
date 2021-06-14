import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component'
import { Work } from './index'
import { ExperienceData, ResumeBasicInfo } from '../interfaces'

type Props = {
  resumeExperience?: ExperienceData[]
  resumeBasicInfo?: ResumeBasicInfo
}

const Experience = ({ resumeExperience, resumeBasicInfo }: Props) => {
  let sectionName: string
  let works: JSX.Element[]
  if (resumeExperience && resumeBasicInfo) {
    sectionName = resumeBasicInfo.section_name.experience
    works = resumeExperience.map((work, i) => (
      <Work key={i} experience={work} />
    ))
  }

  return (
    <section id="resume" className="pb-5">
      <div className="col-md-12 mx-auto">
        <div className="col-md-12">
          <h1 className="section-title" style={{ color: 'black' }}>
            <span className="text-black" style={{ textAlign: 'center' }}>
              {sectionName}
            </span>
          </h1>
        </div>
      </div>
      <div className="col-md-8 mx-auto">
        <VerticalTimeline>
          {works}
          <VerticalTimelineElement
            iconStyle={{
              background: '#AE944F',
              color: '#fff',
              textAlign: 'center'
            }}
            icon={<i className="fas fa-hourglass-start mx-auto experience-icon" />}
          />
        </VerticalTimeline>
      </div>
    </section>
  )
}

export default Experience