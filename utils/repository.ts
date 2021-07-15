import { createConnection } from 'typeorm'
import path from 'path'
import { ResumeData, SharedData, Project as ClientProject } from 'portfolio'
import { ProjectImage } from 'entity'
import sharedDataBase from '../datas/shared_data_base.json'
import resumeDataBase from '../datas/resume_data_base.json'

const connect = () => createConnection({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: 3306,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [
    path.join(__dirname, '../@types/portfolio-server/index.d.ts')
  ],
  synchronize: true
})

export const getSharedData = async (): Promise<SharedData> => {
  try {
    const connection = await connect()
    // new ProjectImage()
    // const titleRepository = connection.getRepository(server.Title)
    // const socialRepository = connection.getRepository(Social)
    // const skillRepository = connection.getRepository(Skill)
    // const titles = await titleRepository.find()
    // const socials = await socialRepository.find()
    // const skills = await skillRepository.find()
    // const sharedData = new SharedData()
    // Object.assign(sharedData, sharedDataBase)
    // sharedData.basic_info.titles = titles.map(titles => titles.name)
    // sharedData.basic_info.social = socials
    // sharedData.skills.icons = skills
    await connection.close()

    return sharedDataBase
  }
  catch (err) {
    console.error(err)
    throw err
  }
}

export const getResumeData = async (): Promise<ResumeData> => {
  // const connection = await connect()
  // const projectRepository = connection.getRepository(ServerProject)
  // const experienceRepository = connection.getRepository(ServerExperience)
  // const projects = await projectRepository.find()
  // const experiences = await experienceRepository.find()
  // const resumeData = new ResumeData()
  // Object.assign(resumeData, resumeDataBase)
  // resumeData.projects = projects.map(project => {
  //   const clientProj = new ClientProject()
  //   Object.assign(clientProj, project)
  //   return clientProj
  // })
  // resumeData.experience = experiences
  // await connection.close()

  return resumeDataBase
}