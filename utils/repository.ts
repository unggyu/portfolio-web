import { getConnection } from 'typeorm'
import { ResumeData, SharedData } from 'portfolio-web'
import { Title, Social, Skill, Project, Experience, RepresentativeSkill } from '../@types/entity'
import { prepareConnection } from './db'

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
        name: '최웅규',
        titles: titles.map(titles => titles.name),
        social: socials.map(social => ({
          name: social.name,
          url: social.url,
          class_name: social.class_name
        })),
        image: '/images/myProfile.png'
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
      basic_info: {
        description_header: '안녕하세요 👋 :)',
        description: '제 포트폴리오 사이트에 방문에 주셔서 감사합니다. 웹 서비스 개발과 디자인에 관심이 많은 최웅규입니다. 개인 프로젝트로 만들고 싶었던 서비스들을 새로운 기술을 적용하여 만드는 것을 좋아합니다. 2020.01.09부터 IT 산업기능요원으로 편입되었고 현재는 전직 대기 중이며 웹 프론트엔드 개발자로 전향을 준비하고 있습니다. 감사합니다.',
        section_name: {
          about: 'About me',
          projects: 'Projects',
          skills: 'Skills',
          experience: 'Experience'
        }
      },
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