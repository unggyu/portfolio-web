import { Projects } from 'components'
import { AppState, ProjectsProps } from 'portfolio-web'
import { connect } from 'react-redux'

export default connect(
  ({ resume_data: { basic_info, projects } }: AppState): ProjectsProps => {
    return {
      resume_projects: projects,
      resume_basic_info: basic_info,
    }
  }
)(Projects)
