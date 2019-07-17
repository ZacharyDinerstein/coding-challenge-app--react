import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';

const RemoveAnswerBtn = (props) => {
  let { 
    index,
    category,
    children
  } = props,
    classes = (index === 0) ? "form__button-wrapper hidden" : "form__button-wrapper";

  return (
    <>
      <div
        className={classes}
        onClick={() => props.handleRemoveInputs(category)}
      >
        <FontAwesomeIcon
          icon={faMinusCircle} 
          className="form__icon"  
        />
        <span>{children}</span>
      </div>
    </>
  )
}

export default RemoveAnswerBtn;
