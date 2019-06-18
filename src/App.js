import React, { Component } from 'react';
import './App.scss';
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
                example: "var x;\nconsole.log(x); //Undefined"
              }, {
                answer: "Null is a value that you assign to a variable that means 'Nothing'.",
                example: "var x = null;\nconsole.log(x); //null"
              }
            ],
            links: []
          }, {
            question: "Describe React State",
            answers: [
              {
                answer: "State is an object that holds all of our app's data",
              }
            ],
            links: []
          }, {
            question: "What is a JavaScript Promise?",
            answers: [
              {
                answer: "A JS Promise is essentially a callback that's used in partnership with asyncronous functions. Let's say you have a function that is fetching JSON from an API. You want to fire one response when the data returns and another if the data is not returned. Promises handle this for you.",
                example: "var greetingPromise = sayHello();\ngreetingPromise.then(function (greeting) {\n   console.log(greeting); // 'hello world’ },\n\n   function (error) {\n      console.error('uh oh: ', error);	 // 'uh oh: something bad happened’ \n   }\n);"
              }
            ],
            links: ["https://developers.google.com/web/fundamentals/primers/promises#whats-all-the-fuss-about"]
          }
        ]
      }
    };
  }

  render() {
    return (
      <>
        <h1 className="dashbord__question-type">JAVASCRIPT</h1>

        {this.state.data.cards.map((card, index) => {
          return (
            <>
              <Card key={index} cardData={card} />
            </>
          )
        })}

      </>
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