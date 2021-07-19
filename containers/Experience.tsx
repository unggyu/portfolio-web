import { connect } from 'react-redux'
import { AppState, ExperienceProps } from 'portfolio-web'
import { Experience } from 'components'

export default connect(
  ({ resume_data: { basic_info, experience } }: AppState): ExperienceProps => {
    return {
      resume_basic_info: basic_info,
      resume_experience: experience,
    }
  }
)(Experience)
