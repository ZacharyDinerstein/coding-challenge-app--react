import React, { Component, useState } from 'react';
import './App.scss';
import Card from '../Card/Card';
import Form from '../Form/Form';
import cardData from '../../data/cardData.json';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: cardData,
      organizedCards: {},
      formVisible: false
    }
  }

  componentDidMount = () => {
    this.organizeCards(this.state.cards)
  }

  checkState = () => {
    console.log(this.state)
  }

  createCard = (newCard) => {
    this.setState({
      cards: [...this.state.cards, newCard]
    }, () => {
      this.organizeCards(this.state.cards)
    })
  }

  toggleComponent = () => {
    let { formVisible } = this.state;

    this.setState({
      formVisible: !formVisible
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




  render() {
    let { organizedCards, formVisible } = this.state;

    return (
      <>
        {/* <button onClick={this.checkState}>Check State</button> */}
        <header>
          <div className="banner-text-container">
            <h1 className="banner-text">Learn From Interview</h1>
            <h1 className="banner-text banner-text--larger">Fails</h1>
            <button onClick={this.toggleComponent}>Create New Card</button>
          </div>
        </header>


        <Form
          createCard={(newCard) => { this.createCard(newCard) }}
          toggleComponent={this.toggleComponent}
          formVisible={formVisible}
        />

        <main>
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
        </main>

      </>
    );
  }
}

