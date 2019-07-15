import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

const AddAnswerBtn = (props) => {
  
  const handleBtnClick = (elemToCreate) => {
    props.hideComponent();
    props.addAdditionalFields(elemToCreate);
  }

  let classes = props.addBtnChecked ? "card__checkbox-wrapper hidden" : "card__checkbox-wrapper";

  return (
    <>
      <div
        className={classes}
        onClick={() => handleBtnClick("answerField")}
      >
        <FontAwesomeIcon icon={faPlusCircle} />
        <span>Add Answer</span>
      </div>
      <div></div>
    </>
  )
}

export default AddAnswerBtn;
