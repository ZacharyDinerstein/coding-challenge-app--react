import React from 'react';
import AddInputsBtn from '../Button/AddInputsBtn';
import RemoveInputsBtn from '../Button/RemoveInputsBtn';

const LinkInputs = (props) => {
    let {
        link,
        updateCardArrayAttribute,
        index,
        label
    } = props,
    category = "links";

    return (
        <>
            <label htmlFor="">{label} URL</label>
            <input
                type="text"
                placeholder="Optional"
                name={category}
                onChange={updateCardArrayAttribute}
                value={link}
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

export default LinkInputs;
