import C from '../constants'
import appReducer from './reducers'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'

const consoleMessages = store => next => action => {

  console.groupCollapsed(`dispatching action => ${action.type}`);
  console.log(store.getState());
  
  let result = next(action);
  
  console.log(store.getState());
  console.groupEnd();

  return result

}

const store = ((initialState={}) => {
  return applyMiddleware(thunk,consoleMessages)(createStore)(appReducer, initialState)
})()

export default store



