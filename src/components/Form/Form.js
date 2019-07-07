import React, { Component } from 'react';
import AnswerAndExampleInputs from './AnswerAndExampleInputs';
import './Form.scss';
import { objectTypeSpreadProperty } from '@babel/types';


// TODO
// - Allow answer input field to update the answer array.
    //  - Understand the issue 

// - Use a map function to create all of the input fields on the page


export default class Form extends Component {

  state = {
    question: '',
    answer: ['Optional'],
    example: ['Optional'],
    link: '',
  }

  updateCardAttribute = (e) => {
    let { name, value } = e.target;

    this.setState({
      [name]: value
    })
  }
  
  updateCardArrayAttribute = (e, index) => {
    let { name, value } = e.target,
        newArray = [...this.state[name]];

    newArray[index] = value;

    this.setState({
      [name]: newArray
    })
  }

  resetState = () => {
    this.setState({
      question: '',
      answer: ['Optional'],
      example: ['Optional'],
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
              onChange={this.updateCardAttribute}
              value={this.state.question}
            />

            {this.state.answer.map((answer, index) => {
              return (
                <AnswerAndExampleInputs
                  answer={answer}
                  example={this.state.example[0]}
                  updateCardArrayAttribute={(e) => this.updateCardArrayAttribute(e, index)}
                  allowTabs={this.allowTabs}
                  index={index}
                  key={index}
                />
              )
            })}

            <label htmlFor="">Link URL</label>
            <input
              type="text"
              placeholder="Optional"
              name="link"
              onChange={this.updateCardArrayAttribute}
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



