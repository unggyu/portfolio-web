import {
  applyMiddleware,
  createStore,
  CombinedState,
  combineReducers,
} from 'redux'
import { createWrapper, HYDRATE } from 'next-redux-wrapper'
import thunkMiddleware from 'redux-thunk'
import { AppAction, State } from 'portfolio-web'
import { appReducer } from './app/reducer'

function bindMiddleware(middleware: any[]) {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

const combineReducer = combineReducers({
  app: appReducer,
})

function reducer(
  state: State | undefined,
  action: AppAction
): CombinedState<State> {
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        ...action.payload,
      }
    default: {
      return combineReducer(state, action)
    }
  }
}

function initStore() {
  return createStore(reducer, bindMiddleware([thunkMiddleware]))
}

export const wrapper = createWrapper(initStore)
