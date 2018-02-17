import React, { Component } from 'react';

class Comic extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>

        <figure className="figure">
          <img
            src={this.props.img}
            className="figure-img img-fluid rounded"
            alt=""
          />
          <figcaption className="figure-caption">{this.props.alt}</figcaption>
        </figure>

      </div>
    );
  }
}

export default Comic;
