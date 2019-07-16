import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

const AddAnswerBtn = (props) => {
  
  const handleBtnClick = (elemToCreate) => {
    props.hideComponent();
    props.addAdditionalFields(elemToCreate);
  }

  return (
    <>
      <div
        className="form__button-wrapper"
        onClick={() => handleBtnClick("answerFields")}
      >
        <FontAwesomeIcon 
          icon={faPlusCircle}
          className="form__icon"
        />
        <span>Add Answer</span>
      </div>
    </>
  )
}

export default AddAnswerBtn;
