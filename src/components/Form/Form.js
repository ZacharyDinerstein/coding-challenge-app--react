import React, { Component } from 'react';
import AnswerAndExampleInputs from './AnswerAndExampleInputs';
import Input from './Input';
import CategoryInput from './CategoryInput';

let INITIALSTATE = {
  question: '',
  answers: [{
    answer: '',
    example: ''
  }],
  links: [''],
  categories: ['javascript'],
  company: '',
  tags: [''],
  cardContentsStringified: ''
}


export default class Form extends Component {
  state = INITIALSTATE;

  updateCardAttribute = (e, category, index) => {
    let { name, value } = e.target,
      newEntry,
      object;

    // Add new value to a string that's part of an object that's part of an Array within state
    if (category && typeof this.state[category][index] === "object") {
      newEntry = [...this.state[category]];
      object = newEntry[index];
      object[name] = value;

      this.setState({
        [category]: newEntry
      })

      //Add new value to a string that's part of an Array within state
    } else if (Array.isArray(this.state[category])) {
      newEntry = [...this.state[name]];
      newEntry[index] = value;

      this.setState({
        [name]: newEntry
      })

      //Add new value to a string within state
    } else {
      newEntry = value;

      this.setState({
        [name]: newEntry
      })
    }

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

  resetState = () => {
    this.setState({
      question: '',
      answers: [{
        answer: '',
        example: ''
      }],
      links: [''],
      categories: ['javascript'],
      company: '',
      tags: [''],
      cardContentsStringified: ''
    })
  }

  stringifyCardContents = item => {

    if (typeof item === "string") {
      this.setState({
        cardContentsStringified: this.state.cardContentsStringified += ' ' + item
      })
    } else if (item && typeof item === "object") {
      for (var key in item) {
        if (key !== "cardContentsStringified"){
          this.stringifyCardContents(item[key]);
        }
      }
    }

  }

  createCard = (e) => {
    e.preventDefault();
    
    this.stringifyCardContents(this.state);

    let { question, answers, links, tags, categories, company, cardContentsStringified } = this.state,
    { createCard, toggleComponent } = this.props;
    
    
    let newCard = {
      question: question,
      answers: answers,
      links: links,
      categories: categories,
      company: company,
      tags: tags,
      cardContentsStringified: cardContentsStringified
    };

    createCard(newCard);
    toggleComponent();
    this.resetState();
  }

  allowTabs = (e) => {
    let t = e.target;

    if (e.keyCode === 18) {
      let v = t.value,
        s = t.selectionStart,
        e = t.selectionEnd;

      t.value = v.substring(0, s) + '\t' + v.substring(e);
      t.selectionStart = t.selectionEnd = s + 1;
      return false;
    }
  }

  showState = () => {
    console.log(this.state)
  }


  render() {
    let { formVisible, toggleComponent } = this.props,
      classes = formVisible ? 'cards-container cards-container--form' : 'cards-container cards-container--form hidden';


    return (
      <div className={classes}>

        <div className="card card--form">
          <button onClick={this.showState}>SHOW STATE</button>
          <form
            className="form"
            onSubmit={this.createCard}
          >
            <h1>Create New Card</h1>
            <h1
              className="form__close-button"
              onClick={toggleComponent}>
              X
            </h1>
            <p className="sub-header">(Use OPTION key to indent)</p>
            <div className="form__inputs-wrapper">
              <Input
                label="Question"
                category="question"
                value={this.state.question}
                includeAddRemoveButtons={false}
                updateCardAttribute={(e) => this.updateCardAttribute(e)}
                required={true}
              />

              {this.state.answers.map((item, index) => {
                return (
                  <AnswerAndExampleInputs
                    category="answers"
                    answer={item['answer']}
                    example={item['example']}
                    updateCardAttribute={(e, category) => this.updateCardAttribute(e, category, index)}
                    allowTabs={this.allowTabs}
                    key={index}
                    index={index}
                    handleAddNewInputs={(category) => this.handleAddNewInputs(category, index)}
                    handleRemoveInputs={(category) => this.handleRemoveInputs(category, index)}
                  />
                )
              })}


              {this.state.categories.map((item, index) => {
                return (
                  <CategoryInput
                    label="Category"
                    key={index}
                    index={index}
                    value={item}
                    updateCardAttribute={(e, category) => this.updateCardAttribute(e, category, index)}
                    handleAddNewInputs={(category) => this.handleAddNewInputs(category, index)}
                    handleRemoveInputs={(category) => this.handleRemoveInputs(category, index)}
                  />
                )
              })}

              <Input
                label="Company"
                category="company"
                value={this.state.company}
                includeAddRemoveButtons={false}
                updateCardAttribute={(e) => this.updateCardAttribute(e)}
              />

              {this.state.links.map((item, index) => {
                return (
                  <Input
                    label="Link"
                    category="links"
                    afterLabel="URL"
                    key={index}
                    index={index}
                    value={item}
                    updateCardAttribute={(e, category) => this.updateCardAttribute(e, category, index)}
                    handleAddNewInputs={(category) => this.handleAddNewInputs(category, index)}
                    handleRemoveInputs={(category) => this.handleRemoveInputs(category, index)}
                  />
                )
              })}

              {this.state.tags.map((item, index) => {
                return (
                  <Input
                    label="Tag"
                    category="tags"
                    key={index}
                    index={index}
                    value={item}
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
      </div>
    )
  }
}