import React, { useState } from 'react';
import CardMainContent from './CardMainContent';
import './Card.scss';

const Card = (props) => {

  const [fullWidth, toggleCardFullWidth] = useState(false);

  let { cardData } = props;
  let classes = fullWidth ? "card card--question card--full-width" : "card card--question";

  return (
    <div onClick={() => toggleCardFullWidth(!fullWidth)} className={classes} >
      <h3 className="card__question">{cardData.question}</h3>
      
      {fullWidth &&
        <CardMainContent cardData={cardData} />
      }

    </div>
  )
}

export default Card;