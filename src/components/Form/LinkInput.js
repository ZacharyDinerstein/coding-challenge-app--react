import React from 'react';
import AddInputsBtn from '../Button/AddInputsBtn';
import RemoveAnswerBtn from '../Button/RemoveAnswerBtn';

const LinkInputs = (props) => {
    let {
        link,
        updateCardArrayAttribute,
        index
    } = props;

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
                    category="addLink"
                    handleAddNewInputs={(category) => props.handleAddNewInputs(category)}
                >
                    Add Link
                </AddInputsBtn>
                <RemoveAnswerBtn
                    index={index}
                    handleRemoveFields={(elemToRemove) => props.handleRemoveFields(elemToRemove)}
                >
                    Remove
                </RemoveAnswerBtn>
            </div>
        </>
    )
}

export default LinkInputs;
