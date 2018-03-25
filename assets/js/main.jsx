import "phoenix_html"
import React from "react"
import { render } from "react-dom"
import { Provider } from 'react-redux'
import Routes from './routes'
import store from './store'


class JeadGreyApp extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <Routes></Routes>
      </Provider>
    	)
  }
}

render(
  <JeadGreyApp/>,
  document.getElementById("jeangreay-app")
)