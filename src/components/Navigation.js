import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component {
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
          className='btn btn-secondary'
          to={this.getPreviousComicLocation()}
        >
          Previous
        </Link>
        <Link
          className='btn btn-secondary'
          to={this.getNextComicLocation()}
        >
          Next
        </Link>
      </div>
    );
  }
}

export default Navigation;
