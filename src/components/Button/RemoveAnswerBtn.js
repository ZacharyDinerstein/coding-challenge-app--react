import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';

const RemoveAnswerBtn = (props) => {
  
  const handleBtnClick = (category) => {
    props.hideComponent();
    props.removeFields(category);
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
