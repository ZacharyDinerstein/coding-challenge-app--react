import React, { Component } from 'react'
import AddAnswerBtn from '../Button/AddAnswerBtn';

export default class AnswerAndExampleInputs extends Component {
    state = {
        btnChecked: false
    }

    hideComponent = () => {
        this.setState({
            btnChecked: true
        })
    }

    render() {
        let {
            answer,
            example,
            updateObjectAttributeWithinCardsArray,
            allowTabs,
        } = this.props;


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
                    addAdditionalFields={(elemToCreate) => this.props.addAdditionalFields(elemToCreate)}
                    hideComponent={this.hideComponent}
                    btnChecked={this.state.btnChecked}
                />
            </>
        )
    }
}

