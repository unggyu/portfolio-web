// client
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { ResumeData, SharedData } from '../interfaces'
import {
  Header,
  About,
  Github,
  Projects,
  Skills
} from '../components'

// server
import { getResumeData, getSharedData } from '../utils/repository'

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const sharedData = getSharedData()
    const resumeData = getResumeData()
    return {
      props: {
        sharedData,
        resumeData
      }
    }
  } catch (err) {
    return {
      props: {
        errors: err.message
      }
    }
  }
}

type Props = {
  sharedData?: SharedData
  resumeData?: ResumeData
  errors?: string
}

const IndexPage = ({ sharedData, resumeData }: Props) => {

  return (
    <>
      <Head>
        <title>Unggyu-Choi | Front-end Developer</title>
        <meta charSet="utf-8" />
        <link rel="icon" href="favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="manifest" href="manifest.json" />
        <link rel="stylesheet" href="all.css" />
      </Head>
      <Github username="unggyu" />
      <div>
        <Header sharedData={sharedData.basic_info} />
        <About
          resumeBasicInfo={resumeData.basic_info}
          sharedBasicInfo={sharedData.basic_info}
        />
        <Projects
          resumeProjects={resumeData.projects}
          resumeBasicInfo={resumeData.basic_info}
        />
        <Skills
          sharedSkills={sharedData.skills}
          resumeBasicInfo={resumeData.basic_info}
        />
      </div>
    </>
  )
}

export default IndexPage
