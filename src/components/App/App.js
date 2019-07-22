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
    }, () => {
      this.organizeCards(this.state.cards)
    })
  }

  organizeCards = (cards) => {
    let organizedCards = {};

    cards.map(card => {

      card.categories && card.categories.map(category => {
        category = category.toLowerCase();

        if (organizedCards[category]) {
          organizedCards[category].push(card);
        } else {
          organizedCards[category] = [card];
        }
        return '';
      })
      return '';
    })

    this.setState({
      organizedCards: organizedCards
    })
  }

  componentDidMount = () => {
    this.organizeCards(this.state.cards)
  }

  checkState = () => {
    console.log(this.state)
  }



  render() {
    let { organizedCards } = this.state;

    return (
      <>
        <button onClick={this.checkState}>Check State</button>
        <div className="cards-container cards-container--form">
          <Form createCard={(newCard) => { this.createCard(newCard) }} />
        </div>

        {organizedCards && Object.keys(organizedCards).map(category => {
          let cards = organizedCards[category];
          category = category.toUpperCase();

          return (
            <>
              <h1 className="dashbord__question-type">{category}</h1>
              <div className="cards-container cards-container--questions">

                {cards.map((card, index) => {
                  return (
                    <Card key={index} cardData={card} />
                  )
                })}

              </div>
            </>
          )
        })}

      </>
    );
  }
}

