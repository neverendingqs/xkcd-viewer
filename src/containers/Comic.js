import React, { Component } from 'react';
import { connect } from 'react-redux';

class Comic extends Component {
  getDate() {
    const { year, month, day } = this.props.comicMetadata;
    return `${year}-${month}-${day}`;
  }

  render() {
    return (
      <div>
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
const mapStateToProps = ({ comicMetadata }) => {
  const latestComicNum = Math.max(Object.keys(comicMetadata));
  return { comicMetadata: comicMetadata[latestComicNum] || {} };
};

const connector = connect(mapStateToProps);
export default connector(Comic);
