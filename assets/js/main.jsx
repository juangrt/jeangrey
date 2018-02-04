import "phoenix_html";
import React from "react";
import ReactDOM from "react-dom";
import AppHeader from "./components/header";
import AppFooter from "./components/footer";
import Home from "./pages/home/home";
import Blog from "./pages/blog/blog";
import Login from "./pages/login/login"
import { BrowserRouter, Route, Link } from 'react-router-dom';

class JeadGreyApp extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <AppHeader></AppHeader>
          <div className="container">
            <p className="alert alert-info" role="alert"></p>
            <p className="alert alert-danger" role="alert"></p>
          </div>
          <main role="main" className="container">
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" component={Login}/>
            <Route path="/blog" component={Blog}/>
          </main>
          <AppFooter></AppFooter>
        </div>
      </BrowserRouter>
    	)
  }
}

ReactDOM.render(
  <JeadGreyApp/>,
  document.getElementById("jeangreay-app")
)