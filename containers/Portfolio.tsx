import { Portfolio } from 'components'
import { connect } from 'react-redux'
import { AppState, PortfolioProps } from 'portfolio-web'

export default connect(({ theme }: AppState): PortfolioProps => {
  return { theme }
})(Portfolio)
