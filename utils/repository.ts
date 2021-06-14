import { ResumeData, SharedData } from '../interfaces'
import sharedData from '../datas/portfolio_shared_data.json'
import resumeData from '../datas/portfolio_resume_data.json'

export const getSharedData = (): SharedData => {
    return sharedData
}

export const getResumeData = (): ResumeData => {
    return resumeData
}