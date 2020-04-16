import React, { useEffect } from 'react'
import {connect} from 'react-redux'

import { login } from '../redux/actions/AuthActionCreators'

const Login = (props) => {
  console.log(props)
  useEffect(() => {
    props.dispatch(login('ankur', 'admin'))
  }, [])

  return (
    <div>Login</div>
  )
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Login)
