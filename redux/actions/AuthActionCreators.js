import { loginUser } from '../../api/AuthAPI'

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_RESPONSE = 'LOGIN_RESPONSE'
export const LOGIN_ERROR = 'LOGIN_ERROR'

// export const login = () => (dispatch) => {
//  console.log('Called login')
//  dispatch({
//   type: LOGIN_REQUEST
//  })
// }

export const login = (username, password) => {
  return {
    types: [LOGIN_REQUEST, LOGIN_RESPONSE, LOGIN_ERROR],
    shouldCallAPI: true,
    callAPI: loginUser,
    payload: { username, password }
  }
}
