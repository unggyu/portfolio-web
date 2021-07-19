import { connect } from 'react-redux'
import { AppState, SkillsProps } from 'portfolio-web'
import { Skills } from 'components'

export default connect(
  ({
    shared_data: { skills },
    resume_data: { basic_info },
  }: AppState): SkillsProps => {
    return {
      shared_skills: skills,
      resume_basic_info: basic_info,
    }
  }
)(Skills)
