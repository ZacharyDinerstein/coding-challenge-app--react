import React, { Component } from 'react';
import './App.css';
import Card from './components/Card/Card';
import './components/Card/Card.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        cards: [
          {
            question: "What's the difference between Null & Undefined?",
            answers: [
              {
                answer: "Undefined is applied to a variable when it is not assigned any value.",
                example: "var x;<br/>console.log(x); //Undefined"
              },{
                answer: "Null is a value that you assign to a variable that means 'Nothing'.",
                example: "var x = null;<br />console.log(x); //null"
              }
            ],
            links: [
              'https://developers.google.com/web/fundamentals/primers/promises#whats-all-the-fuss-about',
              'lkajhsdkfjh'
            ]
          }
        ]
      }
    };
  }

  render() {
    return (
      <div>
        <h1>JAVASCRIPT</h1>
        {this.state.data.cards.map((card) => {

          return (
            <Card cardData={card} />
          )
        })}
      </div >
    );
  }
}

{/* <div className="card__answer-wrapper">
  <p className="card__answer"></p>
  <div className="card__example-wrapper">
    <p className="card__example-title">For example:</p>
    <code className="card__example">
      <pre>
        var x = null;
        console.log(x); //null
    </pre>
    </code>
  </div>
</div> */}