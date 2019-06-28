import React, { Component } from 'react';
import AnswerAndExampleInputs from './AnswerAndExampleInputs';
import './Form.scss';



export default class Form extends Component {

  state = {
    question: '',
    answer: [
      ''
    ],
    example: '',
    link: '',
    answerNum: 1,
    linkNum: 0
  }

  updateCardAttribute = (e) => {
    let { answer } = this.state,
        currentState = answer,
        { value }  = e.target,
        index = 0;

    console.log(answer)

    currentState[index] = value;

    this.setState({
      answer: currentState
    })
    console.log(this.state)
  }

  resetState = () => {
    this.setState({
      question: '',
      answer: [''],
      example: '',
      link: ''
    })
  }

  createCard = (e) => {
    e.preventDefault();

    let newCard = {
      question: this.state.question,
      answers: [{
        answer: this.state.answer[0],
        example: this.state.example
      }],
      links: [
        this.state.link
      ]
    };

    this.props.createCard(newCard);
    this.resetState();
  }

  allowTabs = (e) => {
    let t = e.target;

    if (e.keyCode === 91) {
      let v = t.value,
        s = t.selectionStart,
        e = t.selectionEnd;

      t.value = v.substring(0, s) + '\t' + v.substring(e);
      t.selectionStart = t.selectionEnd = s + 1;
      return false;
    }
  }

  toggleStateBool = (e) => {
    let name = e.target.name;

    this.setState({
      [name]: !this.state[name]
    })
  }

  render() {
    return (
      <>
        <div></div>
        <form
          onSubmit={this.createCard}
          className="card card--form">
          <h1>Create New Card</h1>
          <p className="sub-header">(Use COMMAND key to indent)</p>
          <div className="form__inputs-wrapper">

            <label htmlFor="">Question</label>
            <input
              type="text"
              name="question"
              index={0}
              onChange={this.updateCardAttribute}
              value={this.state.question}
            />

            <AnswerAndExampleInputs 
              answer={this.state.answer[0]}
              example={this.state.example}
              updateCardAttribute={this.updateCardAttribute}
              allowTabs={this.allowTabs}
            />
            
            <label htmlFor="">Link URL</label>
            <input
              type="text"
              placeholder="Optional"
              name="link"
              onChange={this.updateCardAttribute}
              value={this.state.link}
            />
          </div>

          <button className="hidden" type="submit">Submit</button>
        </form>
        <div></div>
      </>
    )
  }
}



