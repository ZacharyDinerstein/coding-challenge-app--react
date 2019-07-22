import React from 'react';
import AddInputsBtn from '../Button/AddInputsBtn';
import RemoveInputsBtn from '../Button/RemoveInputsBtn';

const Inputs = (props) => {
    let {
        item,
        index,
        label,
        afterLabel,
        category,
        required,
        updateCardAttribute
    } = props;

    let placeholder = required ? "":"Optional";

    return (
        <>
            <label htmlFor="">{label} {afterLabel}</label>
            <input
                type="text"
                placeholder={placeholder}
                name={category}
                onChange={(e) => updateCardAttribute(e, category)}
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

export default Inputs;
