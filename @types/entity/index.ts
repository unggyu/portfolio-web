import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm'

declare module 'entity' {
  export abstract class MyEntityBase extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number
  }
  @Entity()
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
    images?: ProjectImage[]
    @OneToMany(type => ProjectTechnology, technology => technology.project)
    technologies?: ProjectTechnology[]
  }
  @Entity()
  export class ProjectImage extends MyEntityBase {
    @Column()
    path: string
    @ManyToOne(type => Project, project => project.images)
    project: Project
  }
  @Entity()
  export class ProjectTechnology extends MyEntityBase {
    @Column()
    class_name: string
    @Column()
    name: string
    @ManyToOne(type => Project, project => project.technologies)
    project: Project
  }
  @Entity()
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
  @Entity()
  export class ExperienceTechnology extends MyEntityBase {
    @Column()
    name: string
    @Column()
    is_main: boolean
    @ManyToOne(type => Experience, experience => experience.technologies)
    experience: Experience
  }
  @Entity()
  export class Social extends MyEntityBase {
    @Column()
    name: string
    @Column()
    url: string
    @Column()
    class_name: string
  }
  @Entity()
  export class Skill extends MyEntityBase {
    @Column()
    name: string
    @Column()
    class_name: string
    @Column()
    level: number
  }
  @Entity()
  export class RepresentativeSkill extends MyEntityBase {
    @Column()
    name: string
  }
  @Entity()
  export class Title extends MyEntityBase {
    @Column()
    name: string
  }
}