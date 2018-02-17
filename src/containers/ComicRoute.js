import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import { comicRequest } from '../actions';
import Comic from '../components/Comic';

class ComicRoute extends Component {
  componentWillMount() {
    this.props.comicRequest(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps) {
    this.props.comicRequest(nextProps.match.params.id);
  }

  getPreviousComicLocation() {
    const currComicNum = Number(this.props.match.params.id || this.props.comicMetadata.num);
    const nextComicNum = currComicNum && (currComicNum - 1 > 1)
      ? currComicNum - 1
      : 1;

    return `/${nextComicNum || ''}`;
  }

  getNextComicLocation() {
    return `/${Number(this.props.match.params.id) + 1 || ''}`;
  }

  getDate() {
    const { year, month, day } = this.props.comicMetadata;
    return `${year}-${month}-${day}`;
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

        <Comic
          title={this.props.comicMetadata.title}
          img={this.props.comicMetadata.img}
          alt={this.props.comicMetadata.alt}
          year={this.props.comicMetadata.year}
          month={this.props.comicMetadata.month}
          day={this.props.comicMetadata.day}
        />

      </div>
    );
  }
}
const mapStateToProps = ({ comicMetadata }, ownProps) => {
  const comicNum = ownProps.match.params.id || Math.max(Object.keys(comicMetadata));
  return { comicMetadata: comicMetadata[comicNum] || {} };
};
const mapDispatchToProps = dispatch => bindActionCreators({ comicRequest }, dispatch);

const connector = connect(mapStateToProps, mapDispatchToProps);
export default connector(ComicRoute);
