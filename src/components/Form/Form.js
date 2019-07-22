import React, { Component } from 'react';
import AnswerAndExampleInputs from './AnswerAndExampleInputs';
import Input from './Input';
import CategoryInput from './CategoryInput';
import CompanyInput from './CompanyInput';

let INITIALSTATE = {
  question: '',
  answers: [{
    answer: '',
    example: ''
  }],
  links: [''],
  categories: [''],
  company: '',
  tags: ['']
}

export default class Form extends Component {
  state = INITIALSTATE;

  updateCardAttribute = (e, category, index) => {
    let { name, value } = e.target,
      newEntry;

    if (Array.isArray(this.state[category])) {
      newEntry = [...this.state[name]];
      newEntry[index] = value;
    } else {
      newEntry = value;
    }

    this.setState({
      [name]: newEntry
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
    let field = this.state[category],
      newFields = (category === "answers") ? { answer: '', example: '' } : '',
      newArray;

    newArray = [
      ...field.slice(0, index + 1),
      newFields,
      ...field.slice(index + 1)
    ];

    this.setState({
      [category]: newArray
    })
  }

  handleRemoveInputs = (category, indexOfClickedBtn) => {
    let newArray = this.state[category].filter((item, itemIndex) =>
      itemIndex !== indexOfClickedBtn
    );

    this.setState({
      [category]: newArray
    })
  }

  resetState = () => { this.setState(INITIALSTATE) }

  createCard = (e) => {
    e.preventDefault();

    let { question, answers, links, tags, categories, company } = this.state;

    let newCard = {
      question: question,
      answers: answers,
      links: links,
      categories: categories,
      company: company,
      tags: tags
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
                required
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
                    handleRemoveInputs={(category) => this.handleRemoveInputs(category, index)}
                  />
                )
              })}

              {this.state.links.map((item, index) => {
                return (
                  <Input
                    category="links"
                    label="Link"
                    afterLabel="URL"
                    key={index}
                    index={index}
                    item={item}
                    updateCardAttribute={(e, category) => this.updateCardAttribute(e, category, index)}
                    handleAddNewInputs={(category) => this.handleAddNewInputs(category, index)}
                    handleRemoveInputs={(category) => this.handleRemoveInputs(category, index)}
                  />
                )
              })}

              {this.state.categories.map((item, index) => {
                return (
                  <CategoryInput
                    key={index}
                    index={index}
                    item={item}
                    label="Category"
                    updateCardAttribute={(e) => this.updateCardAttribute(e, index)}
                    handleAddNewInputs={(category) => this.handleAddNewInputs(category, index)}
                    handleRemoveInputs={(category) => this.handleRemoveInputs(category, index)}
                  />
                )
              })}

              <CompanyInput
                label="Company"
                item={this.state.company}
                updateCardAttribute={(e) => this.updateCardAttribute(e)}
              />

              {this.state.tags.map((item, index) => {
                return (
                  <Input
                    category="tags"
                    label="Tag"
                    key={index}
                    index={index}
                    item={item}
                    updateCardAttribute={(e, category) => this.updateCardAttribute(e, category, index)}
                    handleAddNewInputs={(category) => this.handleAddNewInputs(category, index)}
                    handleRemoveInputs={(category) => this.handleRemoveInputs(category, index)}
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