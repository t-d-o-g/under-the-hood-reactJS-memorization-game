import React, { Component } from 'react';
import './ScoreCard.css';


class ScoreCard extends Component {
  render() {
    return (
      <div className="score">
        <h2>Moves: {this.props.score}</h2>
      </div>
    );
  }
}

export default ScoreCard;