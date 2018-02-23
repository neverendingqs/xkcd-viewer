import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { bindActionCreators } from 'redux';

import { comicRequest } from '../actions';
import Comic from '../components/Comic';
import Navigation from '../components/Navigation';

class ComicRoute extends Component {
  constructor(props) {
    super(props);
    this.randomizer = this.randomizer.bind(this);
  }

  componentWillMount() {
    this.props.comicRequest(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.match.params.id) {
      this.props.comicRequest(nextProps.match.params.id);
    }
  }

  doesComicExist() {
    return this.props.comicMetadata === null;
  }

  getComicNum() {
    return Number(
      this.props.match.params.id
      || (this.props.comicMetadata && this.props.comicMetadata.num)
    );
  }

  randomizer() {
    const nextComicNum = Math.floor(Math.random() * this.props.latestComicNum) + 1;
    return this.props.history.push(`/${nextComicNum}`);
  }

  render() {
    return (
      <div>
        <Navigation
          comicNum={this.getComicNum()}
          randomizer={this.randomizer}
        />
        {this.props.comicMetadata &&
          <Comic
            title={this.props.comicMetadata.title}
            img={this.props.comicMetadata.img}
            alt={this.props.comicMetadata.alt}
          />
        }
        {this.doesComicExist() &&
          <Redirect push to="/"/>
        }
      </div>
    );
  }
}

const mapStateToProps = ({ comicMetadata, latestComicNum }, ownProps) => {
  const comicNum = ownProps.match.params.id || latestComicNum;
  return {
    comicMetadata: comicMetadata[comicNum],
    latestComicNum
  };
};
const mapDispatchToProps = dispatch => bindActionCreators({ comicRequest }, dispatch);

const connector = connect(mapStateToProps, mapDispatchToProps);
export default connector(ComicRoute);
