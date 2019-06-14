import React, { Component } from 'react'

export default class Card extends Component {
  render() {
    return (
      <div className="card card--question">
        <h3 className="card__question">What's the difference between Null & Undefined?</h3>
        <div className="card__answer-wrapper">
          <p className="card__answer">Undefined is applied to a variable when it is not assigned any value.</p>
          <div className="card__example-wrapper">
            <p className="card__example-title">For example:</p>
              <pre>
            <code className="card__example">
                var x;
                console.log(x); //Undefined
            </code>
              </pre>
          </div>
        </div>
      </div>
    )
  }
}
