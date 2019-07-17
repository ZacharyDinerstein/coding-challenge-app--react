import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';

const RemoveAnswerBtn = (props) => {
  
  const handleBtnClick = (category) => {
    props.removeFields(category);
  }

  let { index } = props,
      classes = (index === 0) ? "form__button-wrapper hidden" : "form__button-wrapper";

  return (
    <>
      <div
        className={classes}
        onClick={() => handleBtnClick("answerFields")}
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
