import { HTMLProps } from 'react'
import { AppProps } from 'next/app'
import { AnyAction, Store } from 'redux'

declare module 'portfolio-web' {
  export type Theme = 'light' | 'dark'
  export type MyAppProps = AppProps
  export type MyPageProps =
    | {
        isError: false
        initialReduxState: AppState
      }
    | {
        isError: true
        errors: string
      }
  export type AppState = {
    resume_data: ResumeData
    shared_data: SharedData
    theme: Theme
    screenHeight: number
  }
  export type IndexPageStaticProps = {
    props: MyPageProps
  }
  export type IndexPageEvents = {
    onResize?(width: number)
  }
  export type IndexPageProps = MyPageProps & IndexPageEvents
  export type SharedData = {
    basic_info: SharedBasicInfo
    skills: {
      icons: Skill[]
    }
    representative_skills: string[]
  }
  export type SharedBasicInfo = {
    name: string
    titles: string[]
    social: Social[]
    image: string
  }
  export type ResumeData = {
    basic_info: ResumeBasicInfo
    projects: Project[]
    experience: Experience[]
  }
  export type ResumeBasicInfo = {
    description_header: string
    description: string
    section_name: {
      about: string
      projects: string
      skills: string
      experience: string
    }
  }
  export class Project {
    title: string
    start_date: number
    description: string
    url: string
    images?: string[]
    technologies?: ProjectTechnology[]
  }
  export class ProjectTechnology {
    name: string
    class_name: string
  }
  export class Experience {
    company: string
    title: string
    start_date: string
    end_date: string
    technologies: ExperienceTechnology[]
  }
  export class ExperienceTechnology {
    name: string
    is_main: boolean
  }
  export class Social {
    name: string
    url: string
    class_name: string
  }
  export class Skill {
    name: string
    level: number
    class_name: string
  }
  export type AboutProps = {
    resumeBasicInfo: ResumeBasicInfo
    sharedBasicInfo: SharedBasicInfo
    representative_skills: string[]
  }
  export type CircleProps = {
    color: 'red' | 'yellow' | 'green'
  }
  export type ExperienceProps = {
    resume_basic_info: ResumeBasicInfo
    resume_experience: Experience[]
  }
  export type FooterProps = {
    shared_basic_info: SharedBasicInfo
  }
  export type FooterSocialsProps = {
    socials: Social[]
  }
  export type GithubProps = {
    username: string
  }
  export type HeaderEvents = {
    onThemeChanged?(theme: Theme): void
  }
  export type HeaderProps = HeaderEvents & {
    shared_data: SharedBasicInfo
    theme: Theme
    screenHeight: number
  }
  export type HeaderState = {
    theme: Theme
  }
  export type PolaroidProps = HTMLProps<HTMLElement> & {
    image_path: string
    representative_skills?: string[]
  }
  export type PortfolioProps = {
    theme: Theme
  }
  export type PolaroidIconsProps = {
    representative_skills: string[]
  }
  export type ProjectProps = {
    project: Project
    onClick(project: Project): void
  }
  export type ProjectDetailsModalProps = {
    show: boolean
    data: Project
    onHide(): void
  }
  export type ProjectDetailsModalTechProps = {
    technologies: ProjectTechnology[]
  }
  export type ProjectsProps = {
    resume_projects: Project[]
    resume_basic_info: ResumeBasicInfo
  }
  export type ProjectItemsProps = {
    projects: Project[]
    onItemClick(project: Project): void
  }
  export type SkillsProps = {
    shared_skills: SharedData['skills']
    resume_basic_info: ResumeBasicInfo
  }
  export type SkillProps = {
    icon: Skill
  }
  export type WorkProps = {
    experience: Experience
  }
  export type WorkMainTechProps = {
    technologies: string[]
  }
  export type WorkTechProps = {
    technologies: string[]
  }
  export type AppAction =
    | {
        type: 'app/ADD_PROJECTS'
        payload: {
          projects: Project[]
        }
      }
    | {
        type: 'app/ADD_EXPERIENCES'
        payload: {
          experiences: Experience[]
        }
      }
    | {
        type: 'app/ADD_TITLES'
        payload: {
          titles: string[]
        }
      }
    | {
        type: 'app/ADD_SOCIALS'
        payload: {
          socials: Social[]
        }
      }
    | {
        type: 'app/ADD_SKILLS'
        payload: {
          skills: Skill[]
        }
      }
    | {
        type: 'app/ADD_REPRESENTATIVE_SKILLS'
        payload: {
          skills: string[]
        }
      }
    | {
        type: 'SCREEN_REISZE'
        payload: {
          screenHeight: number
        }
      }
    | {
        type: 'CHANGE_THEME'
        payload: {
          theme: Theme
        }
      }
}
