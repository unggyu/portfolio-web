import { Icon, SkillsProps } from 'portfolio-web'

const Skills = ({ sharedSkills, resumeBasicInfo }: SkillsProps) => {
  let sectionName: string
  let skills: JSX.Element[]

  if (sharedSkills && resumeBasicInfo) {
    sectionName = resumeBasicInfo.section_name.skills
    skills = sharedSkills.icons.map((icon, i) => (
      <Skill key={i} icon={icon} />
    ))
  }

  return (
    <section id="skills">
      <div className="col-md-12">
        <div className="col-md-12">
          <h1 className="section-title">
            <span className="text-white">{sectionName}</span>
          </h1>
        </div>
        <div className="col-md-12 text-center">
          <ul className="list-inline mx-auto skill-icon">{skills}</ul>
        </div>
      </div>
    </section>
  )
}

type SkillProps = {
  icon: Icon
}

const Skill = ({ icon }: SkillProps) => (
  <li className="list-inline-item mx-3">
    <span>
      <div className="text-center skills-tile">
        <i className={icon.class} style={{ fontSize: '220%' }}>
          <p
            className="text-center"
            style={{ fontSize: '30%', marginTop: '4px' }}
          >
            {icon.name}
          </p>
        </i>
      </div>
    </span>
  </li>
)

export default Skills