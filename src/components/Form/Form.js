import React, { Component } from 'react'

export default class Form extends Component {

  state = {
    question: '',
    answers: [],
    links: []
  }

  updateQuestion = (e) => {
    this.setState({
      question: e.target.value
    })
  }

  resetState = () => {
    this.setState({
      question: '',
      answers: [],
      links: []
    })
  }
  
  createCard = (e) => {
    e.preventDefault();

    let newCard = {
      question: this.state.question
    };

    this.props.createCard(newCard);
    this.resetState();
  }



  render() {
    return (
      <form
        onSubmit={this.createCard}
        className="">
        <h1>Create New Card</h1>

        <div className="form-group">
          <label htmlFor="">Question</label>
          <input
            type="text"
            className="form-control"
            placeholder="Question Here"
            onChange={this.updateQuestion}
            value={this.state.question}
          />
        </div>

        {/* <div className="form-group">
          <label htmlFor="Password">Password</label>
          <input
            type="text"
            className="form-control"
            placeholder="there" />
        </div> */}
        <button type="submit">Submit</button>
      </form>
    )
  }
}
