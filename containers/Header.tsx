import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import {
  AppAction,
  AppState,
  HeaderEvents,
  HeaderProps,
  Theme,
} from 'portfolio-web'
import { Header } from 'components'

export default connect(
  ({
    shared_data: { basic_info },
    theme,
    screenHeight: windowHeight,
  }: AppState): HeaderProps => {
    return {
      shared_data: basic_info,
      theme,
      screenHeight: windowHeight,
    }
  },
  (dispatch: Dispatch<AppAction>): HeaderEvents => {
    return {
      onThemeChanged: (theme: Theme) => {
        dispatch({
          type: 'CHANGE_THEME',
          payload: { theme },
        })
      },
    }
  }
)(Header)
