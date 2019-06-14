import React, { Component } from 'react';

export default class Card extends Component {
  render() {
    let card = this.props.cardData;

    return (
      <div className="card card--question">
        <h3 className="card__question">{card.question}</h3>

        {card.answers.map((answer) => {
          return (
            <div className="card__answer-wrapper">
              <p className="card__answer">{answer.answer}</p>
              <div className="card__example-wrapper">
                {/* <p className="card__example-title">For example:</p> */}
                <code className="card__example">
                  <pre>
                    {answer.example}
                  </pre>
                </code>
              </div>
            </div>
          )
        })};
      </div>
    )
  }
}
