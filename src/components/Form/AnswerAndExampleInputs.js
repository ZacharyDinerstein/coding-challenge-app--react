import React, { Component } from 'react'
import AddAnswerBtn from '../Button/AddAnswerBtn';

export default class AnswerAndExampleInputs extends Component {
    render() {
        let {
            answer,
            example
        } = this.props;

        return (
            <>
                <label htmlFor="">Answer</label>
                <textarea
                    type="text"
                    name="answer"
                    onChange={this.updateCardAttribute}
                    value={answer}
                    onKeyDown={this.allowTabs}
                />

                <label htmlFor="">Code Example</label>
                <textarea
                    type="text"
                    placeholder="Optional"
                    name="example"
                    onChange={this.updateCardAttribute}
                    value={example}
                    onKeyDown={this.allowTabs}
                />
                <AddAnswerBtn />
            </>
        )
    }
}

