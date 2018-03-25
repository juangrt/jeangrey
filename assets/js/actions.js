import axiosInstance from './services/axios_instance'
import C from './constants'
import appReducer from './store/reducers'

export const upload = file => dispatch => {
  dispatch({type: C.LOADING})

  const config = { headers: { 'content-type': 'multipart/form-data' } }

  return new Promise(function(resolve, reject) {
    const formData = new FormData()
    formData.append('file',file)

    axiosInstance.post('/api/v1/posts/upload', formData, config).then(response => {
      dispatch({type: C.LOADING_CANCEL})
      resolve({ data: { link: response.data.path } })
    }).catch( error => {
      dispatch({type: C.LOADING_CANCEL})
      reject(error)
    });

  });
}

export const addError = (id, msg, temporary = true) => dispatch => {
  var payload = {}
  payload[id] = { message: msg }

  dispatch({
    type: C.ADD_ERROR,
    payload: payload
  }) 

  if(temporary) {
    setTimeout( () => {
      dispatch({ type: C.CLEAR_ERROR, payload: id }) 
    }, 5000)
  }
}

export const logout = () => dispatch => {
  dispatch({ type: C.LOG_OUT }) 
}

export const login = (email, password) => dispatch => {
  dispatch({type: C.LOADING})

  return new Promise(function(resolve, reject) {
    axiosInstance.post('/api/v1/login', {email, password}).then(response => {
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
      reject(error)
    });

  
  });
}