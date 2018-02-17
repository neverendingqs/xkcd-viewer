import React, { Component } from 'react';

class Comic extends Component {
  getDate() {
    const { year, month, day } = this.props;
    return `${year}-${month}-${day}`;
  }

  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <h2><small>{this.getDate()}</small></h2>

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
