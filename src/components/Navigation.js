import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Navigation.css'

class Navigation extends Component {
  getButtonClass() {
    const prefix = this.props.isEnabled
      ? ''
      : 'disabled';
    return `btn btn-outline-secondary ${prefix}`
  }

  getPreviousButtonClass() {
    const suffix = this.props.comicNum === 1
      ? ' disabled'
      : '';
    return `btn btn-secondary${suffix}`
  }

  getPreviousComicLocation() {
    const nextComicNum = this.props.comicNum && (this.props.comicNum - 1 > 1)
      ? this.props.comicNum - 1
      : 1;

    return `/${nextComicNum || ''}`;
  }

  getNextComicLocation() {
    return `/${this.props.comicNum + 1 || ''}`;
  }

  render() {
    return (
      <div>
        <Link
          className={this.getPreviousButtonClass()}
          onClick={e => e.target.blur()}
          to="/1"
        >
          {'<<'}
        </Link>
        <Link
          className={this.getPreviousButtonClass()}
          onClick={e => e.target.blur()}
          to={this.getPreviousComicLocation()}
        >
          {'<'}
        </Link>
        <Link
          className="btn btn-secondary"
          onClick={e => e.target.blur()}
          to={this.getNextComicLocation()}
        >
          {'>'}
        </Link>
        <Link
          className="btn btn-secondary"
          onClick={e => e.target.blur()}
          to="/"
        >
          {'>>'}
        </Link>
      </div>
    );
  }
}

export default Navigation;
