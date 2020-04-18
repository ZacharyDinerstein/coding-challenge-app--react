import React, { useState } from 'react';
import CardMainContent from './CardMainContent.jsx';
import './Card.scss';

const Card = (props) => {
  const [fullWidth, toggleCardFullWidth] = useState(false);
  let {cardData, handleDeleteItem, handleEditItem, id} = props,
      {question} = cardData,
      classes = fullWidth ? "card card--question card--full-width" : "card card--question";

  return (
    <div onClick={() => toggleCardFullWidth(!fullWidth)} className={classes} >
      <h3 className="card__question">{question}</h3>

      {fullWidth &&
        <CardMainContent
          cardData={cardData}
          handleDeleteItem={() => handleDeleteItem(id)}
          handleEditItem={() => handleEditItem(id)}
        />
      }

    </div>
  )
};

export default Card;