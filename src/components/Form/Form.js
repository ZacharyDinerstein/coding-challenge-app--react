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

  passNewCard = (e) => {
    e.preventDefault();

    let newCard = {
      question: this.state.question
    };

    this.props.createCard(newCard);
  }
  

  render() {
    return (
      <form
        onSubmit={this.passNewCard}
        className="">
        <h1>Create New Card</h1>

        <div className="form-group">
          <label htmlFor="">Question</label>
          <input
            type="text"
            className="form-control"
            placeholder="Question Here"
            onChange={this.updateQuestion}
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
