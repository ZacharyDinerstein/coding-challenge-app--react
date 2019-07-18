import React from 'react';
import AddInputsBtn from '../Button/AddInputsBtn';
import RemoveInputsBtn from '../Button/RemoveInputsBtn';

const TagInput = (props) => {
    let {
        item,
        updateCardArrayAttribute,
        index,
        label
    } = props,
    category = "tags";

    return (
        <>
            <label htmlFor="">{label}</label>
            <input
                type="text"
                placeholder="Optional"
                name={category}
                onChange={updateCardArrayAttribute}
                value={item}
            />
            <div className="form__buttons-wrapper">
                <AddInputsBtn
                    category={category}
                    handleAddNewInputs={(category) => props.handleAddNewInputs(category)}
                >
                    Add {label}
                </AddInputsBtn>
                <RemoveInputsBtn
                    index={index}
                    category={category}
                    handleRemoveInputs={(elemToRemove) => props.handleRemoveInputs(elemToRemove)}
                >
                    Remove
                </RemoveInputsBtn>
            </div>
        </>
    )
}

export default TagInput;