import React, { Component } from 'react';

export default class AddAnswerBtn extends Component {
  state = {
    checked: false
  }

  hideComponent = (e) => {
    let { name } = e.target;

    this.setState({
      [name]: true
    })
  }

  handleBtnClick = (e) => {
    this.hideComponent(e);
    this.props.addAdditionalFields(e);
  }

  render() {
    let classes = this.state.checked ? "card__checkbox-wrapper hidden" : "card__checkbox-wrapper";

    return (
      <>
        <div className={classes}>
          <input
            id="addAnswerBtn"
            type="checkbox"
            name="checked"
            className="answerFields"
            onClick={this.handleBtnClick}
          />
          <label htmlFor="addAnswerBtn">Add Answer</label>
        </div>
        <div className={classes}></div>
      </>
    )
  }
}