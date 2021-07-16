import { createConnection, getConnection } from 'typeorm'
import { Experience, ExperienceTechnology, Project, ProjectImage, ProjectTechnology, RepresentativeSkill, Skill, Social, Title } from '../@types/entity'

let connectionReadyPromise: Promise<void> | null = null

export function prepareConnection() {
  if (!connectionReadyPromise) {
    connectionReadyPromise = (async () => {
      try {
        const staleConnection = getConnection()
        await staleConnection.close()
      } catch (err) {
        // no stale connection to clean up
      }

      await createConnection({
        // connection options go here
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
        synchronize: true,
        migrationsRun: false,
        // logging: true
      })
    })()
  }
  return connectionReadyPromise
}