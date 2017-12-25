import "phoenix_html";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link } from 'react-router-dom';

class AppHeader extends React.Component {
  render() {
    return (
      <header>
      	<nav className="container">
  	    	<ul className="nav nav-pills">
    			  <li role="presentation">
    			  	<Link to="/">Feed</Link>
    			  </li>
    			  <li role="presentation">
    			  	{/*<Link to="/projects" role="button">Projects</Link>*/}
    			  </li>
    			  <li role="presentation">
    			  	<Link to="/blog" role="button">Blog</Link>
    			  </li>
    			  <li role="presentation">
              {/*
    			  	<Link href="#" role="button">Resume</Link>
              */}
    			  </li>
    			  <li role="presentation">
              {/*
    			  	<Link href="#" role="button">Philosophy</Link>
              */}
    			  </li>
  			 </ul>
      	</nav>
      </header>
    	)
  }
}

export default AppHeader;