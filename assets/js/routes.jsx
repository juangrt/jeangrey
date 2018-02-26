import React from 'react'
import { connect } from 'react-redux'
import { Router, Switch, Redirect, Route, Link } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import axios from 'axios'

import AppHeader from './components/header'
import AppFooter from './components/footer'
import PrivateRoute from './components/private_route'


import Admin from './pages/admin'
import Home from './pages/home'
import Blog from './pages/blog'
import Login from './pages/login/login'
import NotFoundError from './pages/error'

const history = createHistory()

axios.interceptors.response.use( response => {
  return response;
  }, error => {

    if(error.response.status === 401 
        && history.location.pathname !== '/login') {
      history.push('/')
    }
    return Promise.reject(error);
  })

const mapStateToProps = (state, props) => 
  ({
    errors: state.erros
  })

const routes = (
  <Router history={history}>
    <div>
      <AppHeader></AppHeader>
      <div className='container' style={{marginTop: '70px'}}>
        <div class="alert alert-danger" role="alert">
          This is a danger alert—check it out!
        </div>
      </div>

      <main role='main' className='container'>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/blog' component={Blog}/>
          <PrivateRoute exact path='/admin' component={Admin}/>
          <Route exact path='/404' component={NotFoundError} />
          <Redirect from='*' to='/404' />
        </Switch>
      </main>
      <AppFooter></AppFooter>
    </div>
  </Router>
)

export default routes