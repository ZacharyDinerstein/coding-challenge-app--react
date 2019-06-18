import React, { Component } from 'react'

export default class Form extends Component {
  
  createCard = (e) => {
    e.preventDefault();

    let newCard = {};
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
