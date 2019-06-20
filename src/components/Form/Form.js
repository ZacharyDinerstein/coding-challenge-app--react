import React, { Component } from 'react'


export default class Form extends Component {

  state = {
    question: '',
    answer: '',
    example: '',
    link: ''
  }

  updateCardAttribute = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  resetState = () => {
    this.setState({
      question: '',
      answer: '',
      example: '',
      link: ''
    })
  }

  createCard = (e) => {
    e.preventDefault();

    let newCard = {
      question: this.state.question,
      answers: [{
        answer: this.state.answer,
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
              className="form-control"
              placeholder="Question Here"
              name="question"
              index={0}
              onChange={this.updateCardAttribute}
              value={this.state.question}
            />
            <label htmlFor="">Answer</label>
            <textarea
              type="text"
              className="form-control"
              placeholder="Answer Here"
              name="answer"
              onChange={this.updateCardAttribute}
              value={this.state.answer}
              onKeyDown={this.allowTabs}
            />

            <label htmlFor="">Code Example</label>
            <textarea
              type="text"
              className="form-control"
              placeholder="Example Here"
              name="example"
              onChange={this.updateCardAttribute}
              value={this.state.example}
            />
            <label htmlFor="">Link URL</label>
            <input
              type="text"
              className="form-control"
              placeholder="Link Here"
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
