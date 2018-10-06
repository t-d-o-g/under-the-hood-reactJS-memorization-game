import React from 'react';
import './SchemeCard.css';

const SchemeCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>

)

export default SchemeCard;