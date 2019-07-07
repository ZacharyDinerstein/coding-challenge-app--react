import React, { Component } from 'react';

export default class AddAnswerBtn extends Component {
  state = {
    checked: false
  }

  toggleStateBool = (e) => {
    let key = e.target.name;

    this.setState({
      [key]: !this.state[key]
    })
  }

  render() {
    let classes = this.state.checked ? "card__checkbox-wrapper hidden" : "card__checkbox-wrapper";

    return (
      <>
        <div className={classes}>
          <input type="checkbox" id="addAnswerBtn" name="checked" onClick={this.toggleStateBool} />
          <label htmlFor="addAnswerBtn">Add Answer</label>
        </div>
        <div className={classes}></div>
      </>
    )
  }
}