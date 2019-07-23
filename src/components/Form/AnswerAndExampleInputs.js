import React from 'react';
import AddInputsBtn from '../Button/AddInputsBtn';
import RemoveInputsBtn from '../Button/RemoveInputsBtn';

const AnswerAndExampleInputs = (props) => {
    let {
        answer,
        example,
        updateCardAttribute,
        allowTabs,
        index,
        category
    } = props;

    return (
        <>
            <label htmlFor="">Answer</label>
            <textarea
                type="text"
                name="answer"
                value={answer}
                onChange={(e) => updateCardAttribute(e, category)}
                onKeyDown={allowTabs}
                required
            />

            <label htmlFor="">Code Example</label>
            <textarea
                type="text"
                name="example"
                value={example}
                onChange={(e) => updateCardAttribute(e, category)}
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
