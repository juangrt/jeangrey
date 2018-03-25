import axios from 'axios'
import { bindActionCreators } from 'redux'

import * as Actions from '../actions'
import history from './history'
import store from '../store'
import C from '../constants'


var axiosInstance = axios.create();

var boundActionCreator = null
function getBoundedActions() {
  if(boundActionCreator == null) {
    boundActionCreator = bindActionCreators(Actions, store.dispatch)
  }

  return boundActionCreator
}


axiosInstance.interceptors.response.use( response => {
  return response;
}, error => {
  if(error.response.status === 401 && history.location.pathname !== '/login') {
    getBoundedActions().logout()
  }
  return Promise.reject(error);
})


export default axiosInstance