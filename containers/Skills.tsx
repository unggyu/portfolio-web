import { Skills } from 'components'
import { AppState, SkillsProps } from 'portfolio-web'
import { connect } from 'react-redux'

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
