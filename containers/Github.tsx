import { connect } from 'react-redux'
import { Github } from 'components'
import { AppState, GithubProps } from 'portfolio-web'

export default connect(
  ({
    shared_data: {
      basic_info: { github },
    },
  }: AppState): GithubProps => {
    return { username: github }
  }
)(Github)
