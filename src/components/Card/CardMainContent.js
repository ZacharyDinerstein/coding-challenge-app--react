import React, { Component } from 'react';

export default class CardMainContent extends Component {

   render() {
      let { cardData } = this.props;

      return (
         <>
            {cardData.answers.map((answer, index) => {
               return (
                  <div key={index} className="card__answer-wrapper">
                     <pre className="card__answer">{answer.answer}</pre>

                     {answer.example &&
                        <div className="card__example-wrapper">
                           <p className="card__example-title">Example:</p>
                           <pre>
                              <code className="card__example">
                                 {answer.example}
                              </code>
                           </pre>
                        </div>
                     }
                  </div>
               )
            })}
            {cardData.links.map((link, index) => {
               let linkName = `Link ${index + 1}`
               return (
                  <a key={index} href={link}>{linkName}</a>
               )
            })}
         </>
      )
   }
}
