import React, { Component } from 'react';
import './App.scss';
import Card from '../Card/Card';
import Form from '../Form/Form';
import cardData from '../../data/cardData.json';
import shortid from 'shortid';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: cardData,
      organizedCards: {},
      formVisible: true,
      search:''
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

  searchOrganizedCards = (cards) => {
    console.log("here");
  }

  updateSearch = (e) => {
    let { name, value } = e.target;

    this.setState({
      [name]: value
    }, () => this.searchOrganizedCards(this.state.organizedCards)
    )
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
            <input
                type="text"
                placeholder="Search"
                name="search"
                onChange={this.updateSearch}
                value={this.state.search}
            />
          </div>
        </header>


        <Form
          createCard={(newCard) => { this.createCard(newCard) }}
          toggleComponent={this.toggleComponent}
          formVisible={formVisible}
        />

        <main>
          {organizedCards && Object.keys(organizedCards).map((category, index) => {
            let cards = organizedCards[category];
            category = category.toUpperCase();

            return (
              <div key={shortid.generate()} className="dashbord__question-section">
                <h1 className="dashbord__question-type">{category}</h1>
                <div className="cards-container cards-container--questions">

                  {cards.map(card => {
                    return (
                      <Card key={shortid.generate()} cardData={card} />
                    )
                  })}

                </div>
              </div>
            )
          })}
        </main>

      </>
    );
  }
}

