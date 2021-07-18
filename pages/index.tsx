// client
import { GetStaticProps, GetStaticPropsContext, NextPage } from 'next'
import Head from 'next/head'
import { IndexPageProps } from 'portfolio-web'
import wrapper from '../store/store'
import {
  Header,
  About,
  Github,
  Projects,
  Skills,
  Experience,
  Footer,
} from '../components'

// server
import {
  getTitles,
  getSocials,
  getSkills,
  getRepresentativeSkills,
  getProjects,
  getExperiences,
} from '../db'
import { connect } from 'react-redux'

export const getStaticProps = wrapper.getStaticProps((store) => () => {
  store.dispatch()
})

const IndexPage: NextPage<IndexPageProps> = ({
  shared_data,
  resume_data,
}: IndexPageProps) => (
  <>
    <Head>
      <title>Unggyu-Choi | Front-end Developer</title>
      <meta charSet="utf-8" />
      <link rel="icon" href="favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <link rel="manifest" href="manifest.json" />
    </Head>
    <Github username="unggyu" />
    <div>
      <Header shared_data={shared_data.basic_info} />
      <About
        resumeBasicInfo={resume_data.basic_info}
        sharedBasicInfo={shared_data.basic_info}
        representative_skills={shared_data.representative_skills}
      />
      <Projects
        resume_projects={resume_data.projects}
        resume_basic_info={resume_data.basic_info}
      />
      <Skills
        shared_skills={shared_data.skills}
        resume_basic_info={resume_data.basic_info}
      />
      <Experience
        resume_experience={resume_data.experience}
        resume_basic_info={resume_data.basic_info}
      />
      <Footer shared_basic_info={shared_data.basic_info} />
    </div>
  </>
)

export default connect()(IndexPage)
