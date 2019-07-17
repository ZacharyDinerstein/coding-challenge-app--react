import React, { useState } from 'react';
import AddInputsBtn from '../Button/AddInputsBtn';
import RemoveAnswerBtn from '../Button/RemoveAnswerBtn';

const AnswerAndExampleInputs = (props) => {

    const [addBtnChecked, hideComponent] = useState(false);

    let {
        answer,
        example,
        updateObjectAttributeWithinCardsArray,
        allowTabs,
        index
    } = props;

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
                    handleAddNewInputFields={(category) => props.handleAddNewInputFields(category)}
                    hideComponent={() => hideComponent(true)}
                    addBtnChecked={addBtnChecked}
                >
                    Add Answer
                </AddInputsBtn>
                <RemoveAnswerBtn
                    hideComponent={() => hideComponent(true)}
                    index={index}
                    removeFields={(elemToRemove) => props.removeFields(elemToRemove)}
                />
            </div>
        </>
    )
}

export default AnswerAndExampleInputs;
