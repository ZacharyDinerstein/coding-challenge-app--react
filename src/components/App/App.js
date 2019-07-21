import React, { Component } from 'react';
import './App.scss';
import Card from '../Card/Card';
import Form from '../Form/Form';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        {
          question: "What's the difference between Null & Undefined?",
          answers: [
            {
              answer: "Undefined is applied to a variable when that variable is not assigned any value.",
              example: "var x;\nconsole.log(x);\t//Undefined"
            }, {
              answer: "Null is a value that means 'Nothing', which you can actively attach to a variable.",
              example: "var x = null;\nconsole.log(x);\t//null"
            }
          ],
          links: [],
          tags: ["JavaScript"]
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
              example: "var greetingPromise = sayHello();\ngreetingPromise.then(function (greeting) {\n\t\tconsole.log(greeting);\t\t//'hello world’\n\t},\n\n\tfunction (error) {\n\t\tconsole.error('uh oh: ', error);\t//'uh oh: something bad happened’ \n\t}\n);"
            }
          ],
          links: ["https://developers.google.com/web/fundamentals/primers/promises#whats-all-the-fuss-about"]
        }, {
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
      ],
      cardsOrderedByTag: {}
    };
  }

  createCard = (newCard) => {
    this.setState({
      cards: [...this.state.cards, newCard]
    })
  }

  render() {
    return (
      <>
        <div className="cards-container cards-container--form">
          <Form createCard={(newCard) => { this.createCard(newCard) }} />
        </div>

        <h1 className="dashbord__question-type">JAVASCRIPT</h1>
        <div className="cards-container cards-container--questions">

          {this.state.cards.map((card, index) => {
            return (
              <Card key={index} cardData={card} />
            )
          })}

        </div>
      </>
    );
  }
}

