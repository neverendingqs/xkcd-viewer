import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { comicRequest } from '../actions';
import Comic from '../components/Comic';
import Navigation from '../components/Navigation';

class ComicRoute extends Component {
  componentWillMount() {
    this.props.comicRequest(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps) {
    this.props.comicRequest(nextProps.match.params.id);
  }

  render() {
    return (
      <div>
        <Navigation
          comicNum={Number(this.props.match.params.id || this.props.comicMetadata.num)}
          isEnabled={!!this.props.comicMetadata}
        />
        {this.props.comicMetadata &&
          <Comic
            title={this.props.comicMetadata.title}
            img={this.props.comicMetadata.img}
            alt={this.props.comicMetadata.alt}
            year={this.props.comicMetadata.year}
            month={this.props.comicMetadata.month}
            day={this.props.comicMetadata.day}
          />
        }
      </div>
    );
  }
}
const mapStateToProps = ({ comicMetadata }, ownProps) => {
  const comicNum = ownProps.match.params.id || Math.max(Object.keys(comicMetadata));
  return { comicMetadata: comicMetadata[comicNum] };
};
const mapDispatchToProps = dispatch => bindActionCreators({ comicRequest }, dispatch);

const connector = connect(mapStateToProps, mapDispatchToProps);
export default connector(ComicRoute);
