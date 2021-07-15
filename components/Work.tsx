import { VerticalTimelineElement } from 'react-vertical-timeline-component'
import Badge from 'react-bootstrap/Badge'
import { WorkMainTechProps, WorkProps, WorkTechProps } from 'portfolio'

const Work = ({
  experience: {
    start_date,
    end_date,
    title,
    company,
    technologies
  }
}: WorkProps) => (
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date={`${start_date.getFullYear()}.${start_date.getMonth()} - ${end_date.getFullYear()}-${end_date.getMonth()}`}
    iconStyle={{
      background: '#AE944F',
      color: '#fff',
      textAlign: 'center'
    }}
    icon={<i className="devicon-csharp-plain experience-icon align-middle" />}
    iconClassName="d-flex flex-column"
  >
    <div style={{ textAlign: 'left', marginBottom: '4px' }}>
      <MainTech
        technologies={technologies
          .filter(tech => tech.is_main)
          .map(tech => tech.name)
        }
      />
    </div>
    <h3
      className="vertical-timeline-element-title"
      style={{ textAlign: 'left' }}
    >
      {title}
    </h3>
    <h4
      className="vertical-timeline-element-subtitle"
      style={{ textAlign: 'left' }}
    >
      {company}
    </h4>
    <div style={{ textAlign: 'left', marginTop: '15px' }}>
      <Tech technologies={technologies.map(tech => tech.name)} />
    </div>
  </VerticalTimelineElement>
)

const MainTech = ({ technologies }: WorkMainTechProps) => (
  <>
    {technologies.map((technology, i) => (
      <Badge
        pill
        className="main-badge mr-2 mb-2"
        key={i}
      >
        {technology}
      </Badge>
    ))}
  </>
)

const Tech = ({ technologies }: WorkTechProps) => (
  <>
   {technologies.map((technology, i) => (
    <Badge
      pill
      className="experience-badge mr-2 mb-2"
      key={i}
    >
      {technology}
    </Badge>
    ))}
  </>
)

export default Work