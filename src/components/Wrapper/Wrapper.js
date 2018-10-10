import React, { Component } from 'react';
import './Wrapper.css';


class Wrapper extends Component {

  render() {
    this.props.children.forEach((el) => {
      console.log('id:', el.props.id);
    });

    return (
      <div className="wrapper container">
        <div className="row py-3">
          <div className="col">{this.props.children[0]}</div>
        </div>
        <div className="row py-3">
          <div className="col">{this.props.children[1]}</div>
          <div className="col">{this.props.children[2]}</div>
          <div className="col">{this.props.children[3]}</div>
        </div>
        <div className="row py-3">
          <div className="col">{this.props.children[4]}</div>
          <div className="col">{this.props.children[5]}</div>
        </div>
        <div className="row py-3">
          <div className="col">{this.props.children[6]}</div>
          <div className="col">{this.props.children[7]}</div>
        </div>
      </div>
    );
  }
}

export default Wrapper;
