import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';

const RemoveAnswerBtn = (props) => {
  
  const handleBtnClick = (elemToRemove) => {
    props.hideComponent();
    props.removeFields(elemToRemove);
  }

  return (
    <>
      <div
        className="form__button-wrapper"
        onClick={() => handleBtnClick("answerField")}
      >
        <FontAwesomeIcon 
          icon={faMinusCircle} 
          className="form__icon"  
        />
        <span>Remove</span>
      </div>
    </>
  )
}

export default RemoveAnswerBtn;
