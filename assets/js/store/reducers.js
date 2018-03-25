import C from '../constants';
import { combineReducers } from 'redux';


export const loading = (state = false, action) => {
  switch(action.type) {
    case C.LOADING:
      return true
    case C.LOADING_CANCEL:
      return false
  }

  return state
}

let userInitState = JSON.parse(localStorage.getItem('user')) || null;

export const user = (state = userInitState, action) => {
  switch(action.type) {
    case C.LOG_IN:
      return action.payload
    case C.LOG_OUT:
      localStorage.removeItem('user')
      return null
    default:
      return state;
  }
}

export const errors = (state={}, action) => {
  switch(action.type) {
    case C.ADD_ERROR :
      let payload = action.payload
      return { ...state, ...payload }
    case C.CLEAR_ERROR : 
      let newState = Object.assign({}, state)
      delete newState[action.payload]
      return newState
    default: 
      return state
  }
}


export default combineReducers({user, errors, loading});

