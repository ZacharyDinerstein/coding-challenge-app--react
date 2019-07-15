import React, { useState } from 'react';
import AddAnswerBtn from '../Button/AddAnswerBtn';

const AnswerAndExampleInputs = (props) => {
    
    const [btnChecked, hideComponent] = useState(false);

    let {
        answer,
        example,
        updateObjectAttributeWithinCardsArray,
        allowTabs,
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
            />
            <AddAnswerBtn
                addAdditionalFields={(elemToCreate) => props.addAdditionalFields(elemToCreate)}
                hideComponent={() => hideComponent(true)}
                btnChecked={btnChecked}
            />
        </>
    )
}

export default AnswerAndExampleInputs;
