import React, { Component } from 'react';

export default class CardMainContent extends Component {

   render() {
      let { cardData } = this.props;
      console.log(cardData);

      return (
         <>
            {cardData.answers.map((answer, index) => {
               return (
                  <div key={index} className="card__answer-wrapper">
                     <p className="card__answer">{answer.answer}</p>

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
               return (
                  <a href={link}>Link 1</a>
               )
            })}
         </>
      )
   }
}
