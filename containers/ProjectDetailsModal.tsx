import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import {
  AppAction,
  AppState,
  ProjectDetailsModalEvents,
  ProjectDetailsModalProps,
} from 'portfolio-web'
import { ProjectDetailsModal } from 'components'

export default connect(
  ({
    isProjectModalOpen,
    selectedProject,
  }: AppState): ProjectDetailsModalProps => {
    return {
      show: isProjectModalOpen,
      data: selectedProject,
    }
  },
  (dispatch: Dispatch<AppAction>): ProjectDetailsModalEvents => {
    return {
      onHide: () => {
        dispatch({
          type: 'CLOSE_PROJECT_MODAL',
          payload: {},
        })
      },
    }
  }
)(ProjectDetailsModal)
