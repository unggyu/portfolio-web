import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm'

export abstract class MyEntityBase extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number
}
@Entity({ name: 'projects' })
export class Project extends MyEntityBase {
  @Column()
  title: string
  @Column()
  start_date: number
  @Column()
  description: string
  @Column()
  url: string
  @OneToMany(type => ProjectImage, image => image.project)
  images: ProjectImage[]
  @OneToMany(type => ProjectTechnology, technology => technology.project)
  technologies: ProjectTechnology[]
}
@Entity({ name: 'project_images' })
export class ProjectImage extends MyEntityBase {
  @Column()
  path: string
  @ManyToOne(type => Project, project => project.images)
  project: Project
}
@Entity({ name: 'project_technologies' })
export class ProjectTechnology extends MyEntityBase {
  @Column()
  class_name: string
  @Column()
  name: string
  @ManyToOne(type => Project, project => project.technologies)
  project: Project
}
@Entity({ name: 'experiences' })
export class Experience extends MyEntityBase {
  @Column()
  company: string
  @Column()
  title: string
  @Column()
  start_date: Date
  @Column()
  end_date: Date
  @OneToMany(type => ExperienceTechnology, technology => technology.experience)
  technologies: ExperienceTechnology[]
}
@Entity({ name: 'experience_technologies' })
export class ExperienceTechnology extends MyEntityBase {
  @Column()
  name: string
  @Column()
  is_main: boolean
  @ManyToOne(type => Experience, experience => experience.technologies)
  experience: Experience
}
@Entity({ name: 'socials' })
export class Social extends MyEntityBase {
  @Column()
  name: string
  @Column()
  url: string
  @Column()
  class_name: string
  @Column()
  order: number
}
@Entity({ name: 'skills' })
export class Skill extends MyEntityBase {
  @Column()
  name: string
  @Column()
  class_name: string
  @Column()
  level: number
}
@Entity({ name: 'representative_skills' })
export class RepresentativeSkill extends MyEntityBase {
  @Column()
  name: string
}
@Entity({ name: 'titles' })
export class Title {
  @PrimaryGeneratedColumn()
  id: number
  @Column()
  name: string
}