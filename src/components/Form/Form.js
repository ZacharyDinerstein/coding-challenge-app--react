import React, { Component } from 'react';
import AnswerAndExampleInputs from './AnswerAndExampleInputs';
import LinkInput from './LinkInput';



// TODO
// - Fix the add button toggle 
// - Refactor all components to functional components that can be


export default class Form extends Component {
  state = {
    question: '',
    answers: [{
      answer: 'Add answer',
      example: 'Optional'
    }],
    links: ['Optional']
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

  addAdditionalFields = (elemToCreate, index) => {
    let newFields,
      newArray,
      { answers } = this.state;

      console.log(index);
      console.log(answers);

    if (elemToCreate === "answerFields") {

      newFields = { answer: 'Add answer', example: 'Optional' };
      newArray = [
        ...answers.slice(0, index),
        newFields,
        ...answers.slice(index)
      ];
    }

    this.setState({
      answers: newArray
    })
  }

  removeFields = (elemToRemove) => {
    let newFields,
      newArray;

    if (elemToRemove === "answerField") {
      newFields = { answer: 'Add answer', example: 'Optional' };
      newArray = [...this.state.answers, newFields];
    }

    this.setState({
      answers: newArray
    })
  }


  resetState = () => {
    this.setState({
      question: '',
      answers: [{
        answer: 'Add answer',
        example: 'Optional'
      }],
      links: ['Optional']
    })

  }

  createCard = (e) => {
    e.preventDefault();

    let { question, answers, links } = this.state;

    let newCard = {
      question: question,
      answers: answers,
      links: [
        links
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
        <div className="card card--form">
          <form
            className="form"
            onSubmit={this.createCard} 
          >
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
                    addAdditionalFields={(elemToCreate) => this.addAdditionalFields(elemToCreate, index)}
                  />
                )
              })}

              {this.state.links.map((link, index) => {
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
        </div>
      </>
    )
  }
}