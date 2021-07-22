// client
import { NextPage } from 'next'
import Head from 'next/head'
import { Dispatch } from 'redux'
import {
  AppAction,
  IndexPageEvents,
  IndexPageProps,
  IndexPageStaticProps,
} from 'portfolio-web'
import { initialState } from 'store'
import { Portfolio } from 'containers'

// server
import {
  getTitles,
  getSocials,
  getSkills,
  getRepresentativeSkills,
  getProjects,
  getExperiences,
} from 'db'
import { useEffect } from 'react'
import { connect } from 'react-redux'

export async function getStaticProps(): Promise<IndexPageStaticProps> {
  try {
    const titles = await getTitles()
    const socials = await getSocials()
    const skills = await getSkills()
    const representative_skills = await getRepresentativeSkills()
    const projects = await getProjects()
    const experiences = await getExperiences()
    return {
      props: {
        isError: false,
        initialReduxState: {
          ...initialState,
          resume_data: {
            ...initialState.resume_data,
            projects,
            experience: experiences,
          },
          shared_data: {
            basic_info: {
              ...initialState.shared_data.basic_info,
              titles,
              social: socials,
            },
            skills: {
              icons: skills,
            },
            representative_skills,
          },
        },
      },
    }
  } catch (e) {
    return {
      props: { isError: true, errors: e.message },
    }
  }
}

const IndexPage: NextPage<IndexPageProps> = (props: IndexPageProps) => {
  useEffect(() => {
    function handleResize() {
      if (props.onResize) {
        props.onResize(window.innerHeight)
      }
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  if (!props.isError) {
    return (
      <>
        <Head>
          <title>UngGyu-Choi's Portfolio</title>
          <meta charSet="utf-8" />
          <link rel="icon" href="favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <link rel="manifest" href="manifest.json" />
        </Head>
        <Portfolio />
      </>
    )
  } else {
    return <div>{props.errors}</div>
  }
}

export default connect(
  null,
  (dispatch: Dispatch<AppAction>): IndexPageEvents => {
    return {
      onResize: (screenHeight: number) => {
        dispatch({
          type: 'SCREEN_REISZE',
          payload: {
            screenHeight,
          },
        })
      },
    }
  }
)(IndexPage)
