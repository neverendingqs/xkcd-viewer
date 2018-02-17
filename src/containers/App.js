import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { comicLoad } from '../actions';
import Comic from './Comic';

class App extends Component {
  componentDidMount() {
    this.props.comicLoad();
  }

  render() {
    return (
      <div className="container">
        <div className="text-center">
          <h1 className="display-1">XKCD Viewer</h1>
          <hr />
          <Comic />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ comicLoad }, dispatch);

const connector = connect(null, mapDispatchToProps);
export default connector(App);
