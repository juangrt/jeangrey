import "phoenix_html"
import React from "react"
import { render } from "react-dom"
import { Provider } from 'react-redux'
import routes from './routes'
import storeFactory from './store'


const store = storeFactory()

class JeadGreyApp extends React.Component {
  render() {
    return (
      <Provider store={store}>
        {routes}
      </Provider>
    	)
  }
}

render(
  <JeadGreyApp/>,
  document.getElementById("jeangreay-app")
)