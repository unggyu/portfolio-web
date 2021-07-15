import { Connection, createConnection } from 'typeorm'
import { ResumeData, SharedData, Project as ClientProject } from 'portfolio-web'
import { Title, Social, Skill, Project, Experience, RepresentativeSkill, ProjectImage, ProjectTechnology, ExperienceTechnology } from 'entity'

const connect = () => createConnection({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: 3306,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [
    Title,
    Social,
    Skill,
    Project,
    ProjectImage,
    ProjectTechnology,
    Experience,
    ExperienceTechnology,
    RepresentativeSkill
  ],
  synchronize: true
})

export const getSharedData = async (): Promise<SharedData> => {
  let connection: Connection | undefined
  try {
    connection = await connect()
    const titleRepository = connection.getRepository(Title)
    const socialRepository = connection.getRepository(Social)
    const skillRepository = connection.getRepository(Skill)
    const representativeSkillsRepository = connection.getRepository(RepresentativeSkill)
    const titles = await titleRepository.find()
    const socials = await socialRepository.find()
    const skills = await skillRepository.find()
    const representativeSkills = await representativeSkillsRepository.find()
    return {
      basic_info: {
        name: '최웅규',
        titles: titles.map(titles => titles.name),
        social: socials,
        image: "/images/myProfile.png"
      },
      skills: {
        icons: skills
      },
      representative_skills: representativeSkills.map(skill => skill.name)
    }
  } catch (err) {
    console.error(err)
    throw err
  } finally {
    if (connection && connection.isConnected) {
      connection.close()
    }
  }
}

export const getResumeData = async (): Promise<ResumeData> => {
  let connection: Connection | undefined
  try {
    const connection = await connect()
    const projectRepository = connection.getRepository(Project)
    const experienceRepository = connection.getRepository(Experience)
    const projects = await projectRepository.find()
    const experiences = await experienceRepository.find()
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
      projects: projects.map<ClientProject>(project => ({
        title: project.title,
        start_date: project.start_date,
        description: project.description,
        url: project.url,
        images: project.images?.map(image => image.path),
        technologies: project.technologies?.map(tech => ({
          name: tech.name,
          class_name: tech.class_name
        }))
      })),
      experience: experiences
    }
  } catch (err) {
    console.error(err)
    throw err
  } finally {
    if (connection && connection.isConnected) {
      connection.close()
    }
  }
}