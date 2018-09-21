import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import BTN from './btn.jsx';
import Cities from './cities.jsx';
import { HashRouter, Route, Link } from 'react-router-dom';

const Home = () => {
  return <p>Home</p>
}

ReactDOM.render(<HashRouter>
<div>
  <div>
      <nav className = "navbar navbar-inverse">
        <div className = "container">
          <ul className = "nav navbar-nav">
            <li><Link to = "/">Lab #02</Link></li>
            <li><Link to = "/cities">Cities</Link></li>
            <li><Link to = "/btn">BTN</Link></li>
          </ul>
        </div>
      </nav>
  </div>
    <Route exact path = "/" component = {Home}></Route>
    <Route path = "/cities" component = {Cities}></Route>
    <Route path = "/btn" component = {BTN}></Route>
  </div>
</HashRouter>,
document.getElementById("root")
)
