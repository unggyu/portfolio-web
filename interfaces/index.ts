// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

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
  }
}
