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



  render() {
    return (
      <>
        <div></div>
        <form
          onSubmit={this.createCard}
          className="card card--form">
          <h1>Create New Card</h1>
          <div className="form__inputs-wrapper">

            {/* <div className="form-group"> */}
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
            {/* </div> */}

            {/* <div className="form-group"> */}
              <label htmlFor="">Answer</label>
              <textarea
                type="text"
                className="form-control"
                placeholder="Answer Here"
                name="answer"
                onChange={this.updateCardAttribute}
                value={this.state.answer}
              />
            {/* </div> */}

            {/* <div className="form-group"> */}
              <label htmlFor="">Code Example</label>
              <textarea
                type="text"
                className="form-control"
                placeholder="Example Here"
                name="example"
                onChange={this.updateCardAttribute}
                value={this.state.example}
              />
            {/* </div> */}

            {/* <div className="form-group"> */}
              <label htmlFor="">Link URL</label>
              <input
                type="text"
                className="form-control"
                placeholder="Link Here"
                name="link"
                onChange={this.updateCardAttribute}
                value={this.state.link}
              />
            {/* // </div> */}
          </div>

          <button class="hidden" type="submit">Submit</button>
        </form>
        <div></div>
      </>
    )
  }
}
