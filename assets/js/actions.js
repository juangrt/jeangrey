import  axios from 'axios'
import C from './constants'
import appReducer from './store/reducers'

export const login = (email, password) => dispatch => {
  dispatch({type: C.LOADING})

  return new Promise(function(resolve, reject) {
    axios.post('/api/v1/login', {email, password}).then(response => {
      dispatch({
        type: C.LOG_IN,
        payload: response.data
      })
      localStorage.setItem('user', JSON.stringify(response.data))
      dispatch({type: C.LOADING_CANCEL})
      resolve(response)
    })
    .catch((error) => {
      dispatch({type: C.LOADING_CANCEL}) 
      dispatch({
        type: C.ADD_ERROR,
        payload: error
      }) 
      reject(error)
    });

  
  });
}