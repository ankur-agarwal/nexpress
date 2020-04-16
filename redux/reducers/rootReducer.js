import { combineReducers } from 'redux'

import auth from './authReducer'

const reducer = (handlers, state, action) =>
  handlers[action.type] ? handlers[action.type](state, action) : state

const reducers = {
  auth: auth(reducer)
}

export default combineReducers(Object.assign({}, reducers))

