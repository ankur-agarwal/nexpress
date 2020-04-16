import axios from 'axios'

export const loginUser = async ({ username, password}) => {
  console.log(username, password)
  try {
    return axios.get('http://ron-swanson-quotes.herokuapp.com/v2/quotes')
  } catch(err) {
    throw new Error(err)
  }
}
