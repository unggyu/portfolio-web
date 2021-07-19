import { PortfolioProps } from 'portfolio-web'
import {
  Github,
  Header,
  About,
  Projects,
  Skills,
  Experience,
  Footer,
} from 'containers'

const Portfolio = ({ theme }: PortfolioProps) => {
  if (typeof document === 'object') {
    const body = document.querySelector('body')
    if (body) {
      body.setAttribute('data-theme', theme)
    }
  }

  return (
    <div>
      <Github />
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
