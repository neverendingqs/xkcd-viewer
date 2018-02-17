import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Comic from '../containers/Comic';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="text-center">
          <h1 className="display-1">XKCD Viewer</h1>
          <hr />
          <BrowserRouter>
            <div>
              <Switch>
                <Route path="/:id?" component={Comic} />
              </Switch>
            </div>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
