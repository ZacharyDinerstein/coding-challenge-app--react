import React, { Component } from 'react'
import AddAnswerBtn from '../Button/AddAnswerBtn';

export default class AnswerAndExampleInputs extends Component {
    render() {
        let {
            answer,
            example,
            updateCardAttribute,
            allowTabs
        } = this.props;

        return (
            <>
                <label htmlFor="">Answer</label>
                <textarea
                    type="text"
                    name="answer"
                    onChange={updateCardAttribute}
                    value={answer}
                    onKeyDown={allowTabs}
                />

                <label htmlFor="">Code Example</label>
                <textarea
                    type="text"
                    placeholder="Optional"
                    name="example"
                    onChange={updateCardAttribute}
                    value={example}
                    onKeyDown={allowTabs}
                />
                <AddAnswerBtn />
            </>
        )
    }
}

