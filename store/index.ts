import { useMemo } from 'react'
import { applyMiddleware, createStore, Store } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { AppAction, AppState } from 'portfolio-web'

let store: Store<AppState, AppAction> | undefined

export const initialState: AppState = {
  resume_data: {
    basic_info: {
      description_header: '안녕하세요 👋 ༼ つ ◕_◕ ༽つ',
      description: `
        제 포트폴리오 사이트에 방문에 주셔서 감사합니다.\r\n
        저의 주 사용 언어는 C#이며 이전 직장에서 WPF, UWP 프로그램 개발을 주로 하였습니다.\r\n
        개인 프로젝트를 진행할 때는 주로 TypeScript + React + Redux 스킬을 사용합니다.\r\n
        2020.01.09.부터 IT 산업기능요원으로 편입되었고 현재는 전직 대기 중입니다.\r\n
        감사합니다.`,
      section_name: {
        about: 'About me',
        projects: 'Projects',
        skills: 'Skills',
        experience: 'Experience',
      },
    },
    projects: [],
    experience: [],
  },
  shared_data: {
    basic_info: {
      name: '최웅규',
      image: '/images/myProfile.png',
      github: 'unggyu',
      titles: [],
      social: [],
    },
    skills: {
      icons: [],
    },
    representative_skills: [],
  },
  theme: 'dark',
  screenHeight: typeof window === 'object' ? window.innerWidth : 0,
  isProjectModalOpen: false,
  selectedProject: {
    title: '',
    start_date: 0,
    description: '',
    url: '',
  },
}

export function reducer(
  state: AppState = initialState,
  action: AppAction
): AppState {
  switch (action.type) {
    case 'app/ADD_PROJECTS':
      return {
        ...state,
        resume_data: {
          ...state.resume_data,
          projects: action.payload.projects,
        },
      }
    case 'app/ADD_EXPERIENCES':
      return {
        ...state,
        resume_data: {
          ...state.resume_data,
          experience: action.payload.experiences,
        },
        shared_data: state.shared_data,
      }
    case 'app/ADD_TITLES':
      return {
        ...state,
        shared_data: {
          ...state.shared_data,
          basic_info: {
            ...state.shared_data.basic_info,
            titles: action.payload.titles,
          },
        },
      }
    case 'app/ADD_SOCIALS':
      return {
        ...state,
        shared_data: {
          ...state.shared_data,
          basic_info: {
            ...state.shared_data.basic_info,
            social: action.payload.socials,
          },
        },
      }
    case 'app/ADD_SKILLS':
      return {
        ...state,
        shared_data: {
          ...state.shared_data,
          skills: {
            icons: action.payload.skills,
          },
        },
      }
    case 'app/ADD_REPRESENTATIVE_SKILLS':
      return {
        ...state,
        shared_data: {
          ...state.shared_data,
          representative_skills: action.payload.skills,
        },
      }
    case 'SCREEN_REISZE':
      return {
        ...state,
        screenHeight: action.payload.screenHeight,
      }
    case 'CHANGE_THEME':
      return {
        ...state,
        theme: action.payload.theme,
      }
    case 'OPEN_PROJECT_MODAL':
      return {
        ...state,
        isProjectModalOpen: true,
        selectedProject: action.payload.project,
      }
    case 'CLOSE_PROJECT_MODAL': {
      return {
        ...state,
        isProjectModalOpen: false,
      }
    }
    default:
      return state
  }
}

function initStore(preloadedState = initialState) {
  return createStore(
    reducer,
    preloadedState,
    composeWithDevTools(applyMiddleware())
  )
}

export function initializeStore(preloadedState?: AppState) {
  let _store = store ?? initStore(preloadedState)

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    })
    // Reset the current store
    store = undefined
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store
  // Create the store once in the client
  if (!store) store = _store

  return _store
}

export function useStore(initialState: AppState) {
  const store = useMemo(() => initializeStore(initialState), [initialState])
  return store
}
