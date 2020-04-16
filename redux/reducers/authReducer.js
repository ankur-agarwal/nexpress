import * as actions from '../actions/AuthActionCreators'

const initialState = {
  login: false
}

const handlers = {
  [actions.LOGIN_REQUEST]: (state = initialState) =>
    Object.assign({}, state, { login: true }),
}

export default reducer => (state = initialState, action) =>
  reducer(handlers, state, action)
