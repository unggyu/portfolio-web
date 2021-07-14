import { SkillProps, SkillsProps } from 'portfolio-web'

const Skills = ({
  sharedSkills: {
    icons
  },
  resumeBasicInfo: {
    section_name: {
      skills
    }
  }
}: SkillsProps) => (
  <section id="skills">
    <div className="col-md-12">
      <div className="col-md-12">
        <h1 className="section-title">
          <span className="text-white">{skills}</span>
        </h1>
      </div>
      <div className="col-md-12 text-center">
        <ul className="list-inline mx-auto skill-icon">
          {icons.map((icon, i) =>
            <Skill key={i} icon={icon} />
          )}
        </ul>
      </div>
    </div>
  </section>
)

const Skill = ({
  icon: {
    className,
    name
  }
}: SkillProps) => (
  <li className="list-inline-item mx-3">
    <span>
      <div className="text-center skills-tile">
        <i className={className} style={{ fontSize: '220%' }}>
          <p
            className="text-center"
            style={{ fontSize: '30%', marginTop: '4px' }}
          >
            {name}
          </p>
        </i>
      </div>
    </span>
  </li>
)

export default Skills