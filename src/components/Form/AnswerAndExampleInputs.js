import React, { useState } from 'react';
import AddInputsBtn from '../Button/AddInputsBtn';
import RemoveInputsBtn from '../Button/RemoveInputsBtn';

const AnswerAndExampleInputs = (props) => {
    let {
        answer,
        example,
        updateObjectAttributeWithinCardsArray,
        allowTabs,
        index
    } = props,
    category = "answerFields";

    return (
        <>
            <label htmlFor="">Answer</label>
            <textarea
                type="text"
                name="answer"
                value={answer}
                onChange={updateObjectAttributeWithinCardsArray}
                onKeyDown={allowTabs}
            />

            <label htmlFor="">Code Example</label>
            <textarea
                type="text"
                name="example"
                value={example}
                onChange={updateObjectAttributeWithinCardsArray}
                onKeyDown={allowTabs}
                placeholder="Optional"
            />
            <div className="form__buttons-wrapper">
                <AddInputsBtn
                    category={category}
                    handleAddNewInputs={(category) => props.handleAddNewInputs(category)}
                >
                    Add Answer
                </AddInputsBtn>
                <RemoveInputsBtn
                    index={index}
                    category={category}
                    handleRemoveInputs={(category) => props.handleRemoveInputs(category)}
                >
                    Remove
                </RemoveInputsBtn>
            </div>
        </>
    )
}

export default AnswerAndExampleInputs;
