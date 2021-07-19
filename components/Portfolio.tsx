import { PortfolioProps } from 'portfolio-web'
import { Github } from 'components'
import { Header, About, Projects, Skills, Experience, Footer } from 'containers'

const Portfolio = ({ theme }: PortfolioProps) => {
  return (
    <div data-theme={theme}>
      <Github username="unggyu" />
      <Header />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Footer />
    </div>
  )
}

export default Portfolio
