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
      search: '',
      filteredData: []
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

  searchCards = (cards) => {

    let currentList, newList = [],
      searchTerm = this.state.search;

    if (searchTerm !== "") {
      cards.map(cardContents => {
        let cardContentsAsString = '';

        // cardContentsAsString = cardContentsAsString + ' ' + this.returnAllCardValues(cardContents, '');
        // console.log(cardContentsAsString);
      });
    }


    // currentList = this.state.cards;
    // newList = currentList.filter(cardContents => {

    //   console.log(this.state)

    //   let cardContentsAsString = '';
    //   for (var key in cardContents) {
    //     // console.log(key)
    //     // console.log(cardContents)
    //     console.log(typeof cardContents[key])
    //     console.log(cardContents[key])
    //     if (typeof cardContents[key] === "string"){
    //       cardContentsAsString += ' ' + cardContents[key].toLowerCase();
    //     }
    //   }


    //   const filter = searchTerm.toLowerCase();

    //   return cardContentsAsString.includes(filter);
    // });
    // }
    // else {

    //     newList = this.state.data;
    //   }

    // this.setState({
    //   filteredData: newList
    // })
  }

  updateSearch = (e) => {
    let { name, value } = e.target;

    this.setState({
      [name]: value
    }, () => this.searchCards(this.state.cards)
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
          {organizedCards && Object.keys(organizedCards).map(category => {
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

