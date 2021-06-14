import { VerticalTimelineElement } from 'react-vertical-timeline-component'
import Badge from 'react-bootstrap/Badge'
import { ExperienceData } from '../interfaces'

type Props = {
  experience: ExperienceData
}

const Work = ({ experience }: Props) => {
  const technologies = experience.technologies
  const mainTechnologies = experience.mainTech

  const mainTech = mainTechnologies.map((technology, i) => (
    <Badge pill className="main-badge mr-2 mb-2" key={i}>
      {technology}
    </Badge>
  ))

  const tech = technologies.map((technology, i) => (
    <Badge pill className="experience-badge mr-2 mb-2" key={i}>
      {technology}
    </Badge>
  ))

  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date={experience.years}
      iconStyle={{
        background: '#AE944F',
        color: '#fff',
        textAlign: 'center'
      }}
      icon={<i className="devicon-csharp-plain experience-icon align-middle" />}
      iconClassName="d-flex flex-column"
    >
      <div style={{ textAlign: 'left', marginBottom: '4px' }}>
        {mainTech}
      </div>
      <h3
        className="vertical-timeline-element-title"
        style={{ textAlign: 'left' }}
      >
        {experience.title}
      </h3>
      <h4
        className="vertical-timeline-element-subtitle"
        style={{ textAlign: 'left' }}
      >
        {experience.company}
      </h4>
      <div style={{ textAlign: 'left', marginTop: '15px' }}>{tech}</div>
    </VerticalTimelineElement>
  )
}

export default Work