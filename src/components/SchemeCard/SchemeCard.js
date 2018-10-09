import React, { Component } from 'react';
import './SchemeCard.css';


class SchemeCard extends Component {
  dragStart = (evt, id) => {
    console.log('drag:', id);
    evt.dataTransfer.setData('id', id);
  }

  drop = (evt) => {
    console.log('drop:', evt.target);
  }

  render() {
    return (
      <div className="card" draggable="true" onDragStart={(e) => this.dragStart(e, this.props.id)} onDrop={(e) => this.drop(e)}>
        <div className="img-container">
          <img alt={this.props.name} src={this.props.image} draggable="false"/>
        </div>
      </div>
    )
  }
};

export default SchemeCard;