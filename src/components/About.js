import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div>
        <h2>About</h2>
        <p>This website is purely for educational purposes only. See <a href="https://github.com/neverendingqs/xkcd-viewer" target="_blank" rel="noopener noreferrer">neverendingqs/xkcd-viewer</a> for details.</p>
        <p>XKCD is a comic series by Randall Munroe and is licensed under <a href="https://creativecommons.org/licenses/by-nc/2.5/" target="_blank" rel="noopener noreferrer">CC BY-NC 2.5</a>.  Find out more about XKCD at <a href="https://xkcd.com/about/" target="_blank" rel="noopener noreferrer">https://xkcd.com/about/</a> .</p>
      </div>
    );
  }
}

export default About;
