import { SkillProps, SkillsProps } from 'portfolio-web'

const Skills = ({
  shared_skills: { icons },
  resume_basic_info: {
    section_name: { skills },
  },
}: SkillsProps) => (
  <section id="skills">
    <div className="col-md-12">
      <div className="col-md-12">
        <h1 className="section-title">
          <span className="text-white">{skills}</span>
        </h1>
      </div>
      <div className="col-md-12 text-center">
        <ul className="list-inline mx-auto skill-list">
          {icons.map((icon, i) => (
            <Skill key={i} icon={icon} />
          ))}
        </ul>
      </div>
    </div>
  </section>
)

const Skill = ({ icon: { class_name, name } }: SkillProps) => (
  <li className="list-inline-item mx-3">
    <span>
      <div className="text-center skill-tile">
        <i className={`${class_name} skill-icon`}>
          <p className="text-center skill-title">{name}</p>
        </i>
      </div>
    </span>
  </li>
)

export default Skills
