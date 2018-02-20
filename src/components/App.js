import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

import About from '../components/About';
import ComicRoute from '../containers/ComicRoute';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="text-center">
          <BrowserRouter>
            <div>
              <nav className="navbar navbar-expand-lg navbar-light navbar-transparent">
                <Link className="navbar-brand h1" to="/">XKCD Viewer</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                      <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/about">About</a>
                    </li>
                  </ul>
                </div>
              </nav>
              <Switch>
                <Route path="/about" component={About}/>
                <Route path="/:id?" component={ComicRoute} />
              </Switch>
            </div>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
