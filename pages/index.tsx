// client
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { ResumeData, SharedData } from '../interfaces'
import Header from '../components/Header'
import About from '../components/About'
import Github from '../components/Github'

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
        <link rel="stylesheet" href="//cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css" />
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossOrigin="anonymous" />
      </Head>
      <Github username="unggyu" />
      <div>
        <Header sharedData={sharedData.basic_info} />
        <About
          resumeBasicInfo={resumeData.basic_info}
          sharedBasicInfo={sharedData.basic_info} />
      </div>
    </>
  )
}

export default IndexPage
