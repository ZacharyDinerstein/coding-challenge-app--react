import React, { Component } from 'react';
import CardMainContent from './CardMainContent';
import Toggle from '../../Toggle';
import './Card.scss';

export default class Card extends Component {
  state = {
    fullWidth: false
  };

  toggleCardFullWidth = () => {
    this.setState({
      fullWidth: !this.state.fullWidth
    })
  }


  render() {
    let { cardData } = this.props;

    let classes = this.state.fullWidth ? "card card--question card--full-width" : "card card--question";

    return (
      <div className={classes} >
        <h3 className="card__question">{cardData.question}</h3>
        <Toggle toggleCardFullWidth={this.toggleCardFullWidth}>
          <CardMainContent cardData={cardData} />
        </Toggle>
      </div>
    )
  }
}
