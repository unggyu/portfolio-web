import { ResumeBasicInfo, SharedData } from '../interfaces'

type Props = {
  sharedSkills?: SharedData['skills'],
  resumeBasicInfo?: ResumeBasicInfo
}

const Skills = ({ sharedSkills, resumeBasicInfo }: Props) => {
  let sectionName: string
  let skills: JSX.Element[]

  if (sharedSkills && resumeBasicInfo) {
    sectionName = resumeBasicInfo.section_name.skills
    skills = sharedSkills.icons.map((skills, i) => (
      <li className="list-inline-item mx-3" key={i}>
        <span>
          <div className="text-center skills-title">
            <i className={skills.class} style={{ fontSize: '220%' }}>
              <p
                className="text-center"
                style={{ fontSize: '30%', marginTop: '4px' }}
              >
                {skills.name}
              </p>
            </i>
          </div>
        </span>
      </li>
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

export default Skills