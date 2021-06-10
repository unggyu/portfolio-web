import { useEffect, useState } from 'react'
import { GetStaticProps } from 'next'
import axios from 'axios'
import Header from '../components/Header'
import { ResumeData, SharedData } from '../interfaces'
import { getResumeData, getSharedData } from '../utils/datas'
import About from '../components/About'

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

type Language = {
  name: string,
  iconId: string
}

type Props = {
  sharedData?: SharedData
  resumeData?: ResumeData
  errors?: string
}

const IndexPage = (props: Props) => {
  const [resumeData, setResumeData] = useState<ResumeData>(props.resumeData)
  const [sharedData, setSharedData] = useState<SharedData>(props.sharedData)
  const [primaryLanguage, setPrimaryLanguage] = useState<Language>({
    name: 'en',
    iconId: 'primary-lang-icon'
  })
  const [secondaryLanguage, setSecondaryLanguage] = useState<Language>({
    name: 'pl',
    iconId: 'secondary-lang-icon'
  })

  useEffect(() => {
    console.log('sharedData: ' + sharedData)
    applyPickedLanguage(
      primaryLanguage.name,
      secondaryLanguage.iconId
    )
  })

  const loadResumeFromPath = async (path: string) => {
    try {
      const response = await axios.get<ResumeData>(path);
      setResumeData(response.data)
    } catch (err) {
      alert(err)
    }
  }

  const applyPickedLanguage = (pickedLanguage: string, oppositeLangIconId: string) => {
    swapCurrentlyActiveLanguage(oppositeLangIconId)
    document.documentElement.lang = pickedLanguage
    const resumePath =
      document.documentElement.lang === primaryLanguage.name ?
        'res_primaryLanguage.json' :
        'res_secondaryLanguage.json'
    loadResumeFromPath(resumePath)
  }

  const swapCurrentlyActiveLanguage = (oppositeLangIconId: string) => {
    const pickedLangIconId =
      oppositeLangIconId === primaryLanguage.iconId ?
        secondaryLanguage.iconId :
        primaryLanguage.iconId

    document
      .getElementById(oppositeLangIconId)
      .removeAttribute('filter')

    document
      .getElementById(pickedLangIconId)
      .setAttribute('filter', 'brightness(40%)')
  }

  return (
    <div>
      <Header sharedData={sharedData.basic_info} />
      <div className="col-md-12 mx-auto text-center language">
        <div
          onClick={() => 
            applyPickedLanguage(
              primaryLanguage.name,
              secondaryLanguage.iconId
            )
          }
          style={{ display: 'inline' }}>
          <span
            className="iconify language-icon mr-5"
            data-icon="twemoji-flag-for-united-kingdom"
            data-inline="false"
            id={primaryLanguage.iconId}>
          </span>
        </div>
        <div
          onClick={() =>
            applyPickedLanguage(
              secondaryLanguage.name,
              primaryLanguage.iconId
            )
          }
          style={{ display: 'inline' }}>
          <span
            className="iconify language-icon"
            data-icon="twemoji-flag-for-flag-poland"
            data-inline="false"
            id={secondaryLanguage.iconId}>
          </span>
        </div>
      </div>
      <About
        resumeBasicInfo={resumeData.basic_info}
        sharedBasicInfo={sharedData.basic_info} />
    </div>
  )
}

export default IndexPage
