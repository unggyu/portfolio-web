import { PortfolioProps } from 'portfolio-web'
import { Github } from 'components'
import { Header, About, Projects, Skills, Experience, Footer } from 'containers'

const Portfolio = ({ theme }: PortfolioProps) => {
  if (typeof document === 'object') {
    const body = document.querySelector('body')
    if (body) {
      body.setAttribute('data-theme', theme)
    }
  }

  return (
    <div>
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
