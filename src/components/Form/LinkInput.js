import React from 'react';
import AddInputsBtn from '../Button/AddInputsBtn';
import RemoveInputsBtn from '../Button/RemoveInputsBtn';

const LinkInputs = (props) => {
    let {
        link,
        updateCardArrayAttribute,
        index
    } = props,
    category = "linkFields";

    return (
        <>
            <label htmlFor="">Link URL</label>
            <input
                type="text"
                placeholder="Optional"
                name="links"
                onChange={updateCardArrayAttribute}
                value={link}
            />
            <div className="form__buttons-wrapper">
                <AddInputsBtn
                    category={category}
                    handleAddNewInputs={(category) => props.handleAddNewInputs(category)}
                >
                    Add Link
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
