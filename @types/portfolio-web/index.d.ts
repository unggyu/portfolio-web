import { HTMLProps } from 'react'

declare module 'portfolio-web' {
  export class SharedData {
    basic_info: SharedBasicInfo
    skills: {
      icons: Skill[]
    }
    representative_skills: string[]
  }
  export class SharedBasicInfo {
    name: string
    titles: string[]
    social: Social[]
    image: string
  }
  export class ResumeData {
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
    resume_experience: Experience[]
    resume_basic_info: ResumeBasicInfo
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
  export type HeaderProps = {
    shared_data: SharedBasicInfo
  }
  export type PolaroidProps = HTMLProps<HTMLElement> & {
    image_path: string
    representative_skills?: string[]
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
    shared_skills: SharedData['skills'],
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

  export type IndexPageProps = {
    shared_data: SharedData
    resume_data: ResumeData
    errors?: string
  }
}