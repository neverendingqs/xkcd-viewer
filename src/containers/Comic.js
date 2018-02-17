import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { comicLoad } from '../actions';

class Comic extends Component {
  getDate() {
    const { year, month, day } = this.props.comicMetadata;
    return `${year}-${month}-${day}`;
  }

  render() {
    console.log(this.props.comicMetadata);
    return (
      <div>
        {console.log(this.props.comicMetadata)}
        <h2>{this.props.comicMetadata.title}</h2>
        <h2><small>{this.getDate()}</small></h2>

        <figure className="figure">
          <img
            src={this.props.comicMetadata.img}
            className="figure-img img-fluid rounded"
            alt=""
          />
          <figcaption className="figure-caption">{this.props.comicMetadata.alt}</figcaption>
        </figure>
      </div>
    );
  }
}
const mapStateToProps = ({ comicMetadata }) => ({ comicMetadata });
const mapDispatchToProps = dispatch => bindActionCreators({ comicLoad }, dispatch);

const connector = connect(mapStateToProps, mapDispatchToProps);
export default connector(Comic);
