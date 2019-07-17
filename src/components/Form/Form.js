import React, { Component } from 'react';
import AnswerAndExampleInputs from './AnswerAndExampleInputs';
import LinkInput from './LinkInput';
// import shortid from 'shortid';


// TODO
// - Fix the add button toggle 
// - Refactor all components to functional components that can be


export default class Form extends Component {
  state = {
    question: '',
    answers: [{
      answer: '',
      example: ''
    }],
    links: ['']
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

    object[name] = value;

    this.setState({
      answers: newArray
    })
  }

  handleAddNewInputs = (category, index) => {
    switch (category) {
      case "answerFields": {
        this.addAdditionalAnswerFields(index);
        break;
      }
      case "addLink": {
        this.addAdditionalLinks(index);
        break;
      }
      default: {
        console.log("Invalid choice");
        break;
      }
    }
  }

  addAdditionalAnswerFields = (index) => {
    let { answers } = this.state,
      newFields = { answer: '', example: '' },
      newArray;

    newArray = [
      ...answers.slice(0, index + 1),
      newFields,
      ...answers.slice(index + 1)
    ];

    this.setState({
      answers: newArray
    })
  }

  addAdditionalLinks = (index) => {
    let { links } = this.state,
        newArray;     

    newArray = [
      ...links.slice(0, index + 1),
      "",
      ...links.slice(index + 1)
    ];

    this.setState({
      links: newArray
    })
  }

  removeFields = (category, indexOfClickedBtn) => {
    let newArray;

    if (category === "answerFields") {
      newArray = this.state.answers.filter((answer, answerIndex) => answerIndex !== indexOfClickedBtn);
    }

    this.setState({
      answers: newArray
    })
  }


  resetState = () => {
    this.setState({
      question: '',
      answers: [{
        answer: '',
        example: ''
      }],
      links: ['']
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
                    index={index}
                    handleAddNewInputs={(category) => this.handleAddNewInputs(category, index)}
                    removeFields={(category) => this.removeFields(category, index)}
                  />
                )
              })}

              {this.state.links.map((link, index) => {
                return (
                  <LinkInput
                    key={index}
                    link={link}
                    updateCardArrayAttribute={(e) => this.updateCardArrayAttribute(e, index)}
                    handleAddNewInputs={(category) => this.handleAddNewInputs(category, index)}
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