import { connect } from 'react-redux'
import { AppState, FooterProps } from 'portfolio-web'
import { Footer } from 'components'

export default connect(
  ({ shared_data: { basic_info } }: AppState): FooterProps => {
    return { shared_basic_info: basic_info }
  }
)(Footer)
