import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

const AddInputsBtn = (props) => {
  let {
    children,
    category
  } = props;


  return (
    <>
      <div
        className="form__button-wrapper"
        onClick={() => props.handleAddNewInputs(category)}
      >
        <FontAwesomeIcon
          icon={faPlusCircle}
          className="form__icon"
        />
        <span>{children}</span>
      </div>
    </>
  )
}

export default AddInputsBtn;
