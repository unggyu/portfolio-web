import { connect } from 'react-redux'
import { AboutProps, AppState } from 'portfolio-web'
import { About } from 'components'

export default connect((state: AppState): AboutProps => {
  return {
    resumeBasicInfo: state.resume_data.basic_info,
    sharedBasicInfo: state.shared_data.basic_info,
    representative_skills: state.shared_data.representative_skills,
  }
})(About)
