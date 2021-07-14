import { HTMLProps } from 'react'

declare module 'portfolio-web' {
  export type User = {
    id: number
    name: string
  }
  export type Technology = {
    class: string
    name: string
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
  export type ProjectData = {
    title: string
    startDate: string
    description: string
    images: string[]
    url: string
    technologies: Technology[]
  }
  export type ExperienceData = {
    company: string
    title: string
    years: string
    mainTech: string[]
    technologies: string[]
  }
  export type ResumeData = {
    basic_info: ResumeBasicInfo
    projects: ProjectData[]
    experience: ExperienceData[]
  }
  export type Social = {
    name: string
    url: string
    class: string
  }
  export type Icon = {
    name: string
    class: string
    level: string
  }
  export type SharedBasicInfo = {
    name: string
    titles: string[]
    social: Social[]
    image: string
  }
  export type SharedData = {
    basic_info: SharedBasicInfo
    skills: {
      icons: Icon[]
    },
    representative_skills: string[]
  }

  export type AboutProps = {
    resumeBasicInfo: ResumeBasicInfo
    sharedBasicInfo: SharedBasicInfo
    representativeSkills: string[]
  }
  export type CircleProps = {
    color: 'red' | 'yellow' | 'green'
  }
  export type ExperienceProps = {
    resumeExperience?: ExperienceData[]
    resumeBasicInfo?: ResumeBasicInfo
  }
  export type FooterProps = {
    sharedBasicInfo?: SharedBasicInfo
  }
  export type GithubProps = {
    username: string
  }
  export type HeaderProps = {
    sharedData?: SharedBasicInfo
  }
  export type PolaroidProps = HTMLProps<HTMLElement> & {
    imagePath: string
    representativeSkills?: string[]
  }
  export type PolaroidIconsProps = {
    representativeSkills: string[]
  }
  export type ProjectProps = {
    project: ProjectData
    onClick(project: ProjectData): void
  }
  export type ProjectDetailsModalProps = {
    show: boolean
    data: ProjectData
    onHide(): void
  }
  export type ProjectDetailsModalTechProps = {
    technologies: Technology[]
  }
  export type ProjectsProps = {
    resumeProjects: ProjectData[]
    resumeBasicInfo: ResumeBasicInfo
  }
  export type ProjectItemsProps = {
    projects: ProjectData[]
    onItemClick(project: ProjectData): void
  }
  export type SkillsProps = {
    sharedSkills?: SharedData['skills'],
    resumeBasicInfo?: ResumeBasicInfo
  }
  export type WorkProps = {
    experience: ExperienceData
  }

  export type IndexPageProps = {
    sharedData: SharedData
    resumeData: ResumeData
    errors?: string
  }
}