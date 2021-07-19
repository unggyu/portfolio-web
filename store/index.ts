import { useMemo } from 'react'
import { applyMiddleware, createStore, Store } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { AppAction, AppState } from 'portfolio-web'

let store: Store<AppState, AppAction> | undefined

export const initialState: AppState = {
  resume_data: {
    basic_info: {
      description_header: '안녕하세요 👋 :)',
      description:
        '제 포트폴리오 사이트에 방문에 주셔서 감사합니다. 웹 서비스 개발과 디자인에 관심이 많은 최웅규입니다. 개인 프로젝트로 만들고 싶었던 서비스들을 새로운 기술을 적용하여 만드는 것을 좋아합니다. 2020.01.09부터 IT 산업기능요원으로 편입되었고 현재는 전직 대기 중이며 웹 프론트엔드 개발자로 전향을 준비하고 있습니다. 감사합니다.',
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
