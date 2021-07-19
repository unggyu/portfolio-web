import { Footer } from 'components'
import { AppState, FooterProps } from 'portfolio-web'
import { connect } from 'react-redux'

export default connect(
  ({ shared_data: { basic_info } }: AppState): FooterProps => {
    return { shared_basic_info: basic_info }
  }
)(Footer)
