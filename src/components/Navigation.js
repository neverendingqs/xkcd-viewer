import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component {
  getButtonClass() {
    const prefix = this.props.isEnabled
      ? ''
      : 'disabled';
    return `btn btn-secondary ${prefix}`
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
          className={this.getButtonClass()}
          to={this.getPreviousComicLocation()}
        >
          Previous
        </Link>
        <Link
          className={this.getButtonClass()}
          to={this.getNextComicLocation()}
        >
          Next
        </Link>
      </div>
    );
  }
}

export default Navigation;
