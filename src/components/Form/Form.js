import React, { Component } from 'react';
import AnswerAndExampleInputs from './AnswerAndExampleInputs';
import LinkInput from './LinkInput';
import './Form.scss';



// TODO
// - Update state object as an object
//     - Convert answer first
//          - 




export default class Form extends Component {

  state = {
    question: '',
    answers: [{
      answer: 'Add answer',
      example: 'Optional'
    }],
    link: ['Optional'],
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

  updateObjectAttributeWithinCardsArray = (e, index) => {
    let { name, value } = e.target,
      newArray = [...this.state.answers],
      object = newArray[index];

    object[name] = value

    this.setState({
      answers: newArray
    })
  }

  resetState = () => {
    this.setState({
      question: '',
      answer: ['Add Answer'],
      example: ['Optional'],
      link: ['Optional']
    })
  }

  createCard = (e) => {
    e.preventDefault();

    let newCard = {
      question: this.state.question,
      answers: this.state.answers,
      links: [
        this.state.link[0]
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

            {this.state.answers.map((answerObj, index) => {
              return (
                <AnswerAndExampleInputs
                  answer={answerObj['answer']}
                  example={answerObj['example']}
                  updateObjectAttributeWithinCardsArray={(e) => this.updateObjectAttributeWithinCardsArray(e, index)}
                  allowTabs={this.allowTabs}
                  key={index}
                />
              )
            })}

            {this.state.link.map((link, index) => {
              return (
                <LinkInput
                  link={link}
                  updateCardArrayAttribute={(e) => this.updateCardArrayAttribute(e, index)}
                  key={index}
                />
              )
            })}
          </div>

          <button className="hidden" type="submit">Submit</button>
        </form>
        <div></div>
      </>
    )
  }
}



