import { RepresentativeSkill } from 'db'
import { AppAction, Project, Skill, Social } from 'portfolio-web'
import { Dispatch } from 'redux'

export function addProjects(projects: Project[]) {
  return function (dispatch: Dispatch) {
    const action: AppAction = {
      type: 'app/ADD_PROJECTS',
      payload: {
        projects,
      },
    }
    return dispatch(action)
  }
}

export function addExperiences(experiences: Experience[]) {
  return function (dispatch: Dispatch) {
    const action: AppAction = {
      type: 'app/ADD_EXPERIENCES',
      payload: {
        experiences,
      },
    }
    return dispatch(action)
  }
}

export function addTitles(titles: string[]) {
  return function (dispatch: Dispatch) {
    const action: AppAction = {
      type: 'app/ADD_TITLES',
      payload: {
        titles,
      },
    }
    return dispatch(action)
  }
}

export function addSocials(socials: Social[]) {
  return function (dispatch: Dispatch) {
    const action: AppAction = {
      type: 'app/APP_SOCIALS',
      payload: {
        socials,
      },
    }
    return dispatch(action)
  }
}

export function addSkills(skills: Skill[]) {
  return function (dispatch: Dispatch) {
    const action: AppAction = {
      type: 'app/APP_SKILLS',
      payload: {
        skills,
      },
    }
    return dispatch(action)
  }
}

export function addRepresentativeSkills(
  representativeSkills: RepresentativeSkill[]
) {
  return function (dispatch: Dispatch) {
    const action: AppAction = {
      type: 'app/APP_REPRESENTATIVE_SKILLS',
      payload: {
        representativeSkills,
      },
    }
    return dispatch(action)
  }
}
