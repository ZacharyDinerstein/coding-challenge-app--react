import React, { useState } from 'react';
import CardMainContent from './CardMainContent';
import Toggle from '../Helper/Toggle';
import './Card.scss';

const Card = (props) => {

  const [fullWidth, toggleCardFullWidth] = useState(false);
  
  let { cardData } = props;
  let classes = fullWidth ? "card card--question card--full-width" : "card card--question";

  return (
    <div className={classes} >
      <h3 className="card__question">{cardData.question}</h3>
      <Toggle toggleCardFullWidth={() => toggleCardFullWidth(!fullWidth)}>
        <CardMainContent cardData={cardData} />
      </Toggle>
    </div>
  )
}

export default Card;