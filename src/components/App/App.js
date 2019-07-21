import React, { Component } from 'react';
import './App.scss';
import Card from '../Card/Card';
import Form from '../Form/Form';
import cardData from '../../data/cardData.json';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: cardData,
      organizedCards: {}
    }
  }

  createCard = (newCard) => {
    this.setState({
      cards: [...this.state.cards, newCard]
    })
  }

  organizeCards = (cards) => {
    console.log("hi there");
    console.log(this.state.cards);
  }

  componentDidMount = () => {
    this.organizeCards(this.state.cards)
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

