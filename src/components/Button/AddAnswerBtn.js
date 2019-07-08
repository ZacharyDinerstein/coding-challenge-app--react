import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

export default class AddAnswerBtn extends Component {
  state = {
    checked: false
  }

  hideComponent = () => {
    this.setState({
      checked: true
    })
  }

  handleBtnClick = (elemToCreate) => {
    this.hideComponent();
    this.props.addAdditionalFields(elemToCreate);
  }

  render() {
    let classes = this.state.checked ? "card__checkbox-wrapper hidden" : "card__checkbox-wrapper";

    return (
      <>
        <div
          className={classes}
          onClick={() => this.handleBtnClick("answerField")}
        >
          <FontAwesomeIcon icon={faPlusCircle} />
          <span>Add Answer</span>
        </div>
        <div className={classes}></div>
      </>
    )
  }
}