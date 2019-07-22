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

      card.tags && card.tags.map(tag => {
        tag = tag.toLowerCase();

        if (organizedCards[tag]) {
          organizedCards[tag].push(card);
        } else {
          organizedCards[tag] = [card];
        }
      })
    })

    this.setState({
      organizedCards: organizedCards
    })
  }

  componentDidMount = () => {
    this.organizeCards(this.state.cards)
  }


  render() {
    let { organizedCards } = this.state;

    return (
      <>
        <div className="cards-container cards-container--form">
          <Form createCard={(newCard) => { this.createCard(newCard) }} />
        </div>

        {organizedCards && Object.keys(organizedCards).map(tag => {
          let cards = organizedCards[tag];
          tag = tag.toUpperCase();

          return (
            <>
              <h1 className="dashbord__question-type">{tag}</h1>
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

