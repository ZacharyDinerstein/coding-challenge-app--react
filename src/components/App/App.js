import React, { Component } from 'react';
import './App.scss';
import Card from '../Card/Card';
import Form from '../Form/Form';
import cardData from '../../data/cardData.json';


let INITIALFORMCONTENTS = {
  question: '',
  answers: [{
    answer: '',
    example: ''
  }],
  links: [''],
  categories: ['javascript'],
  company: '',
  tags: [''],
  cardContentsStringified: ''
}

export default class App extends Component {
  state = {
    cards: cardData,
    organizedCards: {},
    formVisible: false,
    formContents: INITIALFORMCONTENTS,
    search: '',
    filteredData: [],
    newCardIdNum: cardData.length
  }

  componentDidMount = () => {
    this.organizeCards(this.state.cards)
  }

  handleCreateCard = (newCard) => {
    if (newCard.id === undefined) {
      this.createCard(newCard);
    } else {
      this.updateExistingCard(newCard);
    }
  }

  createCard = (newCard) => {
    console.log("Creating New Card");

    let { newCardIdNum } = this.state,
      increasedCardId;

    newCard.id = newCardIdNum;
    increasedCardId = newCardIdNum + 1;

    console.log(newCard.id);

    this.setState({
      newCardIdNum: increasedCardId,
      cards: [...this.state.cards, newCard]
    }, () => {
      this.organizeCards(this.state.cards)
    })
  }

  updateExistingCard = (newCard) => {
    console.log("Updating existing card")
    // console.log(newCard.id)

    let newCardArray = [...this.state.cards],
        indexOfChosenCard;

    for (let i = 0; i <= newCardArray.length; i++){
      let card = newCardArray[i];
      // console.log(card.id);

      if (card.id === newCard.id){
        indexOfChosenCard = i;
        break;
      }
    }

    // console.log(newCardArray);
    console.log(indexOfChosenCard);
    newCardArray[indexOfChosenCard] = newCard;


    this.setState({
      cards: newCardArray
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

  searchCards = cards => {
    let currentList, newList = [],
      searchTerm = this.state.search;

    if (searchTerm !== "") {
      currentList = cards;
      newList = currentList.filter(item => item['cardContentsStringified'].toLowerCase().includes(searchTerm));
    }

    this.setState({
      filteredData: newList
    })
  }

  updateSearch = (e) => {
    let { name, value } = e.target;
    value = value.toLowerCase();

    this.setState({
      [name]: value
    }, () => this.searchCards(this.state.cards)
    )
  }

  handleDeleteItem = (id) => {
    let newCardsArr = this.state.cards.filter(card => card.id !== id);

    this.setState({
      cards: newCardsArr
    }, () => this.organizeCards(this.state.cards)
    );
  }

  handleEditItem = (id) => {

    this.setState({
      formVisible: true,
      formContents: this.state.cards[id]
    }, () => {
      this.showState();
    })

    /* 
    add data from card to that form
    -- Add a single value to the Form

    submit the form 
    update the card with the new data
    */

  }

  showState = () => {
    console.log(this.state)
  }

  render() {
    let { organizedCards, formVisible, formContents } = this.state;

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
            <button onClick={this.showState}>SHOW STATE</button>
          </div>
        </header>


        <Form
          createCard={(newCard) => { this.handleCreateCard(newCard) }}
          toggleComponent={this.toggleComponent}
          formVisible={formVisible}
          formContents={formContents}
        />

        <main>
          {this.state.search.length > 0 &&
            <>
              <h1 className="dashbord__question-type">SEARCH RESULTS</h1>
              <div className="cards-container cards-container--questions">

                {this.state.filteredData.map((card, index) => {
                  return (
                    <Card
                      key={card.id}
                      id={card.id}
                      cardData={card}
                      handleDeleteItem={(id) => this.handleDeleteItem(id)}
                    />
                  )
                })}
              </div>
            </>
          }

          {this.state.search.length === 0 &&

            organizedCards && Object.keys(organizedCards).map((category, index) => {
              let cards = organizedCards[category];
              category = category.toUpperCase();

              return (
                <div key={index} className="dashbord__question-section">
                  <h1 className="dashbord__question-type">{category}</h1>
                  <div className="cards-container cards-container--questions">

                    {cards.map((card, index) => {
                      return (
                        <Card
                          key={card.id}
                          id={card.id}
                          cardData={card}
                          handleDeleteItem={(id) => this.handleDeleteItem(id)}
                          handleEditItem={(id) => this.handleEditItem(id)}
                        />
                      )
                    })}

                  </div>
                </div>
              )
            })
          }
        </main>

      </>
    );
  }
}

