import React, { Component } from 'react';
import CardMainContent from './CardMainContent';
import Toggle from '../../Toggle';

export default class Card extends Component {
  render() {
    let { cardData } = this.props;

    return (
      <div className="card card--question">
        <h3 className="card__question">{cardData.question}</h3>
        <Toggle>
          <CardMainContent cardData={cardData} />
        </Toggle>
        {/* {cardData.answers.map((answer) => {
          return (
            <div className="card__answer-wrapper">
              <p className="card__answer">{answer.answer}</p>

              {answer.example && 
                <div className="card__example-wrapper">
                  <p className="card__example-title">For example:</p>
                  <code className="card__example">
                    <pre>
                      {answer.example}
                    </pre>
                  </code>
                </div>
              }

            </div>
          )
        })} */}

        {/* {cardData.links.map((link, index) => {
          let content = `Link ${index + 1}`;

          return (
            <button> <a href={link}>{content}</a> </button>
          )
        })} */}
      </div>
    )
  }
}
