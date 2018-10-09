import React, { Component } from 'react';
import './SchemeCard.css';


class SchemeCard extends Component {
  render() {
   return (
      <div 
        className="card" 
        draggable={this.props.draggable} 
        onDragStart={this.props.onDragStart({ id: this.props.id })} 
        onDragOver={this.props.onDragOver({ id: this.props.id })}
        onDrop={this.props.onDrop({ id: this.props.id })}
        >
        <div className="img-container">
          <img alt={this.props.name} src={this.props.image} draggable="false"/>
        </div>
      </div>
   )
  }
};

export default SchemeCard;
