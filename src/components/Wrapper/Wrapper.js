import React, { Component } from 'react';
import './Wrapper.css';

// const Wrapper = props => <div className="wrapper">{props.children}</div>
class Wrapper extends Component {
  onDragOver = (evt) => {
    evt.preventDefault();
  }

  render() {
    // Render the correct props.children based on drag/drop events.
    this.props.children.forEach((el) => {
      console.log('Element id:', el.props.id);
    });

    return (
      <div className="wrapper container">
        <div className="row py-3">
          <div className="col droppable" onDragOver={(e) => this.onDragOver(e)}>{this.props.children[0]}</div>
        </div>
        <div className="row py-3">
          <div className="col droppable" onDragOver={(e) => this.onDragOver(e)}>{this.props.children[1]}</div>
          <div className="col droppable" onDragOver={(e) => this.onDragOver(e)}>{this.props.children[2]}</div>
          <div className="col droppable" onDragOver={(e) => this.onDragOver(e)}>{this.props.children[3]}</div>
        </div>
        <div className="row py-3">
          <div className="col droppable" onDragOver={(e) => this.onDragOver(e)}>{this.props.children[4]}</div>
          <div className="col droppable" onDragOver={(e) => this.onDragOver(e)}>{this.props.children[5]}</div>
        </div>
        <div className="row py-3">
          <div className="col droppable" onDragOver={(e) => this.onDragOver(e)}>{this.props.children[6]}</div>
          <div className="col droppable" onDragOver={(e) => this.onDragOver(e)}>{this.props.children[7]}</div>
        </div>
      </div>
    )
  }
};







/*
const Wrapper = props => (
  <div className="wrapper container">
    <div className="row py-3">
      <div className="col droppable">{props.children[0]}</div>
    </div>
    <div className="row py-3">
      <div className="col">{props.children[1]}</div>
      <div className="col">{props.children[2]}</div>
      <div className="col">{props.children[3]}</div>
    </div>
    <div className="row py-3">
      <div className="col">{props.children[4]}</div>
      <div className="col">{props.children[5]}</div>
    </div>
    <div className="row py-3">
      <div className="col">{props.children[6]}</div>
      <div className="col">{props.children[7]}</div>
    </div>
  </div>
)
*/

export default Wrapper;