import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { Projects } from 'components'
import {
  AppAction,
  AppState,
  Project,
  ProjectsEvents,
  ProjectsProps,
} from 'portfolio-web'

export default connect(
  ({ resume_data: { basic_info, projects } }: AppState): ProjectsProps => {
    return {
      resume_projects: projects,
      resume_basic_info: basic_info,
    }
  },
  (dispatch: Dispatch<AppAction>): ProjectsEvents => {
    return {
      onClickProject: (project: Project) => {
        dispatch({
          type: 'OPEN_PROJECT_MODAL',
          payload: { project },
        })
      },
    }
  }
)(Projects)
