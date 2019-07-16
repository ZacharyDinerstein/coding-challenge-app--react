import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

const AddAnswerBtn = (props) => {
  
  const handleBtnClick = (elemToCreate) => {
    props.hideComponent();
    props.addAdditionalFields(elemToCreate);
  }

  let classes = props.addBtnChecked ? "form__button-wrapper hidden" : "form__button-wrapper";

  return (
    <>
      <div
        className={classes}
        onClick={() => handleBtnClick("answerField")}
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
