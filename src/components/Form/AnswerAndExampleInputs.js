import React, { useState } from 'react';
import AddInputsBtn from '../Button/AddInputsBtn';
import RemoveAnswerBtn from '../Button/RemoveAnswerBtn';

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
                <RemoveAnswerBtn
                    index={index}
                    category={category}
                    handleRemoveFields={(category) => props.handleRemoveFields(category)}
                >
                    Remove
                </RemoveAnswerBtn>
            </div>
        </>
    )
}

export default AnswerAndExampleInputs;
