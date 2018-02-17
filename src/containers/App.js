import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { bindActionCreators } from 'redux';

import { comicRequest } from '../actions';
import Comic from './Comic';

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

const mapDispatchToProps = dispatch => bindActionCreators({ comicRequest }, dispatch);

const connector = connect(null, mapDispatchToProps);
export default connector(App);
