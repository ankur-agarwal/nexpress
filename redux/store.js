import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'

import { callAPIMiddleware } from './middlewares/callAPIMiddleware'
import rootReducer from './reducers/rootReducer'

const middlewares = composeWithDevTools(applyMiddleware(thunk, callAPIMiddleware))

export const store = (initialState = {}) => {
  return createStore(rootReducer, initialState, middlewares)
}
