import { getConnection } from 'typeorm'
import { ResumeData, SharedData } from 'portfolio-web'
import { Title, Social, Skill, Project, Experience, RepresentativeSkill } from '../@types/entity'
import { prepareConnection } from './db'
import sharedProto from '../datas/shared_proto.json'
import resumeProto from '../datas/resume_proto.json'

export const getSharedData = async (): Promise<SharedData> => {
  try {
    await prepareConnection()
    const connection = getConnection()
    const titleRepository = connection.getRepository(Title)
    const socialRepository = connection.getRepository(Social)
    const skillRepository = connection.getRepository(Skill)
    const representativeSkillsRepository = connection.getRepository(RepresentativeSkill)
    const titles = await titleRepository.find()
    const socials = await socialRepository.find({
      order: {
        order: 'ASC'
      }
    })
    const skills = await skillRepository.find()
    const representativeSkills = await representativeSkillsRepository.find()
    return {
      basic_info: {
        ...sharedProto.basic_info,
        titles: titles.map(titles => titles.name),
        social: socials.map(social => ({
          name: social.name,
          url: social.url,
          class_name: social.class_name
        }))
      },
      skills: {
        icons: skills.map(skill => ({
          name: skill.name,
          level: skill.level,
          class_name: skill.class_name
        }))
      },
      representative_skills: representativeSkills.map(skill => skill.name)
    }
  } catch (err) {
    console.error(err)
    throw err
  }
}

export const getResumeData = async (): Promise<ResumeData> => {
  try {
    await prepareConnection()
    const connection = getConnection()
    const projectRepository = connection.getRepository(Project)
    const experienceRepository = connection.getRepository(Experience)
    const projects = await projectRepository
      .createQueryBuilder('projects')
      .leftJoinAndSelect('projects.images', 'images')
      .leftJoinAndSelect('projects.technologies', 'technologies')
      .orderBy({
        'projects.start_date': 'DESC',
        'images.path': 'ASC',
        'technologies.id': 'ASC'
      })
      .getMany()
    const experiences = await experienceRepository.find({
      relations: ['technologies'],
      order: {
        start_date: 'DESC'
      }
    })
    return {
      basic_info: { ...resumeProto.basic_info },
      projects: projects.map(project => ({
        title: project.title,
        start_date: project.start_date,
        description: project.description,
        url: project.url,
        images: project.images?.map(image => image.path) ?? null,
        technologies: project.technologies?.map(tech => ({
          name: tech.name,
          class_name: tech.class_name
        })) ?? null
      })),
      experience: experiences.map(experience => ({
        company: experience.company,
        title: experience.title,
        start_date: `${experience.start_date.getFullYear()}.${(experience.start_date.getMonth() + 1)}`,
        end_date: `${experience.end_date.getFullYear()}.${experience.end_date.getMonth() + 1}`,
        technologies: experience.technologies?.map(tech => ({
          name: tech.name,
          is_main: tech.is_main
        })) ?? null
      }))
    }
  } catch (err) {
    console.error(err)
    throw err
  }
}