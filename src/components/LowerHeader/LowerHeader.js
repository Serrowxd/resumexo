import React, { Component } from 'react';

import './LowerHead.css';

class LowerHead extends Component {
  render() {
    return (
      <div className="lowerHeadC D">
        <h1 className="lowerHead">
          I am <span> Kevin Jolley </span>,
        </h1>
        <h2 className="lowerText">a freelance developer and designer.</h2>
        <h3 className="lowerGoal">
          I started my journey in <span>December of 2017</span>, this page is
          dedicated to my progress as a developer.
        </h3>
      </div>
    );
  }
}

export default LowerHead;
