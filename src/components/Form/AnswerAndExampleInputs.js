import React, { Component } from 'react'
import AddAnswerBtn from '../Button/AddAnswerBtn';

export default class AnswerAndExampleInputs extends Component {
    render() {
        let {
            answer,
            example,
            updateCardArrayAttribute,
            allowTabs,
            index
        } = this.props;

        return (
            <>
                <label htmlFor="">Answer</label>
                <textarea
                    type="text"
                    name="answer"
                    onChange={updateCardArrayAttribute}
                    value={answer}
                    index={index}
                    onKeyDown={allowTabs}
                />

                <label htmlFor="">Code Example</label>
                <textarea
                    type="text"
                    placeholder="Optional"
                    name="example"
                    onChange={updateCardArrayAttribute}
                    value={example}
                    onKeyDown={allowTabs}
                />
                <AddAnswerBtn />
            </>
        )
    }
}

