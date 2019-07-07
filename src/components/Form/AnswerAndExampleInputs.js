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
                    value={answer}
                    onChange={updateCardArrayAttribute}
                    onKeyDown={allowTabs}
                />

                <label htmlFor="">Code Example</label>
                <textarea
                    type="text"
                    name="example"
                    value={example}
                    onChange={updateCardArrayAttribute}
                    onKeyDown={allowTabs}
                />
                <AddAnswerBtn />
            </>
        )
    }
}

